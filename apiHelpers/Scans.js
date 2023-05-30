import axios from "axios";
import cheerio from "cheerio";
import { JAPSCAN, SCANTRAD } from "../rss";

export default async function getScans() {
  // const scantradJson = await axios.get(SCANTRAD);
  const japanScanJson = await axios.get(JAPSCAN);
  // const scans = formatJsonScantrad(scantradJson);
  const scans = formatJsonJapanScan(japanScanJson);
  return scans;
}

function formatJsonScantrad(json) {
  let array = [];
  const $ = cheerio.load(json.data);
  const items = $(".home-manga");
  for (let i = 0; i < items.length; i++) {
    const title =
      $(items[i]).find(".hmi-titre")[0] &&
      $(items[i]).find(".hmi-titre")[0].children[0].children[0].data;
    const img =
      $(items[i]).find(".hm-image")[0] &&
      $(items[i]).find(".hm-image")[0].children[0].attribs["data-src"];
    const chapt =
      $(items[i]).find(".hmi-sub")[0] &&
      $(items[i])
        .find(".hmi-sub > span")[0]
        .children[0].data.replace("Chapitre ", "");
    const link =
      $(items[i]).find(".hmi-sub")[0] &&
      `${SCANTRAD}${$(items[i]).find(".hmi-sub")[0].attribs["href"]}`;
    const item = { title, chapt, link, img, site: "Scantrad", lang: "VF" };
    array = [...array, item];
  }
  return array;
}

function formatJsonJapanScan(json) {
  let array = [];
  const $ = cheerio.load(json.data);
  const items = $("#tab-1")[0].children;

  for (let i = 0; i < items.length; i++) {
    const title = $(items[i])?.find(".img-fluid")[0]?.parent.attribs["title"];
    const img = `${JAPSCAN}${
      $(items[i])?.find(".img-fluid")[0]?.attribs["src"]
    }`;
    const chapt = $(items[i])
      ?.find(".chapter-list > .mb-0 > a")[0]
      ?.attribs["title"]?.replace("Chapitre ", "");
    const link = `${JAPSCAN}${
      $(items[i])?.find(".chapter-list > .mb-0 > a")[0]?.attribs["href"]
    }`;
    const item = { title, img, chapt, link, site: "Japscan", lang: "VF" };
    if (item.title && item.img && item.link) {
      array = [...array, item];
    }
  }
  return array;
}
