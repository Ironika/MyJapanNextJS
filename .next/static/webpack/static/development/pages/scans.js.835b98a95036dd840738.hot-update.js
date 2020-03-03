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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll-parallax */ "./node_modules/react-scroll-parallax/cjs/index.js");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_Scans__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/Scans */ "./helpers/Scans.js");
/* harmony import */ var _helpers_Shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/Shared */ "./helpers/Shared.js");
/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Loader/Loader */ "./components/Loader/Loader.js");
/* harmony import */ var _components_Scans_CardVa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Scans/CardVa */ "./components/Scans/CardVa.js");
/* harmony import */ var _components_Scans_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Scans/Card */ "./components/Scans/Card.js");
/* harmony import */ var _public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/img/banner.jpg */ "./public/img/banner.jpg");
/* harmony import */ var _public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_11__);


var _jsxFileName = "/Users/kevhoque/Documents/MyTest/myJapan/pages/scans.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;












var Scans = function Scans() {
  var pageToDisplay = 12;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(12),
      nbToDisplay = _useState[0],
      setNbToDisplay = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      scans = _useState2[0],
      setScans = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      scansVa = _useState3[0],
      setScansVa = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      displayedScansVa = _useState4[0],
      setDisplayedScansVa = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      hasMore = _useState5[0],
      setHasMore = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      loader = _useState6[0],
      setLoader = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      loaderVa = _useState7[0],
      setLoaderVa = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      deepLoader = _useState8[0],
      setDeepLoader = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.onscroll = lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(function () {
      if (!hasMore) return;
      var scroll = window.innerHeight + document.documentElement.scrollTop;
      if (scroll === document.documentElement.offsetHeight) loadItems();
    }, 100);
  }, [displayedScansVa]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var fetchScans = function fetchScans() {
      var currentScans;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchScans$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"];
              _context.next = 3;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_helpers_Scans__WEBPACK_IMPORTED_MODULE_6__["getScans"])());

            case 3:
              _context.t1 = _context.sent;
              currentScans = (0, _context.t0)(_context.t1);
              setScans(currentScans);
              setLoader(false);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      });
    };

    var fetchScansVa = function fetchScansVa(flag) {
      var currentScansVa;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchScansVa$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.t0 = _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"];
              _context2.next = 3;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_helpers_Scans__WEBPACK_IMPORTED_MODULE_6__["getScansVA"])());

            case 3:
              _context2.t1 = _context2.sent;
              currentScansVa = (0, _context2.t0)(_context2.t1);
              setScansVa(currentScansVa);
              setDisplayedScansVa(currentScansVa.slice(0, nbToDisplay));
              setLoaderVa(false);

              if (flag) {
                setHasMore(true);
                setDeepLoader(false);
              }

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      });
    };

    var cache = JSON.parse(localStorage.getItem('cache'));

    if (cache.scans) {
      var currentScans = cache.scans;
      setScans(currentScans);
      setLoader(false);
      if (Object(_helpers_Shared__WEBPACK_IMPORTED_MODULE_7__["dateDiff"])(new Date(cache.scansDate), new Date()).min > 10) fetchScans();
    } else {
      fetchScans();
    }

    if (cache.scansVa) {
      var currentScansVa = cache.scansVa;
      setScansVa(currentScansVa);
      setDisplayedScansVa(currentScansVa.slice(0, pageToDisplay));
      setLoaderVa(false);

      if (Object(_helpers_Shared__WEBPACK_IMPORTED_MODULE_7__["dateDiff"])(new Date(cache.scansVaDate), new Date()).min > 10) {
        fetchScansVa(true);
        setDeepLoader(true);
      }
    } else {
      fetchScansVa();
    }
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
      lineNumber: 87
    },
    __self: this
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_5__["ParallaxProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_5__["ParallaxBanner"], {
    className: "homescreen banner",
    layers: [{
      image: _public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
      amount: 0.5
    }],
    style: {
      height: '300px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "SCANS")), __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("div", {
    className: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("div", {
    className: "card-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, loader ? __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }) : scans.map(function (item, index) {
    return __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_4___default.a, {
      key: index,
      placeholder: __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx(_components_Scans_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
      news: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }));
  }))), __jsx("div", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, deepLoader && __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      marginTop: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), __jsx("div", {
    className: "card-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, loaderVa ? __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }) : displayedScansVa.map(function (item, index) {
    return __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_4___default.a, {
      key: index,
      placeholder: __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx(_components_Scans_CardVa__WEBPACK_IMPORTED_MODULE_9__["default"], {
      item: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Scans);

/***/ })

})
//# sourceMappingURL=scans.js.835b98a95036dd840738.hot-update.js.map