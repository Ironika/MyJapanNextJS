webpackHotUpdate("static/development/pages/news.js",{

/***/ "./components/News/Card.js":
/*!*********************************!*\
  !*** ./components/News/Card.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Loader/Loader */ "./components/Loader/Loader.js");
var _jsxFileName = "/Users/kevhoque/Documents/MyTest/myJapan/components/News/Card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Card = function Card(props) {
  var pubDate = new Date(props.news.pubDate);
  return __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_1___default.a, {
    placeholder: __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "card-news",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("a", {
    href: props.news.link,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("img", {
    src: props.news.img,
    alt: props.news.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("div", {
    className: "card-news-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, props.news.site), __jsx("span", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, pubDate.toLocaleString()), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, props.news.title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, props.news.desc.length > 200 ? props.news.desc.substring(0, 150) + '...' : props.news.desc)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=news.js.9ece547d3ae9d7686e9c.hot-update.js.map