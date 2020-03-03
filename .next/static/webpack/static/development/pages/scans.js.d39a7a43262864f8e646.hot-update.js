webpackHotUpdate("static/development/pages/scans.js",{

/***/ "./pages/scans.js":
/*!************************!*\
  !*** ./pages/scans.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll-parallax */ "./node_modules/react-scroll-parallax/cjs/index.js");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_Scans__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/Scans */ "./helpers/Scans.js");
/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Loader/Loader */ "./components/Loader/Loader.js");
/* harmony import */ var _components_Scans_CardVa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Scans/CardVa */ "./components/Scans/CardVa.js");
/* harmony import */ var _components_Scans_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Scans/Card */ "./components/Scans/Card.js");
/* harmony import */ var _public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/img/banner.jpg */ "./public/img/banner.jpg");
/* harmony import */ var _public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "/Users/kevhoque/Documents/MyTest/myJapan/pages/scans.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











var Scans = function Scans(props) {
  var pageToDisplay = 12;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(12),
      nbToDisplay = _useState[0],
      setNbToDisplay = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.scans || []),
      scans = _useState2[0],
      setScans = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.scansVa || []),
      scansVa = _useState3[0],
      setScansVa = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      displayedScansVa = _useState4[0],
      setDisplayedScansVa = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      hasMore = _useState5[0],
      setHasMore = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loader = _useState6[0],
      setLoader = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loaderVa = _useState7[0],
      setLoaderVa = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      deepLoader = _useState8[0],
      setDeepLoader = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.onscroll = lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(function () {
      if (!hasMore) return;
      var scroll = window.innerHeight + document.documentElement.scrollTop;
      if (scroll === document.documentElement.offsetHeight) loadItems();
    }, 100);
  }, [displayedScansVa]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var fetchScans = function fetchScans() {
      var _scans;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchScans$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_helpers_Scans__WEBPACK_IMPORTED_MODULE_5__["getApiScans"])());

            case 2:
              _scans = _context.sent;
              setScans(_scans);
              setLoader(false);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    };

    var fetchScansVa = function fetchScansVa(flag) {
      var _scansVa;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchScansVa$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_helpers_Scans__WEBPACK_IMPORTED_MODULE_5__["getApiScansVA"])());

            case 2:
              _scansVa = _context2.sent;
              setScansVa(_scansVa);
              setDisplayedScansVa(_scansVa.slice(0, nbToDisplay));
              setLoaderVa(false);

              if (flag) {
                setHasMore(true);
                setDeepLoader(false);
              }

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      });
    };

    fetchScans();
    fetchScansVa();
  }, [deepLoader, nbToDisplay]);

  var loadItems = function loadItems() {
    var currentNbToDisplay = displayedScansVa.length + pageToDisplay;

    if (currentNbToDisplay > scansVa.length) {
      currentNbToDisplay = scansVa.length;
      setHasMore(false);
    }

    setNbToDisplay(currentNbToDisplay);
    setDisplayedScansVa(scansVa.slice(0, currentNbToDisplay));
  };

  return __jsx("div", {
    className: "Scans",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__["ParallaxProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__["ParallaxBanner"], {
    className: "homescreen banner",
    layers: [{
      image: _public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
      amount: 0.5
    }],
    style: {
      height: '300px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "SCANS")), __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("div", {
    className: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("div", {
    className: "card-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, loader ? __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }) : scans.map(function (item, index) {
    return __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: index,
      placeholder: __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx(_components_Scans_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
      news: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }));
  }))), __jsx("div", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, deepLoader && __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      marginTop: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), __jsx("div", {
    className: "card-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, loaderVa ? __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }) : displayedScansVa.map(function (item, index) {
    return __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: index,
      placeholder: __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx(_components_Scans_CardVa__WEBPACK_IMPORTED_MODULE_7__["default"], {
      item: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }));
  }))))));
};

Scans.getInitialProps = function _callee(_ref) {
  var req, scans, scansVa;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          req = _ref.req;

          if (!req) {
            _context3.next = 9;
            break;
          }

          _context3.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_helpers_Scans__WEBPACK_IMPORTED_MODULE_5__["getApiScans"])());

        case 4:
          scans = _context3.sent;
          _context3.next = 7;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_helpers_Scans__WEBPACK_IMPORTED_MODULE_5__["getApiScansVA"])());

        case 7:
          scansVa = _context3.sent;
          return _context3.abrupt("return", {
            scans: scans,
            scansVa: scansVa
          });

        case 9:
          return _context3.abrupt("return", {});

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Scans);

/***/ })

})
//# sourceMappingURL=scans.js.d39a7a43262864f8e646.hot-update.js.map