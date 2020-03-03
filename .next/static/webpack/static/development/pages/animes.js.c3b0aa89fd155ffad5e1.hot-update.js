webpackHotUpdate("static/development/pages/animes.js",{

/***/ "./pages/animes.js":
/*!*************************!*\
  !*** ./pages/animes.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_Animes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/Animes */ "./helpers/Animes.js");
/* harmony import */ var _helpers_Shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/Shared */ "./helpers/Shared.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll-parallax */ "./node_modules/react-scroll-parallax/cjs/index.js");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Animes_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Animes/Card */ "./components/Animes/Card.js");
/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Loader/Loader */ "./components/Loader/Loader.js");
/* harmony import */ var _public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/img/banner.jpg */ "./public/img/banner.jpg");
/* harmony import */ var _public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/Users/kevhoque/Documents/MyTest/myJapan/pages/animes.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var Animes = function Animes(props) {
  var pageToDisplay = 9;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.animes || []),
      animes = _useState[0],
      setAnimes = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      displayedAnimes = _useState2[0],
      setDisplayedAnimes = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      hasMore = _useState3[0],
      setHasMore = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loader = _useState4[0],
      setLoader = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      deepLoader = _useState5[0],
      setDeepLoader = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.onscroll = lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default()(function () {
      if (!hasMore) return;
      var scroll = window.innerHeight + document.documentElement.scrollTop;
      if (scroll === document.documentElement.offsetHeight) loadItems();
    }, 100);

    var fetchDatas = function fetchDatas() {
      var _animes;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchDatas$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_helpers_Animes__WEBPACK_IMPORTED_MODULE_2__["getAnimes"])());

            case 2:
              _animes = _context.sent;
              setAnimes(_animes);
              setDisplayedAnimes(_animes.slice(0, pageToDisplay));
              setLoader(false);

              if (deepLoader) {
                setDeepLoader(false);
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      });
    };

    var cache = JSON.parse(localStorage.getItem('cache'));

    if (!props.animes && cache.animes) {
      var _animes = cache.animes;
      setAnimes(_animes);
      setDisplayedAnimes(_animes.slice(0, pageToDisplay));
      setLoader(false);

      if (Object(_helpers_Shared__WEBPACK_IMPORTED_MODULE_3__["dateDiff"])(new Date(cache.animesDate), new Date()).min > 10) {
        fetchDatas();
        setDeepLoader(true);
      }
    } else {
      fetchDatas();
    }
  }, [deepLoader]);
  window.onscroll = lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default()(function () {
    if (!hasMore) return;
    var scroll = window.innerHeight + document.documentElement.scrollTop;
    if (scroll === document.documentElement.offsetHeight) loadItems();
  }, 100);

  var loadItems = function loadItems() {
    var nbToDisplay = displayedAnimes.length + pageToDisplay;

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
      lineNumber: 70
    },
    __self: this
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_5__["ParallaxProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_5__["ParallaxBanner"], {
    className: "homescreen banner",
    layers: [{
      image: _public_img_banner_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
      amount: 0.5
    }],
    style: {
      height: '300px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "ANIMES")), deepLoader && __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      marginTop: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx("div", {
    className: "card-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, loader ? __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }) : displayedAnimes.map(function (item, index) {
    return __jsx(_components_Animes_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index,
      item: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    });
  }))));
};

Animes.getInitialProps = function _callee(_ref) {
  var req;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          req = _ref.req;

          if (req) {// const animes = await getAnimes();
            // return {animes}
          }

          return _context2.abrupt("return", {});

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Animes);

/***/ })

})
//# sourceMappingURL=animes.js.c3b0aa89fd155ffad5e1.hot-update.js.map