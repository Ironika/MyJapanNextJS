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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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

/***/ "./components/Home/Description/DescriptionVA.js":
/*!******************************************************!*\
  !*** ./components/Home/Description/DescriptionVA.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kevhoque/Documents/MyTest/myJapan/components/Home/Description/DescriptionVA.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const DescriptionVA = () => {
  return __jsx("div", {
    className: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "My Bad !"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, " Some pages may be long to load during the first visit.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), "MyJapan simply scraps data on other websites and lists them.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), "*if the Dev talk to you, this site is exclusively develop with React"), __jsx("blockquote", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "\u582A\u5FCD\u306F\u4E00\u751F\u306E\u5B9D ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), " \"Patience is a treasure of life\""));
};

/* harmony default export */ __webpack_exports__["default"] = (DescriptionVA);

/***/ }),

/***/ "./components/Home/Description/DescriptionVF.js":
/*!******************************************************!*\
  !*** ./components/Home/Description/DescriptionVF.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kevhoque/Documents/MyTest/myJapan/components/Home/Description/DescriptionVF.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const DescriptionVF = () => {
  return __jsx("div", {
    className: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "D\xE9sol\xE9 !"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, " Certaines pages peuvent \xEAtre longue \xE0 charger lors de la premi\xE8re visite.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), "MyJapan se contente de \"scraper\" (recup\xE9rer) des donn\xE9es sur d'autres sites Web et de les recenser.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), "* Pour les intimes du dev, ce site est exclusivement developp\xE9 en React."), __jsx("blockquote", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "\u582A\u5FCD\u306F\u4E00\u751F\u306E\u5B9D ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), " \"La patience est un tr\xE9sor de la vie\""));
};

/* harmony default export */ __webpack_exports__["default"] = (DescriptionVF);

/***/ }),

/***/ "./components/Home/FlipCard/FlipCard.js":
/*!**********************************************!*\
  !*** ./components/Home/FlipCard/FlipCard.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kevhoque/Documents/MyTest/myJapan/components/Home/FlipCard/FlipCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const FlipCard = props => {
  return __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "flip-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "flip-card-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "flip-card-front",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, props.front), __jsx("div", {
    className: "flip-card-back",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, props.back))));
};

/* harmony default export */ __webpack_exports__["default"] = (FlipCard);

/***/ }),

/***/ "./components/Home/Presentation/PresentationVA.js":
/*!********************************************************!*\
  !*** ./components/Home/Presentation/PresentationVA.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kevhoque/Documents/MyTest/myJapan/components/Home/Presentation/PresentationVA.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const PresentationVA = () => {
  return __jsx("div", {
    className: "presentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "Welcome on MyJapan"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, " I will share with you through this site, various news, photos, music, manga or anime in relation with Japan.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), "In addition, this site will allow me to experiment some web technologies and will serve me as a portfolio for the future.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), "I hope that the experience will please you, and wish you a pleasant visit."), __jsx("blockquote", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "\u733F\u3082\u6728\u304B\u3089\u843D\u3061\u308B ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), " \"Even the monkey falls from the tree\""));
};

/* harmony default export */ __webpack_exports__["default"] = (PresentationVA);

/***/ }),

/***/ "./components/Home/Presentation/PresentationVF.js":
/*!********************************************************!*\
  !*** ./components/Home/Presentation/PresentationVF.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kevhoque/Documents/MyTest/myJapan/components/Home/Presentation/PresentationVF.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const PresentationVF = () => {
  return __jsx("div", {
    className: "presentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "Bienvenue sur MyJapan"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, " Je partegerais avec vous \xE0 travers ce site, diff\xE9rentes actualit\xE9s, photos, musiques, mangas ou anim\xE9s en relation avec le Japon.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), "De plus ce site me permettra d'experimenter diff\xE9rentes technologies web et servira de portefolio pour la suite.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), "J'\xE9sp\xE8re que l'experience vous plaira, et vous souhaite une agr\xE9able visite."), __jsx("blockquote", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "\u733F\u3082\u6728\u304B\u3089\u843D\u3061\u308B ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), " \"M\xEAme le singe tombe de l'arbre\""));
};

/* harmony default export */ __webpack_exports__["default"] = (PresentationVF);

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

/***/ "./components/News/Card.js":
/*!*********************************!*\
  !*** ./components/News/Card.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lazyload */ "react-lazyload");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Loader/Loader */ "./components/Loader/Loader.js");
