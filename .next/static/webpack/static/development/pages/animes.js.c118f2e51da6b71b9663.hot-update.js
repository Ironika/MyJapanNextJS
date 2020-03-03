webpackHotUpdate("static/development/pages/animes.js",{

/***/ "./helpers/Animes.js":
/*!***************************!*\
  !*** ./helpers/Animes.js ***!
  \***************************/
/*! exports provided: getApiAnimes, getAnimes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiAnimes", function() { return getApiAnimes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnimes", function() { return getAnimes; });
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shared */ "./helpers/Shared.js");
/* harmony import */ var _rss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rss */ "./rss.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api */ "./api.js");







var getApiAnimes = function getApiAnimes() {
  var _ref, data;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function getApiAnimes$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("".concat(_api__WEBPACK_IMPORTED_MODULE_6__["API"], "/api/animes")));

        case 3:
          _ref = _context.sent;
          data = _ref.data;
          return _context.abrupt("return", data);

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 11:
          return _context.abrupt("return", []);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};
var getAnimes = function getAnimes() {
  var animes, cache;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function getAnimes$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          animes = [];
          _context2.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(getAnimeSeikou(animes));

        case 3:
          _context2.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(getUniversAnimeiz(animes));

        case 5:
          cache = JSON.parse(localStorage.getItem('cache'));
          cache.animes = animes;
          cache.animesDate = new Date();
          localStorage.setItem('cache', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(cache));
          return _context2.abrupt("return", animes);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var getAnimeSeikou = function getAnimeSeikou(array) {
  var i, json;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function getAnimeSeikou$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          i = 1;

        case 1:
          if (!(i <= 2)) {
            _context3.next = 9;
            break;
          }

          _context3.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('https://cors-anywhere.herokuapp.com/' + _rss__WEBPACK_IMPORTED_MODULE_4__["ANIME_SEIKOU"] + i + '/'));

        case 4:
          json = _context3.sent;
          formatJsonAnimeSeikou(json, array);

        case 6:
          i++;
          _context3.next = 1;
          break;

        case 9:
          return _context3.abrupt("return", array);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  });
};

var getUniversAnimeiz = function getUniversAnimeiz(array) {
  var i, json;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function getUniversAnimeiz$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          i = 1;

        case 1:
          if (!(i <= 2)) {
            _context4.next = 9;
            break;
          }

          _context4.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('https://cors-anywhere.herokuapp.com/' + _rss__WEBPACK_IMPORTED_MODULE_4__["UNIVERSANIMEIZ"] + i + '/'));

        case 4:
          json = _context4.sent;
          formatJsonUniversAnimeiz(json, array);

        case 6:
          i++;
          _context4.next = 1;
          break;

        case 9:
          return _context4.abrupt("return", array);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  });
};

var formatJsonAnimeSeikou = function formatJsonAnimeSeikou(json, array) {
  var doc = new DOMParser().parseFromString(json.data, 'text/html');
  var items = doc.getElementsByClassName('slide-entry');

  for (var i = 0; i < items.length; i++) {
    var title = items[i].children[3].children[5].innerText;
    title = title.replace('VOSTFR', '');
    title = title.replace('vostfr', '');

    if (Object(_Shared__WEBPACK_IMPORTED_MODULE_3__["isInList"])(title.toUpperCase(), 'animes')) {
      var img = items[i].children[0].children[0].attributes[2].value;
      var date = items[i].children[3].children[3].innerText;
      var link = items[i].children[0].href;
      var item = {
        title: title,
        link: link,
        // pubDate: date,
        site: 'Anime Seikou',
        img: img,
        lang: 'VOSTFR'
      };
      if (!isInArray(item, array)) array.push(item);
    }
  }
};

var formatJsonUniversAnimeiz = function formatJsonUniversAnimeiz(json, array) {
  var doc = new DOMParser().parseFromString(json.data, 'text/html');
  var items = doc.getElementsByClassName('recent-posts')[0];

  for (var i = 0; i < items.children.length; i++) {
    var title = items.children[i].children[1].children[1].innerText;
    title = title.replace('VOSTFR', '');
    title = title.replace('vostfr', '');

    if (Object(_Shared__WEBPACK_IMPORTED_MODULE_3__["isInList"])(title.toUpperCase(), 'animes') && !title.includes('VF')) {
      var episode = items.children[i].children[1].children[3].innerText;
      var img = items.children[i].children[0].children[0].children[0].attributes[0].value;
      var link = items.children[i].children[0].children[0].href;
      var item = {
        title: title + ' ' + episode.replace('Épisode ', ''),
        link: link,
        site: 'Univers Animeiz',
        img: img,
        lang: 'VOSTFR'
      };
      if (!isInArray(item, array)) array.push(item);
    }
  }
};

var isInArray = function isInArray(item, array) {
  var isInArray = false;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(array), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var anime = _step.value;
      if (anime.title.includes(item.title)) return isInArray = true;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return isInArray;
};

/***/ })

})
//# sourceMappingURL=animes.js.c118f2e51da6b71b9663.hot-update.js.map