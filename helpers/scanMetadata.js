const METADATA_TTL = 5 * 60 * 1000;
const CACHE_PREFIX = "scan-metadata:";
const cache = new Map();
const queues = [Promise.resolve(), Promise.resolve()];
const queued = [0, 0];

export function readScanMetadata(title) {
  if (cache.has(title)) return cache.get(title);
  try {
    const stored = sessionStorage.getItem(CACHE_PREFIX + title);
    if (stored) {
      const entry = JSON.parse(stored);
      if (typeof entry?.updatedAt === "number" &&
          typeof entry?.data?.img === "string" &&
          typeof entry?.data?.chaptMax === "string") {
        cache.set(title, entry);
        return entry;
      }
    }
  } catch (error) {
    console.warn("Unable to read scan metadata cache:", error.message);
  }
  return null;
}

export function lookupScanMetadata(title, isActive) {
  const cached = readScanMetadata(title);
  if (cached && Date.now() - cached.updatedAt < METADATA_TTL) {
    return Promise.resolve(cached.data);
  }

  const index = queued[0] <= queued[1] ? 0 : 1;
  queued[index]++;
  const task = queues[index].then(async () => {
    if (!isActive()) return null;
    const cached = readScanMetadata(title);
    if (cached && Date.now() - cached.updatedAt < METADATA_TTL) return cached.data;
    for (let attempt = 0; attempt < 3; attempt++) {
      if (!isActive()) return null;
      const response = await fetch(`/api/scan-cover?${new URLSearchParams({ title })}`);
      if (response.status === 429 && attempt < 2) {
        await new Promise((resolve) => setTimeout(resolve, 10000));
        continue;
      }
      if (!response.ok) throw new Error(`Metadata lookup returned ${response.status}`);
      const result = await response.json();
      if (typeof result.img !== "string" || typeof result.chaptMax !== "string") {
        throw new Error("Invalid scan metadata response");
      }
      const entry = { data: result, updatedAt: Date.now() };
      cache.set(title, entry);
      try {
        sessionStorage.setItem(CACHE_PREFIX + title, JSON.stringify(entry));
      } catch (error) {
        console.warn("Unable to save scan metadata cache:", error.message);
      }
      return result;
    }
  });
  queues[index] = task.then(
    () => new Promise((resolve) => setTimeout(resolve, 500)),
    () => new Promise((resolve) => setTimeout(resolve, 500)),
  ).then(() => { queued[index]--; });
  return task;
}
