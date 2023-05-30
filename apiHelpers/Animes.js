import axios from "axios";
import cheerio from "cheerio";
import { VOSTFREE } from "../rss";

async function getAnimes(page, prevPage, bookmarks, onlyBookmark) {
  const responseDatas = await axios.get(
    `${VOSTFREE}animes-vostfr/page/${page}`
  );

  const animes = formatJsonVostFree(responseDatas, bookmarks, onlyBookmark);

  return animes;
}

function formatJsonVostFree(json, bookmarks, onlyBookmark) {
  let array = [];
  const $ = cheerio.load(json.data);
  const items = $(".movie-poster");
  for (let i = 0; i < items.length; i++) {
    const title = $(items[i])
      ?.find(".play > a")[0]
      ?.attribs["alt"].replace("VOSTFR", "");
    const episode = $(items[i])?.find(".year > b")[0]?.children[0]?.data;
    const img =
      VOSTFREE.slice(0, -1) +
      $(items[i])?.find(".image > img")[0]?.attribs["src"];
    const link = $(items[i])?.find(".play > a")[0]?.attribs["href"];
    let item = {
      title,
      episode,
      link,
      img,
      site: "VostFree",
      lang: "VOSTFR",
    };

    if (bookmarks) {
      if (onlyBookmark) {
        if (isInBookmarks(title.toUpperCase(), bookmarks)) {
          item.isBookmarked = true;
          array = [...array, item];
        }
      } else {
        if (isInBookmarks(title.toUpperCase(), bookmarks)) {
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

function isInBookmarks(title, bookmarks) {
  for (let i = 0; i < bookmarks.length; i++)
    if (title.includes(bookmarks[i].toUpperCase())) return true;
  return false;
}

/*function formatJsonAnimeSaikou(json) {
    let array = []
    const $ = cheerio.load(json.data)
    const items = $('.slide-entry')
    for(let i = 0; i < items.length; i++) {
        let title = $('.slide-entry .hidden span[itemprop="mainEntityOfPage"] span[itemprop="name"]')[i].children[0].data
        title = title.replace('VOSTFR', '')
        title = title.replace('vostfr', '')
        if(title && isInList(title.toUpperCase(), 'animes')) {
            const img = $('.slide-entry .slide-image  img')[i].attribs.src
            const date = $('.slide-entry .hidden  span[itemprop="datePublished"]')[i].children[0].data
            const link = $('.slide-entry .slide-image')[i].attribs.href
            const item = { title, link, img, pubDate: new Date(date), site: 'Anime Saikou', lang: 'VOSTFR'}
            array = [...array, item]
        }
    }
    return array
}

function formatJsonUniversAnimeiz(json) {
    let array = []
    const $ = cheerio.load(json.data)
    const items = $('.post')
    for(let i = 0; i < items.length; i++) {
        let title = $('.post .post-content h2 a')[i].children[0].data
        title = title.replace('VOSTFR', '')
        title = title.replace('vostfr', '')
        if(isInList(title.toUpperCase(), 'animes') && !title.includes('VF')) {
            const episode = $('.post .post-content p')[i] && $('.post .post-content p')[i].children[0].data
            const img = $('.post .post-thumb a img')[i] && $('.post .post-thumb a img')[i].attribs.src
            const link = $('.post .post-thumb a')[i] && $('.post .post-thumb a')[i].attribs.href
            const date = $('.post .meta-date')[i] && $('.post .meta-date')[i].children[0].data
            title = episode ? `${title} ${episode.replace('Épisode ', '')}` : title
            const item = { title, link, img, pubDate: makeDate(date), site: 'Univers Animeiz', lang: 'VOSTFR'}
            array = [...array, item]
        }
    }
    return array
}*/

module.exports = getAnimes;
