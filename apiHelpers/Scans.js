import axios from "axios";
import cheerio from "cheerio";
import { SCANTRAD } from "../rss";

export default async function getScans() {
  const scantradJson = await axios.get(SCANTRAD);
  const scans = formatJsonScantrad(scantradJson);
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
