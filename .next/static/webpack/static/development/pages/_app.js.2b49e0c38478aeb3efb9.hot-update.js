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
/* harmony import */ var _Link_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Link/Link */ "./components/Link/Link.js");
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
  return __jsx("nav", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("ul", {
    className: "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_Link_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: '/',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Home"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_Link_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: '/news',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "News"))), __jsx("li", {
    className: "logo bounceIn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("img", {
    src: _public_img_cerisier_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_Link_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: '/scans',
    className: router.pathname === '/scans' ? 'active' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Scans"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_Link_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: '/animes',
    className: router.pathname === '/animes' ? 'active' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Animes"))), __jsx("li", {
    className: "burger",
    onClick: function onClick(e) {
      return setMenuIsOpen(!menuIsOpen);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-bars",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }))), __jsx("ul", {
    className: menuIsOpen ? 'nav-mobile menuIsOpen' : 'nav-mobile',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_Link_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: '/',
    exact: true,
    activeClassName: "active",
    onClick: function onClick(e) {
      return setMenuIsOpen(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Home", __jsx("i", {
    className: "fas fa-arrow-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_Link_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: '/news',
    activeClassName: "active",
    onClick: function onClick(e) {
      return setMenuIsOpen(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "News", __jsx("i", {
    className: "fas fa-arrow-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(_Link_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: '/scans',
    activeClassName: "active",
    onClick: function onClick(e) {
      return setMenuIsOpen(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Scans", __jsx("i", {
    className: "fas fa-arrow-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_Link_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: '/animes',
    activeClassName: "active",
    onClick: function onClick(e) {
      return setMenuIsOpen(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Animes", __jsx("i", {
    className: "fas fa-arrow-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.2b49e0c38478aeb3efb9.hot-update.js.map