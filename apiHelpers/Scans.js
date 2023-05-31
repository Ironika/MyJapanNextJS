import axios from "axios";
import cheerio from "cheerio";
import { JAPSCAN } from "../rss";

export default async function getScans() {
  const japanScanJson = await axios.get(JAPSCAN);
  const scans = formatJsonJapanScan(japanScanJson);
  return scans;
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
