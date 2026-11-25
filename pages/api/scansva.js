import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import getScansVa from "../../apiHelpers/ScansVa";
import getScansReader from "../../apiHelpers/ScansReader";
import getSearch from "../../apiHelpers/SearchScans";

const legacyScanHosts = new Set([
  "chapmanganato.to",
  "readmanganato.com",
  "mangakakalot.com",
  "www.mangakakalot.com",
]);

async function findLegacyChapter(link, title, chapter) {
  let url;
  try {
    url = new URL(link);
  } catch (error) {
    return null;
  }
  if (!legacyScanHosts.has(url.hostname.toLowerCase()) || !title || !chapter) return null;
  const normalize = (value) => value.trim().replace(/\s+/g, " ").toLowerCase();
  const matches = (await getSearch(title)).filter(
    (item) => item.link && normalize(item.title) === normalize(title),
  );
  if (matches.length !== 1) return null;

  const latest = await getScansReader(matches[0].link);
  if (!latest) return null;
  const chapterNumber = url.pathname.match(/chapter[-_]([0-9]+(?:\.[0-9]+)?)(?:\/|$)/i);
  const savedChapter = chapterNumber ? `Chapter ${chapterNumber[1]}` : chapter;
  const selected = latest.options.find(
    (option) => normalize(option.label) === normalize(savedChapter),
  );
  if (!selected) return null;
  const reader = selected.value === matches[0].link
    ? latest
    : await getScansReader(selected.value);
  return reader && { ...reader, resolvedLink: selected.value };
}

const ScansVaHandler = nextConnect();
ScansVaHandler.use((req, res, next) => {
  const { uid, search, link } = req.query;
  return uid && !search && !link ? middleware(req, res, next) : next();
});

ScansVaHandler.get(async (req, res) => {
  const {
    query: { page, prevpage, uid, onlybookmark, link, search, title, chapter },
  } = req;

  if (search) {
    const scansListSearched = await getSearch(search);
    res.json(scansListSearched);
  } else if (link) {
    try {
      const reader = await findLegacyChapter(link, title, chapter) ||
        await getScansReader(link);
      if (!reader) {
        return res.status(502).json({ err: "The chapter is unavailable from its source." });
      }
      return res.json(reader);
    } catch (error) {
      console.error("Failed to load scan chapter:", error.code || error.message);
      return res.status(502).json({ err: "The chapter is unavailable from its source." });
    }
  } else {
    let scans = null;
    if (uid) {
      const bookmark = await req.db
        .collection("bookmarks")
        .findOne({ user_id: uid });
      if (bookmark) scans = bookmark.scans;
    }
    const scansList = await getScansVa(page, prevpage, scans, onlybookmark);
    res.json(scansList);
  }
});

export default ScansVaHandler;
