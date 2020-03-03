webpackHotUpdate("static/development/pages/news.js",{

/***/ "./pages/news.js":
/*!***********************!*\
  !*** ./pages/news.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_News__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/News */ "./helpers/News.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll-parallax */ "./node_modules/react-scroll-parallax/cjs/index.js");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_News_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/News/Card */ "./components/News/Card.js");
/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Loader/Loader */ "./components/Loader/Loader.js");
/* harmony import */ var _public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/img/banner.jpg */ "./public/img/banner.jpg");
/* harmony import */ var _public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/Users/kevhoque/Documents/MyTest/myJapan/pages/news.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var News = function News() {
  var pageToDisplay = 12;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      news = _useState[0],
      setNews = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      displayedNews = _useState2[0],
      setDisplayedNews = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      hasMore = _useState3[0],
      setHasMore = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loader = _useState4[0],
      setLoader = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.onscroll = lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(function () {
      if (!hasMore) return;
      var scroll = window.innerHeight + document.documentElement.scrollTop;
      if (scroll === document.documentElement.offsetHeight) loadItems();
    }, 100);
  }, [displayedNews]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var fetchDatas = function fetchDatas() {
      var currentNews;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchDatas$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_helpers_News__WEBPACK_IMPORTED_MODULE_2__["getApiNews"])());

            case 2:
              currentNews = _context.sent;
              setNews(currentNews);
              setDisplayedNews(currentNews.slice(0, pageToDisplay));
              setLoader(false);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      });
    };

    fetchDatas();
  }, []);

  var loadItems = function loadItems() {
    var nbToDisplay = displayedNews.length + pageToDisplay;

    if (nbToDisplay > news.length) {
      nbToDisplay = news.length;
      setHasMore(false);
    }

    setDisplayedNews(news.slice(0, nbToDisplay));
  };

  return __jsx("div", {
    className: "News",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__["ParallaxProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__["ParallaxBanner"], {
    className: "homescreen banner",
    layers: [{
      image: _public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
      amount: 0.5
    }],
    style: {
      height: '300px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "NEWS")), __jsx("div", {
    className: "card-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, loader ? __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }) : displayedNews.map(function (item, index) {
    return __jsx(_components_News_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: index,
      news: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    });
  }))));
};

News.getInitialProps = function _callee(context) {
  var news;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!context.req) {
            _context2.next = 3;
            break;
          }

          news = Object(_helpers_News__WEBPACK_IMPORTED_MODULE_2__["getApiNews"])();
          return _context2.abrupt("return", {
            news: news
          });

        case 3:
          return _context2.abrupt("return", {});

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ })

})
//# sourceMappingURL=news.js.8f9899b4794994b80017.hot-update.js.map