import axios from "axios";
import cheerio from "cheerio";

export default async function SearchScans(search) {
  const json = await axios.get(
    "https://manganato.xyz/search",
    { params: { q: search }, timeout: 15000, headers: { "User-Agent": "Mozilla/5.0" } }
  );
  const $ = cheerio.load(json.data);
  const items = $(".nt-item");
  let array = [];
  for (let i = 0; i < items.length; i++) {
    const titleLink = $(items[i]).find(".nt-item__title")[0];
    const title = titleLink?.attribs?.title || titleLink?.children?.[0]?.data || "";
    const img = $(items[i]).find(".nt-item__cover img")[0]?.attribs?.src || "";
    const chapterLink = $(items[i]).find('.nt-item__chapters a[href*="/en/"]')[0];
    let chapt = chapterLink?.attribs?.title || chapterLink?.children?.[0]?.data || "";
    chapt = chapt
      .replace(/^Chap\s*/i, "Chapter ")
      .replace(/\s+(?:EN|ES-LA|VI|KO|FR|DE|IT|PT-BR)$/, "")
      .split(":")[0];
    const chapterPath = chapterLink?.attribs?.href || "";
    const link = chapterPath
      ? `https://manganato.xyz${chapterPath.startsWith("/") ? chapterPath : `/${chapterPath}`}`
      : "";
    array = [...array, { title, chapt, link, img, site: "MangaKakalot", lang: "VA" }];
  }
  return array;
}