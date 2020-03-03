module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/*! exports provided: API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
const API = 'http://localhost:3000';

/***/ }),

/***/ "./components/Animes/Card.js":
/*!***********************************!*\
  !*** ./components/Animes/Card.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tilt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tilt */ "react-tilt");
/* harmony import */ var react_tilt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_tilt__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kevhoque/Documents/MyTest/myJapan/components/Animes/Card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Card = props => {
  return __jsx(react_tilt__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "tilt-anime",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-anime",
    style: {
      backgroundImage: 'url(' + props.item.img + ')'
    },
    onClick: () => window.open(props.item.link, '_blank'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("a", {
    href: props.item.link,
    className: "card-anime-content",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, props.item.title), __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, props.item.site))));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/Loader/Loader.js":
/*!*************************************!*\
  !*** ./components/Loader/Loader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_img_loader_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/img/loader.gif */ "./public/img/loader.gif");
/* harmony import */ var _public_img_loader_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_img_loader_gif__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kevhoque/Documents/MyTest/myJapan/components/Loader/Loader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import loaderPng from '../../assets/img/loader.png';

 // const LoaderPng = () => (
//     <div className="loader">
//         <img src={loaderPng} alt="loader"/>
//     </div>
// );

const Loader = props => __jsx("div", {
  className: "loader",
  style: props.style,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("img", {
  src: _public_img_loader_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
  alt: "loader",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./helpers/Animes.js":
/*!***************************!*\
  !*** ./helpers/Animes.js ***!
  \***************************/
/*! exports provided: getApiAnimes, getAnimes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiAnimes", function() { return getApiAnimes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnimes", function() { return getAnimes; });
/* harmony import */ var _Shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shared */ "./helpers/Shared.js");
/* harmony import */ var _rss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rss */ "./rss.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ "./api.js");




const getApiAnimes = async () => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${_api__WEBPACK_IMPORTED_MODULE_3__["API"]}/api/animes`);
    return data;
  } catch (e) {
    console.log(e);
  }

  return [];
};
const getAnimes = async () => {
  let animes = [];
  await getAnimeSeikou(animes);
  await getUniversAnimeiz(animes);
  let cache = JSON.parse(localStorage.getItem('cache'));
  cache.animes = animes;
  cache.animesDate = new Date();
  localStorage.setItem('cache', JSON.stringify(cache));
  return animes;
};

const getAnimeSeikou = async array => {
  for (let i = 1; i <= 2; i++) {
    let json = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://cors-anywhere.herokuapp.com/' + _rss__WEBPACK_IMPORTED_MODULE_1__["ANIME_SEIKOU"] + i + '/');
    formatJsonAnimeSeikou(json, array);
  }

  return array;
};

const getUniversAnimeiz = async array => {
  for (let i = 1; i <= 2; i++) {
    let json = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://cors-anywhere.herokuapp.com/' + _rss__WEBPACK_IMPORTED_MODULE_1__["UNIVERSANIMEIZ"] + i + '/');
    formatJsonUniversAnimeiz(json, array);
  }

  return array;
};

const formatJsonAnimeSeikou = (json, array) => {
  const doc = new DOMParser().parseFromString(json.data, 'text/html');
  const items = doc.getElementsByClassName('slide-entry');

  for (let i = 0; i < items.length; i++) {
    let title = items[i].children[3].children[5].innerText;
    title = title.replace('VOSTFR', '');
    title = title.replace('vostfr', '');

    if (Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["isInList"])(title.toUpperCase(), 'animes')) {
      let img = items[i].children[0].children[0].attributes[2].value;
      let date = items[i].children[3].children[3].innerText;
      let link = items[i].children[0].href;
      let item = {
        title: title,
        link: link,
        // pubDate: date,
        site: 'Anime Seikou',
        img: img,
        lang: 'VOSTFR'
      };
      if (!isInArray(item, array)) array.push(item);
    }
  }
};

const formatJsonUniversAnimeiz = (json, array) => {
  const doc = new DOMParser().parseFromString(json.data, 'text/html');
  const items = doc.getElementsByClassName('recent-posts')[0];

  for (let i = 0; i < items.children.length; i++) {
    let title = items.children[i].children[1].children[1].innerText;
    title = title.replace('VOSTFR', '');
    title = title.replace('vostfr', '');

    if (Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["isInList"])(title.toUpperCase(), 'animes') && !title.includes('VF')) {
      let episode = items.children[i].children[1].children[3].innerText;
      let img = items.children[i].children[0].children[0].children[0].attributes[0].value;
      let link = items.children[i].children[0].children[0].href;
      let item = {
        title: title + ' ' + episode.replace('Épisode ', ''),
        link: link,
        site: 'Univers Animeiz',
        img: img,
        lang: 'VOSTFR'
      };
      if (!isInArray(item, array)) array.push(item);
    }
  }
};

const isInArray = (item, array) => {
  let isInArray = false;

  for (let anime of array) {
    if (anime.title.includes(item.title)) return isInArray = true;
  }

  return isInArray;
};

/***/ }),

/***/ "./helpers/Shared.js":
/*!***************************!*\
  !*** ./helpers/Shared.js ***!
  \***************************/
/*! exports provided: fetchRss, isInList, dateDiff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRss", function() { return fetchRss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInList", function() { return isInList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateDiff", function() { return dateDiff; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mangas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mangas */ "./mangas.js");



var convert = __webpack_require__(/*! xml-js */ "xml-js");

const fetchRss = async url => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://cors-anywhere.herokuapp.com/' + url);
  const json = JSON.parse(convert.xml2json(response.data, {
    compact: true,
    spaces: 4
  }));
  return json;
};
const isInList = (title, type) => {
  let isInList = false;
  let list = _mangas__WEBPACK_IMPORTED_MODULE_1__["scansList"];
  if (type === 'animes') list = _mangas__WEBPACK_IMPORTED_MODULE_1__["animeList"];

  for (let item of list) {
    if (title.includes(item)) isInList = true;
  }

  return isInList;
};
function dateDiff(date1, date2) {
  var diff = {};
  var tmp = date2 - date1;
  tmp = Math.floor(tmp / 1000);
  diff.sec = tmp % 60;
  tmp = Math.floor((tmp - diff.sec) / 60);
  diff.min = tmp % 60;
  tmp = Math.floor((tmp - diff.min) / 60);
  diff.hour = tmp % 24;
  tmp = Math.floor((tmp - diff.hour) / 24);
  diff.day = tmp;
  return diff;
}

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

/***/ "./pages/animes.js":
/*!*************************!*\
  !*** ./pages/animes.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_Animes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/Animes */ "./helpers/Animes.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.debounce */ "lodash.debounce");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll-parallax */ "react-scroll-parallax");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Animes_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Animes/Card */ "./components/Animes/Card.js");
/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loader/Loader */ "./components/Loader/Loader.js");
/* harmony import */ var _public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/img/banner.jpg */ "./public/img/banner.jpg");
/* harmony import */ var _public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/kevhoque/Documents/MyTest/myJapan/pages/animes.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Animes = props => {
  const pageToDisplay = 9;
  const {
    0: animes,
    1: setAnimes
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.animes || []);
  const {
    0: displayedAnimes,
    1: setDisplayedAnimes
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: hasMore,
    1: setHasMore
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: loader,
    1: setLoader
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: deepLoader,
    1: setDeepLoader
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.onscroll = lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(() => {
      if (!hasMore) return;
      let scroll = window.innerHeight + document.documentElement.scrollTop;
      if (scroll === document.documentElement.offsetHeight) loadItems();
    }, 100);
  }, [displayedAnimes]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchDatas = async () => {
      const _animes = await Object(_helpers_Animes__WEBPACK_IMPORTED_MODULE_1__["getApiAnimes"])();

      setAnimes(_animes);
      setDisplayedAnimes(_animes.slice(0, pageToDisplay));
      setLoader(false);

      if (deepLoader) {
        setDeepLoader(false);
      }
    };

    fetchDatas();
  }, [deepLoader]);

  const loadItems = () => {
    let nbToDisplay = displayedAnimes.length + pageToDisplay;

    if (nbToDisplay > animes.length) {
      nbToDisplay = animes.length;
      setHasMore(false);
    }

    setDisplayedAnimes(animes.slice(0, nbToDisplay));
  };

  return __jsx("div", {
    className: "Animes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["ParallaxProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["ParallaxBanner"], {
    className: "homescreen banner",
    layers: [{
      image: _public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
      amount: 0.5
    }],
    style: {
      height: '300px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "ANIMES")), deepLoader && __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      marginTop: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }), __jsx("div", {
    className: "card-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, loader ? __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }) : displayedAnimes.map((item, index) => __jsx(_components_Animes_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: index,
    item: item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  })))));
};

Animes.getInitialProps = async ({
  req
}) => {
  if (req) {
    const animes = await Object(_helpers_Animes__WEBPACK_IMPORTED_MODULE_1__["getApiAnimes"])();
    return {
      animes
    };
  }

  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Animes);

/***/ }),

/***/ "./public/img/banner.jpg":
/*!*******************************!*\
  !*** ./public/img/banner.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner-7395ebb6668a192d34828182cb189851.jpg";

/***/ }),

/***/ "./public/img/loader.gif":
/*!*******************************!*\
  !*** ./public/img/loader.gif ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/loader-7b3f4161157f9e353d8a1099ceab340d.gif";

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

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/animes.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kevhoque/Documents/MyTest/myJapan/pages/animes.js */"./pages/animes.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "lodash.debounce":
/*!**********************************!*\
  !*** external "lodash.debounce" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.debounce");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-scroll-parallax":
/*!****************************************!*\
  !*** external "react-scroll-parallax" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll-parallax");

/***/ }),

/***/ "react-tilt":
/*!*****************************!*\
  !*** external "react-tilt" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-tilt");

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
//# sourceMappingURL=animes.js.map