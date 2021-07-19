/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("lib_cryptos_js",{

/***/ "./lib/cryptos.js":
/*!************************!*\
  !*** ./lib/cryptos.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ getCurrentCryptos; },\n/* harmony export */   \"getCryptosInfo\": function() { return /* binding */ getCryptosInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/styles.module.css */ \"./styles/styles.module.css\");\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_sparklines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-sparklines */ \"./node_modules/react-sparklines/build/index.js\");\n/* harmony import */ var react_sparklines__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_sparklines__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/kevinperalta/Documents/SUMMERPROJ/PDP2021crypto/lib/cryptos.js\",\n    _s = $RefreshSig$();\n\n\n\n\n //import React from 'react'\n\n\n\nvar fetcher = function fetcher(url) {\n  return fetch(url).then(function (res) {\n    return res.json();\n  });\n};\n\nfunction getCurrentCryptos() {\n  var _this = this;\n\n  if (localStorage.getItem('myCryptos') === null) {\n    localStorage.setItem('myCryptos', JSON.stringify({\n      \"cryptos\": [\"btc\", \"eth\", \"bat\", \"usdt\", \"doge\", \"xrp\"]\n    }));\n  } //now surely there's cryptos?\n\n\n  var pairs = JSON.parse(localStorage.getItem(\"myCryptos\"))[\"cryptos\"].sort();\n  var allCryptosMetadata = {};\n  allCryptosMetadata = getCryptosInfo(pairs, true); //is this the best way to approach this?\n\n  if (allCryptosMetadata === null) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: \"\\\"loading...\\\"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainGrid),\n      children: pairs.map(function (aCrypto, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().tile),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            align: \"top\",\n            className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().srcImage),\n            src: allCryptosMetadata[index][\"logo_url\"]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 6\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"cryptoDetailed/\" + aCrypto,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              children: aCrypto\n            }, aCrypto, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 5\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 9\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\"Price: \", allCryptosMetadata[index][\"price\"]]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 7\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\" Volume:\", allCryptosMetadata[index][\"1d\"][\"volume\"]]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 7\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sparklines__WEBPACK_IMPORTED_MODULE_4__.Sparklines, {\n            data: allCryptosMetadata[index][\"prices\"],\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sparklines__WEBPACK_IMPORTED_MODULE_4__.SparklinesLine, {\n              color: \"white\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 5\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sparklines__WEBPACK_IMPORTED_MODULE_4__.SparklinesReferenceLine, {\n              type: \"mean\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 5\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sparklines__WEBPACK_IMPORTED_MODULE_4__.SparklinesSpots, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 5\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 8\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 4\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 2\n    }, this);\n  }\n}\nfunction getCryptosInfo(query) {\n  _s();\n\n  var doGetPricehist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  var call = \"http://localhost:3000/api/getCryptoInfo?params=\"; //\"https://pdp-2021crypto.vercel.app/api/getCryptoInfo?params=\"\n\n  for (var index in query) {\n    if (+index + +1 !== query.length) call += query[index] + \",\";else call += query[index];\n  }\n\n  if (doGetPricehist) call += \"&vol=true\";\n\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_1__.default)(call, fetcher),\n      data = _useSWR.data,\n      error = _useSWR.error;\n\n  if (!data) {\n    console.log(\"wait...\");\n    return null;\n  }\n\n  console.log(\"final data: \" + data);\n  return data;\n}\n\n_s(getCryptosInfo, \"PLUSh3GLacfZJClYQJks7Deieck=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_1__.default];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NyeXB0b3MuanM/ZTVkYSJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImdldEN1cnJlbnRDcnlwdG9zIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicGFpcnMiLCJwYXJzZSIsInNvcnQiLCJhbGxDcnlwdG9zTWV0YWRhdGEiLCJnZXRDcnlwdG9zSW5mbyIsIm15U3R5bGVzIiwibWFwIiwiYUNyeXB0byIsImluZGV4IiwicXVlcnkiLCJkb0dldFByaWNlaGlzdCIsImNhbGwiLCJsZW5ndGgiLCJ1c2VTV1IiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQUMsR0FBRztBQUFBLFNBQUlDLEtBQUssQ0FBQ0QsR0FBRCxDQUFMLENBQVdFLElBQVgsQ0FBZ0IsVUFBQUMsR0FBRztBQUFBLFdBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsR0FBbkIsQ0FBSjtBQUFBLENBQW5COztBQUVlLFNBQVNDLGlCQUFULEdBQTZCO0FBQUE7O0FBQ3pDLE1BQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixXQUFyQixNQUFzQyxJQUF6QyxFQUErQztBQUMxQ0QsZ0JBQVksQ0FBQ0UsT0FBYixDQUFxQixXQUFyQixFQUNBQyxJQUFJLENBQUNDLFNBQUwsQ0FBZ0I7QUFBQyxpQkFBVyxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUN6QixNQUR5QixFQUNqQixNQURpQixFQUNULEtBRFM7QUFBWixLQUFoQixDQURBO0FBR0osR0FMd0MsQ0FNekM7OztBQUNBLE1BQUlDLEtBQUssR0FBR0YsSUFBSSxDQUFDRyxLQUFMLENBQVdOLFlB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SUFBN0I7QUFDQSxTQUFPQSxJQUFQO0FBQ0g7O0dBakJlVixjO1VBVVVTLHdDIiwiZmlsZSI6Ii4vbGliL2NyeXB0b3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSLCB7bXV0YXRlfSBmcm9tICdzd3InXG5pbXBvcnQgbXlTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3N0eWxlcy5tb2R1bGUuY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuLy9pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTcGFya2xpbmVzLCBTcGFya2xpbmVzUmVmZXJlbmNlTGluZSwgU3BhcmtsaW5lc0xpbmUsIFNwYXJrbGluZXNTcG90cyB9IGZyb20gJ3JlYWN0LXNwYXJrbGluZXMnXG5jb25zdCBmZXRjaGVyID0gdXJsID0+IGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEN1cnJlbnRDcnlwdG9zKCkge1xuICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215Q3J5cHRvcycpID09PSBudWxsKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteUNyeXB0b3MnLCBcblx0XHRcdCAgICAgSlNPTi5zdHJpbmdpZnkoIHtcImNyeXB0b3NcIjogW1wiYnRjXCIsIFwiZXRoXCIsIFwiYmF0XCIsXG5cdFx0XHRcdFx0ICAgICAgXCJ1c2R0XCIsIFwiZG9nZVwiLCBcInhycFwiXX0pKVxuICAgfVxuICAgLy9ub3cgc3VyZWx5IHRoZXJlJ3MgY3J5cHRvcz9cbiAgIHZhciBwYWlycyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJteUNyeXB0b3NcIikpW1wiY3J5cHRvc1wiXS5zb3J0KClcbiAgIHZhciBhbGxDcnlwdG9zTWV0YWRhdGEgPSB7fVxuICAgXG4gICBhbGxDcnlwdG9zTWV0YWRhdGEgPSBnZXRDcnlwdG9zSW5mbyhwYWlycywgdHJ1ZSlcbiAgIC8vaXMgdGhpcyB0aGUgYmVzdCB3YXkgdG8gYXBwcm9hY2ggdGhpcz9cbiAgIGlmKGFsbENyeXB0b3NNZXRhZGF0YSA9PT0gbnVsbCl7XG5cdHJldHVybiA8cD5cImxvYWRpbmcuLi5cIjwvcD5cbiAgIH1cbiAgIGVsc2VcbiAgIHtcbiAgIHJldHVybiAoXG5cdDxkaXYgY2xhc3NOYW1lID0ge215U3R5bGVzLm1haW5HcmlkfT5cblx0XHR7cGFpcnMubWFwKChhQ3J5cHRvLGluZGV4KSA9PiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IHtteVN0eWxlcy50aWxlfT5cblx0XHRcdCAgPGltZyBhbGlnbj1cInRvcFwiIGNsYXNzTmFtZSA9IHtteVN0eWxlcy5zcmNJbWFnZX1zcmMgPSB7YWxsQ3J5cHRvc01ldGFkYXRhW2luZGV4XVtcImxvZ29fdXJsXCJdfT48L2ltZz5cbiAgXHRcdFx0ICAgPExpbmsga2V5PXtpbmRleH1ocmVmID0ge1wiY3J5cHRvRGV0YWlsZWQvXCIgKyBhQ3J5cHRvfT5cblx0XHRcdFx0PGEga2V5PXthQ3J5cHRvfSAgPnthQ3J5cHRvfTwvYT5cblx0XHRcdCAgIDwvTGluaz5cblx0XHRcdCAgIDxkaXY+UHJpY2U6IHthbGxDcnlwdG9zTWV0YWRhdGFbaW5kZXhdW1wicHJpY2VcIl19PC9kaXY+XG5cdFx0XHQgICA8ZGl2PiBWb2x1bWU6e2FsbENyeXB0b3NNZXRhZGF0YVtpbmRleF1bXCIxZFwiXVtcInZvbHVtZVwiXX08L2Rpdj5cblx0XHRcdCAgICA8U3BhcmtsaW5lcyBkYXRhPXthbGxDcnlwdG9zTWV0YWRhdGFbaW5kZXhdW1wicHJpY2VzXCJdfSA+XG5cdFx0XHRcdDxTcGFya2xpbmVzTGluZSBjb2xvcj1cIndoaXRlXCIvPlxuXHRcdFx0XHQ8U3BhcmtsaW5lc1JlZmVyZW5jZUxpbmUgdHlwZT1cIm1lYW5cIi8+XG5cdFx0XHRcdDxTcGFya2xpbmVzU3BvdHMvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFya2xpbmVzPlxuXHRcdFx0PC9kaXY+XG5cdFx0KSl9XHRcblx0PC9kaXY+XHRcdFx0XG4gICApXG4gICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENyeXB0b3NJbmZvKHF1ZXJ5LCBkb0dldFByaWNlaGlzdD1mYWxzZSlcbnsgICAgXG4gICAgdmFyIGNhbGwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ2V0Q3J5cHRvSW5mbz9wYXJhbXM9XCIvL1wiaHR0cHM6Ly9wZHAtMjAyMWNyeXB0by52ZXJjZWwuYXBwL2FwaS9nZXRDcnlwdG9JbmZvP3BhcmFtcz1cIlxuICAgIGZvcih2YXIgaW5kZXggaW4gcXVlcnkpXG4gICAge1xuIFx0aWYoK2luZGV4ICsgKzEgIT09IHF1ZXJ5Lmxlbmd0aCkgY2FsbCArPSBxdWVyeVtpbmRleF0gKyBcIixcIjtcbiAgICAgICAgZWxzZSBjYWxsICs9IHF1ZXJ5W2luZGV4XVxuICAgIH1cbiAgICBpZiAoZG9HZXRQcmljZWhpc3QpIGNhbGwgKz0gXCImdm9sPXRydWVcIlxuXG4gICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUihjYWxsLCBmZXRjaGVyKVxuICAgIGlmKCFkYXRhKSB7IFxuICAgICAgIGNvbnNvbGUubG9nKFwid2FpdC4uLlwiKVxuICAgICAgIHJldHVybiBudWxsXG4gICAgfSBcbiAgICBjb25zb2xlLmxvZyhcImZpbmFsIGRhdGE6IFwiICsgZGF0YSlcbiAgICByZXR1cm4gZGF0YVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/cryptos.js\n");

/***/ })

});