import getSearch from "../../apiHelpers/SearchScans";
import axios from "axios";
import cheerio from "cheerio";

export default async function scanCover(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ err: "Method not allowed." });
  }

  const { title } = req.query;
  if (typeof title !== "string" || !title.trim() || title.length > 200) {
    return res.status(400).json({ err: "A valid manga title is required." });
  }

  const normalize = (value) => value.trim().replace(/\s+/g, " ").toLowerCase();
  try {
    const results = await getSearch(title);
    const matches = results.filter(
      (item) => normalize(item.title) === normalize(title),
    );
    if (matches.length === 1) {
      return res.json({ img: matches[0].img, chaptMax: matches[0].chapt });
    }
    if (matches.length > 1) {
      return res.status(404).json({ err: "No unique cover found." });
    }

    const candidate = results[0];
    const chapter = candidate?.link && new URL(candidate.link);
    const path = chapter?.pathname?.match(/^\/read\/([^/]+)\/en\/chapter-[^/]+\/?$/);
    if (chapter?.origin === "https://manganato.xyz" && path) {
      const response = await axios.get(`https://manganato.xyz/manga/${path[1]}`, {
        timeout: 15000,
        headers: { "User-Agent": "Mozilla/5.0" },
      });
      const $ = cheerio.load(response.data);
      const scripts = $('script[type="application/ld+json"]').toArray();
      for (const script of scripts) {
        const metadata = JSON.parse($(script).html());
        if (metadata["@type"] === "Book" && Array.isArray(metadata.alternateName) &&
            metadata.alternateName.some((name) =>
              typeof name === "string" && normalize(name) === normalize(title),
            )) {
          return res.json({ img: candidate.img, chaptMax: candidate.chapt });
        }
      }
    }
    return res.status(404).json({ err: "No matching cover found." });
  } catch (error) {
    console.error("Failed to find scan cover:", error.code || error.message);
    if (error.response?.status === 429) {
      res.setHeader("Retry-After", "10");
      return res.status(429).json({ err: "Cover source rate limit reached." });
    }
    return res.status(502).json({ err: "Cover source unavailable." });
  }
}
