webpackHotUpdate("static/development/pages/news.js",{

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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rss */ "./rss.js");
/* harmony import */ var _public_img_adala_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/img/adala.png */ "./public/img/adala.png");
/* harmony import */ var _public_img_adala_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_adala_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Shared */ "./helpers/Shared.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api */ "./api.js");








var getApiNews = function getApiNews() {
  var _ref, data, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getApiNews$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("".concat(_api__WEBPACK_IMPORTED_MODULE_7__["API"], "/api/news")));

        case 3:
          _ref = _context.sent;
          data = _ref.data;

          if (!data) {
            _context.next = 25;
            break;
          }

          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 9;

          for (_iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(data); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            item = _step.value;

            if (item.site === 'Adala-news') {
              item.img = _public_img_adala_png__WEBPACK_IMPORTED_MODULE_4___default.a;
            }
          }

          _context.next = 17;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](9);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 17:
          _context.prev = 17;
          _context.prev = 18;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 20:
          _context.prev = 20;

          if (!_didIteratorError) {
            _context.next = 23;
            break;
          }

          throw _iteratorError;

        case 23:
          return _context.finish(20);

        case 24:
          return _context.finish(17);

        case 25:
          return _context.abrupt("return", data);

        case 28:
          _context.prev = 28;
          _context.t1 = _context["catch"](0);
          console.log(_context.t1);

        case 31:
          return _context.abrupt("return", []);

        case 32:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 28], [9, 13, 17, 25], [18,, 20, 24]]);
};
var getNews = function getNews() {
  var news, adala, nautijon, mangasNews, cache;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getNews$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          news = [];
          _context2.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(getAdalaNews());

        case 3:
          adala = _context2.sent;
          _context2.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(getNautijonNews());

        case 6:
          nautijon = _context2.sent;
          _context2.next = 9;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(getMangasNews());

        case 9:
          mangasNews = _context2.sent;
          news = news.concat(adala, nautijon, mangasNews);
          news.sort(function (a, b) {
            return new Date(b.pubDate) - new Date(a.pubDate);
          });
          cache = JSON.parse(localStorage.getItem('cache'));
          cache.news = news;
          cache.newsDate = new Date();
          localStorage.setItem('cache', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(cache));
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
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getAdalaNews$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_Shared__WEBPACK_IMPORTED_MODULE_5__["fetchRss"])(_rss__WEBPACK_IMPORTED_MODULE_3__["ADALA"]));

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
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getNautijonNews$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_Shared__WEBPACK_IMPORTED_MODULE_5__["fetchRss"])(_rss__WEBPACK_IMPORTED_MODULE_3__["NAUTIJON"]));

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
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getMangasNews$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_Shared__WEBPACK_IMPORTED_MODULE_5__["fetchRss"])(_rss__WEBPACK_IMPORTED_MODULE_3__["MANGASNEWS"]));

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
      img: _public_img_adala_png__WEBPACK_IMPORTED_MODULE_4___default.a
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
      img: src ? src[0] : _public_img_adala_png__WEBPACK_IMPORTED_MODULE_4___default.a
    };
    array.push(item);
  }

  return array;
};

/***/ })

})
//# sourceMappingURL=news.js.1254cc0fcb6876e8690c.hot-update.js.map