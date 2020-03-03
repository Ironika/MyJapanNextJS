webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link.js */ "./node_modules/next/link.js");
/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_img_cerisier_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/img/cerisier.png */ "./public/img/cerisier.png");
/* harmony import */ var _public_img_cerisier_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_cerisier_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/kevhoque/Documents/MyTest/myJapan/components/Header/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Header = function Header() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      menuIsOpen = _useState[0],
      setMenuIsOpen = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  console.log(router.pathname);
  return __jsx("nav", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("ul", {
    className: "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(next_link_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/',
    exact: true,
    className: router.pathname === '/' ? 'active' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Home"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(next_link_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/news',
    "class": router.pathname === '/news' ? 'active' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "News"))), __jsx("li", {
    className: "logo bounceIn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("img", {
    src: _public_img_cerisier_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(next_link_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/scans',
    className: router.pathname === '/scans' ? 'active' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Scans"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(next_link_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/animes',
    className: router.pathname === '/animes' ? 'active' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Animes"))), __jsx("li", {
    className: "burger",
    onClick: function onClick(e) {
      return setMenuIsOpen(!menuIsOpen);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-bars",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }))), __jsx("ul", {
    className: menuIsOpen ? 'nav-mobile menuIsOpen' : 'nav-mobile',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(next_link_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/',
    exact: true,
    activeClassName: "active",
    onClick: function onClick(e) {
      return setMenuIsOpen(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Home", __jsx("i", {
    className: "fas fa-arrow-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(next_link_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/news',
    activeClassName: "active",
    onClick: function onClick(e) {
      return setMenuIsOpen(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "News", __jsx("i", {
    className: "fas fa-arrow-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(next_link_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/scans',
    activeClassName: "active",
    onClick: function onClick(e) {
      return setMenuIsOpen(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Scans", __jsx("i", {
    className: "fas fa-arrow-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(next_link_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/animes',
    activeClassName: "active",
    onClick: function onClick(e) {
      return setMenuIsOpen(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Animes", __jsx("i", {
    className: "fas fa-arrow-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.56d2e3bbcc914bfad87d.hot-update.js.map