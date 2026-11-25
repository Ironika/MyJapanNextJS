const test = require("node:test");
const assert = require("node:assert/strict");
const { readScanMetadata, lookupScanMetadata } = require("../helpers/scanMetadata");

const storage = new Map();
global.sessionStorage = {
  getItem: (key) => storage.get(key) || null,
  setItem: (key, value) => storage.set(key, value),
};

const active = () => true;
const response = (data) => ({ ok: true, json: async () => data });

test("reuses fresh metadata without a network request", async () => {
  const data = { img: "cover", chaptMax: "Chapter 300" };
  storage.set("scan-metadata:fresh", JSON.stringify({ data, updatedAt: Date.now() }));
  global.fetch = () => { throw new Error("unexpected request"); };
  assert.deepEqual(readScanMetadata("fresh").data, data);
  assert.deepEqual(await lookupScanMetadata("fresh", active), data);
});

test("returns stale metadata immediately and refreshes it", async () => {
  const old = { img: "old", chaptMax: "Chapter 300" };
  const next = { img: "new", chaptMax: "Chapter 301" };
  storage.set("scan-metadata:stale", JSON.stringify({ data: old, updatedAt: Date.now() - 300001 }));
  global.fetch = async () => response(next);
  assert.deepEqual(readScanMetadata("stale").data, old);
  assert.deepEqual(await lookupScanMetadata("stale", active), next);
  assert.deepEqual(JSON.parse(storage.get("scan-metadata:stale")).data, next);
});

test("does not cache failed or invalid responses", async () => {
  global.fetch = async () => ({ ok: false, status: 404 });
  await assert.rejects(lookupScanMetadata("missing", active), /404/);
  assert.equal(readScanMetadata("missing"), null);
  global.fetch = async () => response({ img: "cover" });
  await assert.rejects(lookupScanMetadata("invalid", active), /Invalid scan metadata/);
  assert.equal(readScanMetadata("invalid"), null);
});

test("keeps stale metadata when refresh fails", async () => {
  const data = { img: "old", chaptMax: "Chapter 100" };
  storage.set("scan-metadata:failed-refresh", JSON.stringify({ data, updatedAt: Date.now() - 300001 }));
  global.fetch = async () => { throw new Error("network unavailable"); };
  await assert.rejects(lookupScanMetadata("failed-refresh", active), /network unavailable/);
  assert.deepEqual(readScanMetadata("failed-refresh").data, data);
});

test("does not request metadata for an inactive card", async () => {
  global.fetch = () => { throw new Error("unexpected request"); };
  assert.equal(await lookupScanMetadata("inactive", () => false), null);
});

test("limits simultaneous requests to two", async () => {
  let running = 0;
  let peak = 0;
  global.fetch = async () => {
    running++;
    peak = Math.max(peak, running);
    await new Promise((resolve) => setTimeout(resolve, 700));
    running--;
    return response({ img: "cover", chaptMax: "Chapter 1" });
  };
  await Promise.all(["parallel-1", "parallel-2", "parallel-3"].map(
    (title) => lookupScanMetadata(title, active),
  ));
  assert.equal(peak, 2);
});

test("retries rate-limited requests", async () => {
  let attempts = 0;
  const timer = global.setTimeout;
  global.setTimeout = (callback, delay, ...args) =>
    timer(callback, delay === 10000 ? 0 : delay, ...args);
  global.fetch = async () => {
    attempts++;
    return attempts < 3
      ? { ok: false, status: 429 }
      : response({ img: "cover", chaptMax: "Chapter 2" });
  };
  try {
    assert.equal((await lookupScanMetadata("retry", active)).chaptMax, "Chapter 2");
    assert.equal(attempts, 3);
  } finally {
    global.setTimeout = timer;
  }
});
