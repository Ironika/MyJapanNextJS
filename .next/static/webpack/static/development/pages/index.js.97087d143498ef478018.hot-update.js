webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link.js */ "./node_modules/next/link.js");
/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll-parallax */ "./node_modules/react-scroll-parallax/cjs/index.js");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_News__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/News */ "./helpers/News.js");
/* harmony import */ var _helpers_Shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/Shared */ "./helpers/Shared.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Loader/Loader */ "./components/Loader/Loader.js");
/* harmony import */ var _components_News_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/News/Card */ "./components/News/Card.js");
/* harmony import */ var _components_Home_FlipCard_FlipCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Home/FlipCard/FlipCard */ "./components/Home/FlipCard/FlipCard.js");
/* harmony import */ var _components_Home_Presentation_PresentationVF__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Home/Presentation/PresentationVF */ "./components/Home/Presentation/PresentationVF.js");
/* harmony import */ var _components_Home_Presentation_PresentationVA__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Home/Presentation/PresentationVA */ "./components/Home/Presentation/PresentationVA.js");
/* harmony import */ var _components_Home_Description_DescriptionVF__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Home/Description/DescriptionVF */ "./components/Home/Description/DescriptionVF.js");
/* harmony import */ var _components_Home_Description_DescriptionVA__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Home/Description/DescriptionVA */ "./components/Home/Description/DescriptionVA.js");
/* harmony import */ var _public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../public/img/banner.jpg */ "./public/img/banner.jpg");
/* harmony import */ var _public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _public_img_homescreen_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../public/img/homescreen.jpg */ "./public/img/homescreen.jpg");
/* harmony import */ var _public_img_homescreen_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_public_img_homescreen_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _public_img_homescreen2_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../public/img/homescreen2.jpg */ "./public/img/homescreen2.jpg");
/* harmony import */ var _public_img_homescreen2_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_public_img_homescreen2_jpg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _public_img_homescreen3_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../public/img/homescreen3.jpg */ "./public/img/homescreen3.jpg");
/* harmony import */ var _public_img_homescreen3_jpg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_public_img_homescreen3_jpg__WEBPACK_IMPORTED_MODULE_18__);


var _jsxFileName = "/Users/kevhoque/Documents/MyTest/myJapan/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



















var Index = function Index(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      news = _useState[0],
      setNews = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      loader = _useState2[0],
      setLoader = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var fetchDatas = function fetchDatas() {
      var currentNews;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchDatas$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"];
              _context.next = 3;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_helpers_News__WEBPACK_IMPORTED_MODULE_5__["getNews"])());

            case 3:
              _context.t1 = _context.sent;
              currentNews = (0, _context.t0)(_context.t1);
              currentNews.length = 4;
              setNews(currentNews);
              setLoader(false);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      });
    };

    var cache = JSON.parse(localStorage.getItem('cache'));

    if (cache.news) {
      var currentNews = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(cache.news);

      currentNews.length = 4;
      setNews(currentNews);
      setLoader(false);
      if (Object(_helpers_Shared__WEBPACK_IMPORTED_MODULE_6__["dateDiff"])(new Date(cache.newsDate), new Date()).min > 5) fetchDatas();
    } else {
      fetchDatas();
    }
  }, []);
  return __jsx("div", {
    className: "Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__["ParallaxProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__["ParallaxBanner"], {
    className: "homescreen banner",
    layers: [{
      image: _public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_15___default.a,
      amount: 0.5
    }],
    style: {
      height: '300px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "HOME")), __jsx(_components_Home_FlipCard_FlipCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
    front: __jsx(_components_Home_Presentation_PresentationVF__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }),
    back: __jsx(_components_Home_Presentation_PresentationVA__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_7___default.a, {
    placeholder: __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__["ParallaxBanner"], {
    className: "homescreen",
    layers: [{
      image: _public_img_homescreen2_jpg__WEBPACK_IMPORTED_MODULE_17___default.a,
      amount: 0.5
    }],
    style: {
      height: '450px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), __jsx(_components_Home_FlipCard_FlipCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
    front: __jsx(_components_Home_Description_DescriptionVF__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }),
    back: __jsx(_components_Home_Description_DescriptionVA__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_7___default.a, {
    placeholder: __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__["ParallaxBanner"], {
    className: "homescreen",
    layers: [{
      image: _public_img_homescreen3_jpg__WEBPACK_IMPORTED_MODULE_18___default.a,
      amount: 0.5
    }],
    style: {
      height: '450px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("div", {
    className: "news",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Last News"), __jsx("div", {
    className: "card-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, loader ? __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }) : news.map(function (item, index) {
    return __jsx(_components_News_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: index,
      news: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    });
  })), __jsx("div", {
    className: "cta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(next_link_js__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: '/news',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Voir plus")))), __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_7___default.a, {
    placeholder: __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__["ParallaxBanner"], {
    className: "homescreen",
    layers: [{
      image: _public_img_homescreen_jpg__WEBPACK_IMPORTED_MODULE_16___default.a,
      amount: 0.5
    }],
    style: {
      height: '450px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }))));
};

Index.getInitialProps = function _callee(context) {
  var news;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!context.req) {
            _context2.next = 3;
            break;
          }

          news = Object(_helpers_News__WEBPACK_IMPORTED_MODULE_5__["getNews"])();
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

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.97087d143498ef478018.hot-update.js.map