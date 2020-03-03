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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link.js */ "./node_modules/next/link.js");
/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll-parallax */ "./node_modules/react-scroll-parallax/cjs/index.js");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_News__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/News */ "./helpers/News.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Loader/Loader */ "./components/Loader/Loader.js");
/* harmony import */ var _components_News_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/News/Card */ "./components/News/Card.js");
/* harmony import */ var _components_Home_FlipCard_FlipCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Home/FlipCard/FlipCard */ "./components/Home/FlipCard/FlipCard.js");
/* harmony import */ var _components_Home_Presentation_PresentationVF__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Home/Presentation/PresentationVF */ "./components/Home/Presentation/PresentationVF.js");
/* harmony import */ var _components_Home_Presentation_PresentationVA__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Home/Presentation/PresentationVA */ "./components/Home/Presentation/PresentationVA.js");
/* harmony import */ var _components_Home_Description_DescriptionVF__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Home/Description/DescriptionVF */ "./components/Home/Description/DescriptionVF.js");
/* harmony import */ var _components_Home_Description_DescriptionVA__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Home/Description/DescriptionVA */ "./components/Home/Description/DescriptionVA.js");
/* harmony import */ var _public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../public/img/banner.jpg */ "./public/img/banner.jpg");
/* harmony import */ var _public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _public_img_homescreen_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../public/img/homescreen.jpg */ "./public/img/homescreen.jpg");
/* harmony import */ var _public_img_homescreen_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_public_img_homescreen_jpg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _public_img_homescreen2_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../public/img/homescreen2.jpg */ "./public/img/homescreen2.jpg");
/* harmony import */ var _public_img_homescreen2_jpg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_img_homescreen2_jpg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _public_img_homescreen3_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../public/img/homescreen3.jpg */ "./public/img/homescreen3.jpg");
/* harmony import */ var _public_img_homescreen3_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_public_img_homescreen3_jpg__WEBPACK_IMPORTED_MODULE_16__);

var _jsxFileName = "/Users/kevhoque/Documents/MyTest/myJapan/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


















var Index = function Index(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.news || []),
      news = _useState[0],
      setNews = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loader = _useState2[0],
      setLoader = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var fetchDatas = function fetchDatas() {
      var _news;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchDatas$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_helpers_News__WEBPACK_IMPORTED_MODULE_4__["getApiNews"])());

            case 2:
              _news = _context.sent;
              _news.length = 4;
              setNews(_news);
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
  return __jsx("div", {
    className: "Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["ParallaxProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["ParallaxBanner"], {
    className: "homescreen banner",
    layers: [{
      image: _public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
      amount: 0.5
    }],
    style: {
      height: '300px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "HOME")), __jsx(_components_Home_FlipCard_FlipCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    front: __jsx(_components_Home_Presentation_PresentationVF__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }),
    back: __jsx(_components_Home_Presentation_PresentationVA__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_5___default.a, {
    placeholder: __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["ParallaxBanner"], {
    className: "homescreen",
    layers: [{
      image: _public_img_homescreen2_jpg__WEBPACK_IMPORTED_MODULE_15___default.a,
      amount: 0.5
    }],
    style: {
      height: '450px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), __jsx(_components_Home_FlipCard_FlipCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    front: __jsx(_components_Home_Description_DescriptionVF__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }),
    back: __jsx(_components_Home_Description_DescriptionVA__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_5___default.a, {
    placeholder: __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["ParallaxBanner"], {
    className: "homescreen",
    layers: [{
      image: _public_img_homescreen3_jpg__WEBPACK_IMPORTED_MODULE_16___default.a,
      amount: 0.5
    }],
    style: {
      height: '450px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "news",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Last News"), __jsx("div", {
    className: "card-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, loader ? __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }) : news.map(function (item, index) {
    return __jsx(_components_News_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: index,
      news: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    });
  })), __jsx("div", {
    className: "cta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(next_link_js__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '/news',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Voir plus"))))), __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_5___default.a, {
    placeholder: __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["ParallaxBanner"], {
    className: "homescreen",
    layers: [{
      image: _public_img_homescreen_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
      amount: 0.5
    }],
    style: {
      height: '450px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
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

          news = Object(_helpers_News__WEBPACK_IMPORTED_MODULE_4__["getApiNews"])();
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
//# sourceMappingURL=index.js.72bb933a5868d1ee1538.hot-update.js.map