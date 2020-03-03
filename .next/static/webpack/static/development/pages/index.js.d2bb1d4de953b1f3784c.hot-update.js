webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rss */ "./rss.js");
/* harmony import */ var _public_img_adala_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/img/adala.png */ "./public/img/adala.png");
/* harmony import */ var _public_img_adala_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_adala_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Shared */ "./helpers/Shared.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api */ "./api.js");







var getApiNews = function getApiNews() {
  var news, cache, _news;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getApiNews$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!context) {
            _context.next = 7;
            break;
          }

          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("".concat(_api__WEBPACK_IMPORTED_MODULE_6__["API"], "/api/news")));

        case 3:
          news = _context.sent;
          return _context.abrupt("return", news);

        case 7:
          cache = JSON.parse(localStorage.getItem('cache'));

          if (cache.news) {
            _context.next = 14;
            break;
          }

          _context.next = 11;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("".concat(_api__WEBPACK_IMPORTED_MODULE_6__["API"], "/api/news")));

        case 11:
          _news = _context.sent;
          cache.news = _news;
          localStorage.setItem('cache', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(cache));

        case 14:
          return _context.abrupt("return", cache.news);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  });
};
var getNews = function getNews() {
  var news, adala, nautijon, mangasNews, cache;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getNews$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          news = [];
          _context2.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(getAdalaNews());

        case 3:
          adala = _context2.sent;
          _context2.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(getNautijonNews());

        case 6:
          nautijon = _context2.sent;
          _context2.next = 9;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(getMangasNews());

        case 9:
          mangasNews = _context2.sent;
          news = news.concat(adala, nautijon, mangasNews);
          news.sort(function (a, b) {
            return new Date(b.pubDate) - new Date(a.pubDate);
          });
          cache = JSON.parse(localStorage.getItem('cache'));
          cache.news = news;
          cache.newsDate = new Date();
          localStorage.setItem('cache', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(cache));
          return _context2.abrupt("return", news);

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var getAdalaNews = function getAdalaNews() {
  var json, datas;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getAdalaNews$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_Shared__WEBPACK_IMPORTED_MODULE_4__["fetchRss"])(_rss__WEBPACK_IMPORTED_MODULE_2__["ADALA"]));

        case 2:
          json = _context3.sent;
          datas = formatJsonAdala(json);
          return _context3.abrupt("return", datas);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
};

var getNautijonNews = function getNautijonNews() {
  var json, datas;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getNautijonNews$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_Shared__WEBPACK_IMPORTED_MODULE_4__["fetchRss"])(_rss__WEBPACK_IMPORTED_MODULE_2__["NAUTIJON"]));

        case 2:
          json = _context4.sent;
          datas = formatJsonNautijon(json);
          return _context4.abrupt("return", datas);

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
};

var getMangasNews = function getMangasNews() {
  var json, datas;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getMangasNews$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_Shared__WEBPACK_IMPORTED_MODULE_4__["fetchRss"])(_rss__WEBPACK_IMPORTED_MODULE_2__["MANGASNEWS"]));

        case 2:
          json = _context5.sent;
          datas = formatJsonMangasNews(json);
          return _context5.abrupt("return", datas);

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
};

var formatJsonAdala = function formatJsonAdala(json) {
  var array = [];
  var items = json.rss.channel.item;

  for (var i = 0; i < items.length; i++) {
    var item = {
      title: items[i].title['_text'],
      desc: items[i].description['_cdata'],
      link: items[i].link['_text'],
      pubDate: items[i].pubDate['_text'],
      category: items[i].category[0]['_cdata'],
      site: 'Adala-news',
      img: _public_img_adala_png__WEBPACK_IMPORTED_MODULE_3___default.a
    };
    array.push(item);
  }

  return array;
};

var formatJsonNautijon = function formatJsonNautijon(json) {
  var array = [];
  var items = json.rss.channel.item;

  for (var i = 0; i < items.length; i++) {
    var desc = items[i].description['_cdata'].split('<br />');
    var src = desc[0].match('(https.*.jpg)');
    var item = {
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

var formatJsonMangasNews = function formatJsonMangasNews(json) {
  var array = [];
  var items = json.rss.channel.item;

  for (var i = 0; i < items.length; i++) {
    var desc = items[i].description['_cdata'].split('<p>');
    var src = desc[0].match('(https.*.jpg)');
    var item = {
      title: items[i].title['_text'],
      desc: desc[1].replace('</p>', ''),
      link: items[i].link['_text'],
      pubDate: items[i].pubDate['_text'],
      site: 'Mangas-News',
      img: src ? src[0] : _public_img_adala_png__WEBPACK_IMPORTED_MODULE_3___default.a
    };
    array.push(item);
  }

  return array;
};

/***/ })

})
//# sourceMappingURL=index.js.d2bb1d4de953b1f3784c.hot-update.js.map