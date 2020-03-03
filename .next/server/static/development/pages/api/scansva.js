module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apiHelpers/Scans.js":
/*!*****************************!*\
  !*** ./apiHelpers/Scans.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const axios = __webpack_require__(/*! axios */ "axios");

const cheerio = __webpack_require__(/*! cheerio */ "cheerio");

const {
  isInList,
  fetchRss
} = __webpack_require__(/*! ./Shared */ "./apiHelpers/Shared.js");

const {
  SCANTRAD,
  MANGAFOX
} = __webpack_require__(/*! ../rss */ "./rss.js");

async function getScans() {
  let scans = [];
  const scantrad = await getScantrad();
  scans = scans.concat(scantrad);
  scans.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
  return scans;
}

async function getScansVA() {
  let scansVa = [];
  const mangaFox = await getMangaFox();
  scansVa = scansVa.concat(mangaFox);
  return scansVa;
}

async function getScantrad() {
  const json = await fetchRss(SCANTRAD);
  const datas = formatJsonScantrad(json);
  return datas;
}

async function getMangaFox() {
  let datas = [];

  for (let i = 1; i <= 10; i++) {
    const json = await axios.get(MANGAFOX + i + '.html');
    let data = formatJsonMangaFox(json);
    datas = datas.concat(data);
  }

  return datas;
}

function formatJsonScantrad(json) {
  let array = [];
  const items = json.rss.channel.item;

  for (var i = 0; i < items.length; i++) {
    if (isInList(items[i].title['_cdata'].toUpperCase(), 'scans')) {
      let title = items[i].title['_cdata'].replace('Scan - ', '');
      title = title.replace('Chapitre ', '');
      const item = {
        title: title,
        link: items[i].link['_text'],
        pubDate: items[i].pubDate['_text'],
        site: 'Scantrad',
        img: items[i].description['_cdata'].match('src="(https.*.png)')[0].replace('src="', ''),
        lang: 'VF'
      };
      array.push(item);
    }
  }

  return array;
}

function formatJsonMangaFox(json) {
  let array = [];
  const $ = cheerio.load(json.data);
  const items = $('.manga-list-4-list > li');

  for (let i = 0; i < items.length; i++) {
    let title = $('.manga-list-4-list > li > .manga-list-4-item-title > a')[i].children[0].data;

    if (isInList(title.toUpperCase(), 'scans')) {
      const img = $('.manga-list-4-list > li > a > img')[i].attribs.src;
      const date = $('.manga-list-4-list > li > .manga-list-4-item-subtitle > span')[i].children[0].data;
      const chapt = $('.manga-list-4-list > li > .manga-list-4-item-part > li:first-child > a')[i].children[0].data ? $('.manga-list-4-list > li > .manga-list-4-item-part > li:first-child > a')[i].children[0].data.replace('Ch.', '') : '';
      const link = $('.manga-list-4-list > li > .manga-list-4-item-part > li:first-child > a')[i].attribs.href ? $('.manga-list-4-list > li > .manga-list-4-item-part > li:first-child > a')[i].attribs.href : $('.manga-list-4-list > li > a')[i].attribs.href;
      const item = {
        title: title + ' ' + chapt,
        link: 'http://fanfox.net' + link,
        pubDate: date,
        site: 'MangaFox',
        img: img,
        lang: 'VA'
      };
      array.push(item);
    }
  }

  return array;
}

module.exports = {
  getScans,
  getScansVA
};

/***/ }),

/***/ "./apiHelpers/Shared.js":
/*!******************************!*\
  !*** ./apiHelpers/Shared.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const axios = __webpack_require__(/*! axios */ "axios");

const convert = __webpack_require__(/*! xml-js */ "xml-js");

const {
  scansList,
  animeList
} = __webpack_require__(/*! ../mangas */ "./mangas.js");

const fetchRss = async url => {
  const response = await axios.get(url);
  const json = JSON.parse(convert.xml2json(response.data, {
    compact: true,
    spaces: 4
  }));
  return json;
};

const isInList = (title, type) => {
  let isInList = false;
  let list = scansList;
  if (type === 'animes') list = animeList;

  for (let item of list) {
    if (title.includes(item)) isInList = true;
  }

  return isInList;
};

module.exports = {
  fetchRss,
  isInList
};

/***/ }),

/***/ "./mangas.js":
/*!*******************!*\
  !*** ./mangas.js ***!
  \*******************/
