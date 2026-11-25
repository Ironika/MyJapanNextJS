import axios from "axios";
import cheerio from "cheerio";

export default async function getScansReader(link) {
  const json = await axios.get(link, {
    timeout: 15000,
    headers: { "User-Agent": "Mozilla/5.0" },
  });

  const $ = cheerio.load(json?.data);
  let container = $(".chapter-reader img");
  if (container.length === 0) {
    container = $("#vungdoc img, .container-chapter-reader img");
  }
  if (container.length === 0) {
    return null;
  }

  let reader = [];
  for (let i = 0; i < container.length; i++) {
    reader = [...reader, container[i].attribs.src];
  }

  let options = [];
  const select = $(".nt-reader__select, .navi-change-chapter").first();
  const opts = select.find("option");
  for (let i = 0; i < opts.length; i++) {
    const path = opts[i].attribs.value || "";
    const match = path.match(/chapter[-_]([0-9]+(?:\.[0-9]+)?)/i);
    const chapterNumber = opts[i].attribs["data-c"] || match?.[1];
    if (!chapterNumber || !path) continue;
    options = [
      ...options,
      {
        label: `Chapter ${chapterNumber}`,
        value: new URL(path, json.request?.res?.responseUrl || link).href,
      },
    ];
  }

  return { options, scans: reader };
}