var _jsxFileName = "/Users/kevhoque/Documents/MyTest/myJapan/components/News/Card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Card = props => {
  const pubDate = new Date(props.news.pubDate);
  return __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_1___default.a, {
    placeholder: __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-news",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("a", {
    href: props.news.link,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("img", {
    src: props.news.img,
    alt: props.news.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx("div", {
    className: "card-news-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, props.news.site), __jsx("span", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, pubDate.toLocaleString()), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, props.news.title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, props.news.desc.length > 200 ? props.news.desc.substring(0, 150) + '...' : props.news.desc)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./helpers/News.js":
/*!*************************!*\
  !*** ./helpers/News.js ***!
  \*************************/
/*! exports provided: getApiNews, getNews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiNews", function() { return getApiNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNews", function() { return getNews; });
/* harmony import */ var _rss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rss */ "./rss.js");
/* harmony import */ var _public_img_adala_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/img/adala.png */ "./public/img/adala.png");
/* harmony import */ var _public_img_adala_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_img_adala_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shared */ "./helpers/Shared.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api */ "./api.js");





const getApiNews = async () => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${_api__WEBPACK_IMPORTED_MODULE_4__["API"]}/api/news`);

    if (data) {
      for (let item of data) {
        if (item.site === 'Adala-news') {
          item.img = _public_img_adala_png__WEBPACK_IMPORTED_MODULE_1___default.a;
        }
      }
    }

    return data;
  } catch (e) {
    console.log(e);
  }

  return [];
};
const getNews = async () => {
  let news = [];
  let adala = await getAdalaNews();
  let nautijon = await getNautijonNews();
  let mangasNews = await getMangasNews();
  news = news.concat(adala, nautijon, mangasNews);
  news.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
  let cache = JSON.parse(localStorage.getItem('cache'));
  cache.news = news;
  cache.newsDate = new Date();
  localStorage.setItem('cache', JSON.stringify(cache));
  return news;
};

const getAdalaNews = async () => {
  let json = await Object(_Shared__WEBPACK_IMPORTED_MODULE_2__["fetchRss"])(_rss__WEBPACK_IMPORTED_MODULE_0__["ADALA"]);
  let datas = formatJsonAdala(json);
  return datas;
};

const getNautijonNews = async () => {
  let json = await Object(_Shared__WEBPACK_IMPORTED_MODULE_2__["fetchRss"])(_rss__WEBPACK_IMPORTED_MODULE_0__["NAUTIJON"]);
  let datas = formatJsonNautijon(json);
  return datas;
};

const getMangasNews = async () => {
  let json = await Object(_Shared__WEBPACK_IMPORTED_MODULE_2__["fetchRss"])(_rss__WEBPACK_IMPORTED_MODULE_0__["MANGASNEWS"]);
  let datas = formatJsonMangasNews(json);
  return datas;
};

const formatJsonAdala = json => {
  let array = [];
  const items = json.rss.channel.item;

  for (var i = 0; i < items.length; i++) {
    let item = {
      title: items[i].title['_text'],
      desc: items[i].description['_cdata'],
      link: items[i].link['_text'],
      pubDate: items[i].pubDate['_text'],
      category: items[i].category[0]['_cdata'],
      site: 'Adala-news',
      img: _public_img_adala_png__WEBPACK_IMPORTED_MODULE_1___default.a
    };
    array.push(item);
  }

  return array;
};

const formatJsonNautijon = json => {
  let array = [];
  const items = json.rss.channel.item;

  for (var i = 0; i < items.length; i++) {
    const desc = items[i].description['_cdata'].split('<br />');
    const src = desc[0].match('(https.*.jpg)');
    let item = {
      title: items[i].title['_text'],
      desc: desc[1],
      link: items[i].link['_text'],
      pubDate: items[i].pubDate['_text'],
      site: 'Nautijon',
      img: src[0]
    };
    array.push(item);
  }

  return array;
};

const formatJsonMangasNews = json => {
  let array = [];
  const items = json.rss.channel.item;

  for (var i = 0; i < items.length; i++) {
    const desc = items[i].description['_cdata'].split('<p>');
    const src = desc[0].match('(https.*.jpg)');
    let item = {
      title: items[i].title['_text'],
      desc: desc[1].replace('</p>', ''),
      link: items[i].link['_text'],
      pubDate: items[i].pubDate['_text'],
      site: 'Mangas-News',
      img: src ? src[0] : _public_img_adala_png__WEBPACK_IMPORTED_MODULE_1___default.a
    };
    array.push(item);
  }

  return array;
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link.js */ "next/link.js");
/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll-parallax */ "react-scroll-parallax");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_News__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/News */ "./helpers/News.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lazyload */ "react-lazyload");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loader/Loader */ "./components/Loader/Loader.js");
/* harmony import */ var _components_News_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/News/Card */ "./components/News/Card.js");
/* harmony import */ var _components_Home_FlipCard_FlipCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Home/FlipCard/FlipCard */ "./components/Home/FlipCard/FlipCard.js");
/* harmony import */ var _components_Home_Presentation_PresentationVF__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Home/Presentation/PresentationVF */ "./components/Home/Presentation/PresentationVF.js");
/* harmony import */ var _components_Home_Presentation_PresentationVA__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Home/Presentation/PresentationVA */ "./components/Home/Presentation/PresentationVA.js");
/* harmony import */ var _components_Home_Description_DescriptionVF__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Home/Description/DescriptionVF */ "./components/Home/Description/DescriptionVF.js");
/* harmony import */ var _components_Home_Description_DescriptionVA__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Home/Description/DescriptionVA */ "./components/Home/Description/DescriptionVA.js");
/* harmony import */ var _public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/img/banner.jpg */ "./public/img/banner.jpg");
/* harmony import */ var _public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_img_homescreen_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../public/img/homescreen.jpg */ "./public/img/homescreen.jpg");
/* harmony import */ var _public_img_homescreen_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_img_homescreen_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _public_img_homescreen2_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../public/img/homescreen2.jpg */ "./public/img/homescreen2.jpg");
/* harmony import */ var _public_img_homescreen2_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_public_img_homescreen2_jpg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _public_img_homescreen3_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../public/img/homescreen3.jpg */ "./public/img/homescreen3.jpg");
/* harmony import */ var _public_img_homescreen3_jpg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_img_homescreen3_jpg__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "/Users/kevhoque/Documents/MyTest/myJapan/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


















const Index = props => {
  const {
    0: news,
    1: setNews
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.news || []);
  const {
    0: loader,
    1: setLoader
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchDatas = async () => {
      let _news = await Object(_helpers_News__WEBPACK_IMPORTED_MODULE_3__["getApiNews"])();

      _news.length = 4;
      setNews(_news);
      setLoader(false);
    };

    fetchDatas();
  }, []);
  return __jsx("div", {
    className: "Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["ParallaxProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["ParallaxBanner"], {
    className: "homescreen banner",
    layers: [{
      image: _public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
      amount: 0.5
    }],
    style: {
      height: '300px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "HOME")), __jsx(_components_Home_FlipCard_FlipCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
    front: __jsx(_components_Home_Presentation_PresentationVF__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: undefined
    }),
    back: __jsx(_components_Home_Presentation_PresentationVA__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }), __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_4___default.a, {
    placeholder: __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["ParallaxBanner"], {
    className: "homescreen",
    layers: [{
      image: _public_img_homescreen2_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
      amount: 0.5
    }],
    style: {
      height: '450px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  })), __jsx(_components_Home_FlipCard_FlipCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
    front: __jsx(_components_Home_Description_DescriptionVF__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: undefined
    }),
    back: __jsx(_components_Home_Description_DescriptionVA__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_4___default.a, {
    placeholder: __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["ParallaxBanner"], {
    className: "homescreen",
    layers: [{
      image: _public_img_homescreen3_jpg__WEBPACK_IMPORTED_MODULE_15___default.a,
      amount: 0.5
    }],
    style: {
      height: '450px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  })), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("div", {
    className: "news",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Last News"), __jsx("div", {
    className: "card-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, loader ? __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }) : news.map((item, index) => __jsx(_components_News_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: index,
    news: item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }))), __jsx("div", {
    className: "cta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx(next_link_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/news',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "Voir plus"))))), __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_4___default.a, {
    placeholder: __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["ParallaxBanner"], {
    className: "homescreen",
    layers: [{
      image: _public_img_homescreen_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
      amount: 0.5
    }],
    style: {
      height: '450px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }))));
};

Index.getInitialProps = async context => {
  if (context.req) {
    const news = Object(_helpers_News__WEBPACK_IMPORTED_MODULE_3__["getApiNews"])();
    return {
      news
    };
  }

  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./public/img/adala.png":
/*!******************************!*\
  !*** ./public/img/adala.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/adala-7c8d63fd2819ce371d3b32fd16fb493e.png";

/***/ }),

/***/ "./public/img/banner.jpg":
/*!*******************************!*\
  !*** ./public/img/banner.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner-7395ebb6668a192d34828182cb189851.jpg";

/***/ }),

/***/ "./public/img/homescreen.jpg":
/*!***********************************!*\
  !*** ./public/img/homescreen.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/homescreen-4f6a802ddbe66b144c7ab808f3b0fcd0.jpg";

/***/ }),

/***/ "./public/img/homescreen2.jpg":
/*!************************************!*\
  !*** ./public/img/homescreen2.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/homescreen2-7933a83d2da028571bdcdede9116a401.jpg";

/***/ }),

/***/ "./public/img/homescreen3.jpg":
/*!************************************!*\
  !*** ./public/img/homescreen3.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/homescreen3-a36ad686ca84ba1b6db0c75310993c05.jpg";

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

/***/ 7:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kevhoque/Documents/MyTest/myJapan/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/link.js":
/*!*******************************!*\
  !*** external "next/link.js" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-lazyload":
/*!*********************************!*\
  !*** external "react-lazyload" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ }),

/***/ "react-scroll-parallax":
/*!****************************************!*\
  !*** external "react-scroll-parallax" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll-parallax");

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
//# sourceMappingURL=index.js.map