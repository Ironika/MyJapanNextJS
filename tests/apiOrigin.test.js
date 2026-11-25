const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const babel = require("@babel/core");

const calls = [];
let fail = false;
const axios = {
  get: async (url, options) => {
    calls.push({ method: "get", url, options });
    if (fail) throw new Error("unavailable");
    return { data: url.includes("scansva") && options?.params
      ? { scans: [], options: [] }
      : [] };
  },
  post: async (url, data) => {
    calls.push({ method: "post", url, data });
    return { data: { status: 200 } };
  },
  put: async (url, data) => {
    calls.push({ method: "put", url, data });
    return { data: { status: 200 } };
  },
};

const filename = path.join(__dirname, "../helpers/index.js");
const code = babel.transformSync(fs.readFileSync(filename, "utf8"), {
  filename,
  plugins: ["@babel/plugin-transform-modules-commonjs"],
}).code;
const result = { exports: {} };
new Function("require", "module", "exports", code)(
  (name) => name === "axios" ? axios : require(name), result, result.exports,
);
const { getApiDatas, getScanReader, postApiDatas, putApiDatas } = result.exports;

test("browser requests use the current origin for every operation", async () => {
  calls.length = 0;
  await getApiDatas("scansva", 1);
  await getScanReader("https://example.test/chapter");
  await postApiDatas("auth", { email: "test@example.test" });
  await putApiDatas("users/123", {});
  assert.deepEqual(calls.map((call) => call.url), [
    "/api/scansva?page=1",
    "/api/scansva",
    "/api/auth",
    "/api/users/123",
  ]);
});

test("server requests use the deployment URL and fall back for local ports", async () => {
  const vercelUrl = process.env.VERCEL_URL;
  const port = process.env.PORT;
  try {
    process.env.VERCEL_URL = "preview.example.vercel.app";
    await getApiDatas("scansva", 1, null, null, null, null, null, true);
    assert.equal(calls[calls.length - 1].url, "https://preview.example.vercel.app/api/scansva?page=1");
    assert.equal(calls[calls.length - 1].options.timeout, 15000);
    delete process.env.VERCEL_URL;
    process.env.PORT = "3456";
    await getApiDatas("animes", 1, null, null, null, null, null, true);
    assert.equal(calls[calls.length - 1].url, "http://127.0.0.1:3456/api/animes?page=1");
  } finally {
    if (vercelUrl === undefined) delete process.env.VERCEL_URL;
    else process.env.VERCEL_URL = vercelUrl;
    if (port === undefined) delete process.env.PORT;
    else process.env.PORT = port;
  }
});

test("server failures permit a browser retry, while browser failures preserve existing behavior", async () => {
  fail = true;
  try {
    assert.equal(await getApiDatas("scansva", 1, null, null, null, null, null, true), undefined);
    assert.deepEqual(await getApiDatas("scansva", 1), []);
  } finally {
    fail = false;
  }
});
