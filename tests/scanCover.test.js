const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const babel = require("@babel/core");
const cheerio = require("cheerio");

let search;
let getPage;
const filename = path.join(__dirname, "../pages/api/scan-cover.js");
const code = babel.transformSync(fs.readFileSync(filename, "utf8"), {
  filename,
  plugins: ["@babel/plugin-transform-modules-commonjs"],
}).code;
const moduleResult = { exports: {} };
new Function("require", "module", "exports", code)((name) => {
  if (name === "../../apiHelpers/SearchScans") return (...args) => search(...args);
  if (name === "axios") return { get: (...args) => getPage(...args) };
  if (name === "cheerio") return cheerio;
  return require(name);
}, moduleResult, moduleResult.exports);
const handler = moduleResult.exports.default;

async function request(title, method = "GET") {
  const res = {
    statusCode: 200,
    headers: {},
    setHeader(name, value) { this.headers[name] = value; },
    status(code) { this.statusCode = code; return this; },
    json(body) { this.body = body; return this; },
  };
  await handler({ method, query: { title } }, res);
  return res;
}

test("returns the chapter for one exact title without requiring a cover", async () => {
  search = async () => [{ title: " One Piece ", img: "", chapt: "Chapter 300" }];
  const res = await request("one piece");
  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, { img: "", chaptMax: "Chapter 300" });
});

test("rejects ambiguous exact matches", async () => {
  search = async () => [
    { title: "One Piece", img: "a", chapt: "Chapter 1" },
    { title: "one piece", img: "b", chapt: "Chapter 2" },
  ];
  assert.equal((await request("One Piece")).statusCode, 404);
});

test("accepts only verified alternate titles", async () => {
  search = async () => [{
    title: "Main title", img: "cover", chapt: "Chapter 50",
    link: "https://manganato.xyz/read/main-title/en/chapter-50",
  }];
  getPage = async () => ({
    data: '<script type="application/ld+json">{"@type":"Book","alternateName":["Alternate title"]}</script>',
  });
  assert.deepEqual((await request("Alternate title")).body, {
    img: "cover", chaptMax: "Chapter 50",
  });
  assert.equal((await request("Unrelated title")).statusCode, 404);
});

test("returns an explicit rate limit and validates input", async () => {
  search = async () => { throw Object.assign(new Error("limited"), { response: { status: 429 } }); };
  const limited = await request("One Piece");
  assert.equal(limited.statusCode, 429);
  assert.equal(limited.headers["Retry-After"], "10");
  assert.equal((await request("")).statusCode, 400);
  assert.equal((await request("One Piece", "POST")).statusCode, 405);
});