/*! exports provided: scansList, animeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scansList", function() { return scansList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animeList", function() { return animeList; });
const scansList = ["A RETURNER'S MAGIC SHOULD BE SPECIAL", 'A RETURNERS MAGIC SHOULD BE SPECIAL', 'APOTHEOSIS', 'ATTACK OF TITANS', 'BATTLE THROUGH THE HEAVENS', 'BLACK CLOVER', 'BOKU NO HERO ACADEMIA', 'BORUTO', 'BREAK THE WORLD', 'CHAOTIC SWORD GOD', 'D.GRAY-MAN', 'DEMON SLAYER', 'DEMON SPIRIT SEED MANUAL', 'DOULUO DALU', 'DR. STONE', 'DRAGON BALL SUPER', 'DRAGON KING OF THE WORLD', "EDEN'S ZERO", 'EDENS ZERO', 'ETERNAL REVERENCE', 'EVERLASTING GOD OF SWORD', 'FAIRY TAIL:', 'FURY', 'GOD OF MARTIAL ARTS', 'GOD OF THE CITY', 'HERO? I QUIT A LONG TIME AGO', 'HOLY ANCESTOR', 'HUNTER AGE', 'HUNTER X HUNTER', 'I SHALL SEAL THE HEAVENS', 'I WAS TRASH', 'KIMETSU NO YAIBA', 'LEGEND OF PHOENIX', 'MARTIAL GOD SPACE', 'MARTIAL MOVEMENT UPHEAVAL', 'MURABITO DESU GA NANI KA?', 'MY HERO ACADEMIA', 'NANATSU NO TAIZAI', 'ONE PIECE', 'ONE PUNCH MAN', 'SEALED DIVINE THRONE', 'SEVEN DEADLY SINS', 'SHANLIAN DE SISHEN', 'SHINGEKI NO KYOJIN', 'SOLO LEVELING', 'SOUL LAND', 'SPIRIT BLADE MOUNTAIN', 'SPIRIT SWORD SOVEREIGN', 'STAR MARTIAL GOD TECHNIQUE', 'TALES OF DEMONS AND GODS', 'TATE NO YUUSHA NO NARIAGARI', 'THE BREAKER', 'THE CHILD OF LIGHT', 'THE GOD OF HIGH SCHOOL', 'THE GREAT RULER', 'THE LEGENDARY MOOLIGHT', 'THE MYTHICAL REALM', 'THE NEW GATE', 'THE PROMISED NEVERLAND', 'TOWER OF GOD', 'VERSATILE MAGE', 'WINNER TAKES ALL', 'X EPOCH OF DRAGON', 'YAKUSOKU NO NEVERLAND', 'YIN ZHI SHOUMUREN', 'YUAN ZUN'];
const animeList = ['AHIRU NO SORA', 'ATTACK OF TITANS', 'BEASTARS', 'BLACK CLOVER', 'BOKU NO HERO ACADEMIA', 'BORUTO', 'DEMON SLAYER', 'DR. STONE', 'ENEN NO SHOUBOUTAI', 'FIRE FORCE', 'GLEIPNIR', 'HAIKYU', 'KAGUYA-SAMA', 'KIMETSU NO YAIBA', 'MY HERO ACADEMIA', 'NANATSU NO TAIZAI', 'ONE PIECE', 'RADIANT', 'RE:ZERO', 'SHINGEKI NO KYOJIN', 'SOMALI TO MORI', 'SWORD ART ONLINE', 'THE PROMISED NEVERLAND', 'TO ARU', 'WE NEVER LEARN', 'YAKUSOKU NO NEVERLAND'];

/***/ }),

/***/ "./pages/api/scansva.js":
/*!******************************!*\
  !*** ./pages/api/scansva.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const {
  getScansVA
} = __webpack_require__(/*! ../../apiHelpers/Scans */ "./apiHelpers/Scans.js");

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const scansva = await getScansVA();
  res.json(scansva);
});

/***/ }),

/***/ "./rss.js":
/*!****************!*\
  !*** ./rss.js ***!
  \****************/
/*! exports provided: ADALA, NAUTIJON, MANGASNEWS, SCANTRAD, TOF, MANGAFOX, CRUNCHYROLL, ADN, ANIME_SEIKOU, UNIVERSANIMEIZ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADALA", function() { return ADALA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAUTIJON", function() { return NAUTIJON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MANGASNEWS", function() { return MANGASNEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCANTRAD", function() { return SCANTRAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOF", function() { return TOF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MANGAFOX", function() { return MANGAFOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRUNCHYROLL", function() { return CRUNCHYROLL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADN", function() { return ADN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIME_SEIKOU", function() { return ANIME_SEIKOU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIVERSANIMEIZ", function() { return UNIVERSANIMEIZ; });
// NEWS
const ADALA = 'https://adala-news.fr/feed/';
const NAUTIJON = 'https://www.nautiljon.com/actualite/rss.php';
const MANGASNEWS = 'https://www.manga-news.com/index.php/feed/news'; // SCANS

const SCANTRAD = 'https://scantrad.net/rss/';
const TOF = 'https://www.webtoons.com/en/fantasy/tower-of-god/rss?title_no=95';
const MANGAFOX = 'http://fanfox.net/releases/'; // ANIME

const CRUNCHYROLL = 'https://www.crunchyroll.com/rss/anime?lang=frFR';
const ADN = 'https://animedigitalnetwork.fr/rss';
const ANIME_SEIKOU = 'https://anime-saikou.com/page/';
const UNIVERSANIMEIZ = 'https://www.universanimeiz.com/page/';

/***/ }),

/***/ 5:
/*!************************************!*\
  !*** multi ./pages/api/scansva.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kevhoque/Documents/MyTest/myJapan/pages/api/scansva.js */"./pages/api/scansva.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ }),

/***/ "xml-js":
/*!*************************!*\
  !*** external "xml-js" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("xml-js");

/***/ })

/******/ });
//# sourceMappingURL=scansva.js.map