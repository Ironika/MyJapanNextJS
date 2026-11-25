import axios from "axios";
import cheerio from "cheerio";
import { makeArrayPage } from "./Shared";
import { MANGAKAKALOT } from "../rss";
import { isSameScanBookmark } from "../helpers/scanBookmarks";

export default async function getScansVA(
  page,
  prevPage,
  bookmarks,
  onlyBookmark
) {
  const arrayMap = makeArrayPage(page, prevPage);
  const responseDatas = await Promise.all(
    arrayMap.map((item) =>
      axios.get(`${MANGAKAKALOT}${item}`, {
        timeout: 15000,
        headers: { "User-Agent": "Mozilla/5.0" },
        validateStatus: (status) => status >= 200 && status < 400,
      })
    )
  );

  let scansVa = [];
  for (let i = 0; i < responseDatas.length; i++) {
    // scansVa = [...scansVa, ...formatJsonMangaFox(responseDatas[i])]
    scansVa = [
      ...scansVa,
      ...formatJsonMangaKakalot(responseDatas[i], bookmarks, onlyBookmark),
    ];
  }

  // scansVa.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
  return scansVa;
}

function formatJsonMangaKakalot(json, bookmarks, onlyBookmark) {
  let array = [];
  const $ = cheerio.load(json.data);
  const items = $(".nt-item");
  for (let i = 0; i < items.length; i++) {
    const titleLink = $(items[i]).find(".nt-item__title")[0];
    const title = titleLink?.attribs?.title || "";
    const img = $(items[i]).find(".nt-item__cover img")[0]?.attribs?.src || "";
    const chapterLink = $(items[i]).find(".nt-item__chapters a")[0];
    let chapt = chapterLink?.attribs?.title || chapterLink?.children?.[0]?.data || "";
    chapt = chapt
      .replace(/^Chap\s*/i, "Chapter ")
      .replace(/\s+(?:EN|ES-LA|VI|KO|FR|DE|IT|PT-BR)$/, "")
      .split(":")[0];
    const chapterPath = chapterLink?.attribs?.href || "";
    const link = chapterPath
      ? `https://manganato.xyz${chapterPath.startsWith("/") ? chapterPath : `/${chapterPath}`}`
      : "";
    let item = { title, chapt, link, img, site: "MangaKakalot", lang: "VA" };
    if (bookmarks) {
      if (onlyBookmark) {
        if (isInBookmarks(item, bookmarks)) {
          item.isBookmarked = true;
          array = [...array, item];
        }
      } else {
        if (isInBookmarks(item, bookmarks, chapt)) {
          item.isBookmarked = true;
        }
        array = [...array, item];
      }
    } else {
      array = [...array, item];
    }
  }
  return array;
}

function isInBookmarks(scan, bookmarks, chapt) {
  for (let i = 0; i < bookmarks.length; i++)
    if (chapt) {
      if (
        isSameScanBookmark(scan, bookmarks[i]) &&
        chapt === bookmarks[i].chapt
      )
        return true;
    } else {
      if (isSameScanBookmark(scan, bookmarks[i])) return true;
    }
  return false;
}

// function formatJsonMangaFox(json) {
//     let array = []
//     const $ = cheerio.load(json.data)
//     const items = $('.manga-list-4-list > li')
//     for(let i = 0; i < items.length; i++) {
//         let title = $(items[i]).find('.manga-list-4-item-title a')[0].attribs.title
//         if(isInList(title.toUpperCase(), 'scans')) {
//             const img = $(items[i]).find('.manga-list-4-cover')[0] && $(items[i]).find('.manga-list-4-cover')[0].attribs.src
//             const pubDate = $(items[i]).find('.manga-list-4-item-subtitle span')[0] && $(items[i]).find('.manga-list-4-item-subtitle span')[0].children[0].data
//             const chapt = $(items[i]).find('.manga-list-4-item-part li:first-child a')[0] ? $(items[i]).find('.manga-list-4-item-part li:first-child a')[0].children[0].data.replace('Ch.', '') : ''
//             let link = $(items[i]).find('.manga-list-4-item-part li:first-child a')[0] ? $(items[i]).find('.manga-list-4-item-part li:first-child a')[0].attribs.href : $('.manga-list-4-list > li > a')[i].attribs.href
//             title = title + ' ' + chapt
//             link = 'http://fanfox.net' + link
//             const item = {title, link, pubDate, img, site: 'MangaFox', lang: 'VA'}
//             array = [...array, item]
//         }
//     }
//     return array
// }
