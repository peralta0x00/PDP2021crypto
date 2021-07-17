/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["lib_cryptos_js"],{

/***/ "./lib/cryptos.js":
/*!************************!*\
  !*** ./lib/cryptos.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ getCurrentCryptos; },\n/* harmony export */   \"getCryptosInfo\": function() { return /* binding */ getCryptosInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/styles.module.css */ \"./styles/styles.module.css\");\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/kevinperalta/Documents/SUMMERPROJ/PDP2021crypto/lib/cryptos.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar fetcher = function fetcher(url) {\n  return fetch(url).then(function (res) {\n    return res.json();\n  });\n};\n\nfunction getCurrentCryptos() {\n  var _this = this;\n\n  if (localStorage.getItem('myCryptos') === null) {\n    localStorage.setItem('myCryptos', JSON.stringify({\n      \"cryptos\": [\"btc\", \"eth\", \"bat\", \"usdt\", \"doge\", \"xrp\"]\n    }));\n  } //now surely there's cryptos?\n\n\n  var pairs = JSON.parse(localStorage.getItem(\"myCryptos\"))[\"cryptos\"];\n  var allCryptosData = {};\n  allCryptosData = getCryptosInfo(pairs); //is this the best way to approach this?\n\n  if (allCryptosData === null) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: \"\\\"loading...\\\"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().mainGrid),\n    children: pairs.map(function (aCrypto, index) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().tile),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          align: \"top\",\n          className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().srcImage),\n          src: allCryptosData[index][\"logo_url\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 6\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n          href: \"cryptoDetailed/\" + aCrypto,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: aCrypto\n          }, aCrypto, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 5\n          }, _this)\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n          id: \"myChart\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 7\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [\"Price: \", allCryptosData[index][\"price\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 7\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [\" Volume:\", allCryptosData[index][\"1d\"][\"volume\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 7\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 4\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 2\n  }, this);\n}\nfunction getCryptosInfo(query) {\n  _s();\n\n  var call = \"http://localhost:3000/api/getCryptoInfo?params=\";\n\n  for (var index in query) {\n    if (+index + +1 !== query.length) call += query[index] + \",\";\n    if (+index + +1 === query.length) call += query[index];\n  }\n\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_1__.default)(call, fetcher),\n      data = _useSWR.data,\n      error = _useSWR.error;\n\n  if (!data) {\n    return null;\n  }\n\n  return data;\n}\n\n_s(getCryptosInfo, \"PLUSh3GLacfZJClYQJks7Deieck=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_1__.default];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NyeXB0b3MuanM/ZTVkYSJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImdldEN1cnJlbnRDcnlwdG9zIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicGFpcnMiLCJwYXJzZSIsImFsbENyeXB0b3NEYXRhIiwiZ2V0Q3J5cHRvc0luZm8iLCJteVN0eWxlcyIsIm1hcCIsImFDcnlwdG8iLCJpbmRleCIsInF1ZXJ5IiwiY2FsbCIsImxlbmd0aCIsInVzZVNXUiIsImRhdGEiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFBQyxHQUFHO0FBQUEsU0FBSUMsS0FBSyxDQUFDRCxHQUFELENBQUwsQ0FBV0UsSUFBWCxDQUFnQixVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxHQUFuQixDQUFKO0FBQUEsQ0FBbkI7O0FBRWUsU0FBU0MsaUJBQVQsR0FBNkI7QUFBQTs7QUFDekMsTUFBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFdBQXJCLE1BQXNDLElBQXpDLEVBQStDO0FBQzFDRCxnQkFBWSxDQUFDRSxPQUFiLENBQXFCLFdBQXJCLEVBQ0FDLElBQUksQ0FBQ0MsU0FBTCxDQUFnQjtBQUFDLGlCQUFXLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQ3pCLE1BRHlCLEVBQ2pCLE1BRGlCLEVBQ1QsS0FEUztBQUFaLEtBQWhCLENBREE7QUFHSixHQUx3QyxDQU16Qzs7O0FBQ0EsTUFBSUMsS0FBSyxHQUFHRixJQUFJLENBQUNHLEtBQUwsQ0FBV04sWUFBWSxDQUFDQyxPQUFiLENBQXFCLFdBQXJCLENBQVgsRUFBOEMsU0FBOUMsQ0FBWjtBQUNBLE1BQUlNLGNBQWMsR0FBRyxFQUFyQjtBQUNBQSxnQkFBYyxHQUFHQyxjQUFjLENBQUNILEtBQUQsQ0FBL0IsQ0FUeUMsQ0FVekM7O0FBQ0EsTUFBR0UsY0FBYyxLQUFLLElBQXRCLEVBQTJCO0FBQzdCLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRzs7QUFFRCxzQkFDRjtBQUFLLGFBQVMsRUFBSUUsMkVBQWxCO0FBQUEsY0FDRUosS0FBSyxDQUFDSyxHQUFOLENBQVUsVUFBQ0MsT0FBRCxFQUFTQyxLQUFUO0FBQUEsMEJBQ1Y7QUFBSyxpQkFBUyxFQUFJSCx1RUFBbEI7QUFBQSxnQ0FDRTtBQUFLLGVBQUssRUFBQyxLQUFYO0FBQWlCLG1CQUFTLEVBQUlBLDJFQUE5QjtBQUFnRCxhQUFHLEVBQUlGLGNBQWMsQ0FBQ0ssS0FBRCxDQUFkLENBQXNCLFVBQXRCO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFSyw4REFBQyxrREFBRDtBQUFpQixjQUFJLEVBQUksb0JBQW9CRCxPQUE3QztBQUFBLGlDQUNKO0FBQUEsc0JBQW9CQTtBQUFwQixhQUFRQSxPQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESSxXQUFXQyxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkwsZUFLRztBQUFRLFlBQUUsRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEgsZUFPRztBQUFBLGdDQUFhTCxjQUFjLENBQUNLLEtBQUQsQ0FBZCxDQUFzQixPQUF0QixDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSCxlQVFHO0FBQUEsaUNBQWNMLGNBQWMsQ0FBQ0ssS0FBRCxDQUFkLENBQXNCLElBQXRCLEVBQTRCLFFBQTVCLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURVO0FBQUEsS0FBVjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERTtBQWdCRjtBQUVNLFNBQVNKLGNBQVQsQ0FBd0JLLEtBQXhCLEVBQ1A7QUFBQTs7QUFDSSxNQUFJQyxJQUFJLEdBQUcsaURBQVg7O0FBQ0EsT0FBSSxJQUFJRixLQUFSLElBQWlCQyxLQUFqQixFQUNBO0FBQ0YsUUFBRyxDQUFDRCxLQUFELEdBQVMsQ0FBQyxDQUFWLEtBQWdCQyxLQUFLLENBQUNFLE1BQXpCLEVBQWlDRCxJQUFJLElBQUlELEtBQUssQ0FBQ0QsS0FBRCxDQUFMLEdBQWUsR0FBdkI7QUFDM0IsUUFBRyxDQUFDQSxLQUFELEdBQVMsQ0FBQyxDQUFWLEtBQWdCQyxLQUFLLENBQUNFLE1BQXpCLEVBQWlDRCxJQUFJLElBQUlELEtBQUssQ0FBQ0QsS0FBRCxDQUFiO0FBQ3BDOztBQU5MLGdCQVEwQkksNENBQU0sQ0FBQ0YsSUFBRCxFQUFPckIsT0FBUCxDQVJoQztBQUFBLE1BUVd3QixJQVJYLFdBUVdBLElBUlg7QUFBQSxNQVFpQkMsS0FSakIsV0FRaUJBLEtBUmpCOztBQVNJLE1BQUcsQ0FBQ0QsSUFBSixFQUFVO0FBQ1AsV0FBTyxJQUFQO0FBQ0Y7O0FBRUQsU0FBT0EsSUFBUDtBQUNIOztHQWZlVCxjO1VBU1VRLHdDIiwiZmlsZSI6Ii4vbGliL2NyeXB0b3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSLCB7bXV0YXRlfSBmcm9tICdzd3InXG5pbXBvcnQgbXlTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3N0eWxlcy5tb2R1bGUuY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuY29uc3QgZmV0Y2hlciA9IHVybCA9PiBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDdXJyZW50Q3J5cHRvcygpIHtcbiAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteUNyeXB0b3MnKSA9PT0gbnVsbCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlDcnlwdG9zJywgXG5cdFx0XHQgICAgIEpTT04uc3RyaW5naWZ5KCB7XCJjcnlwdG9zXCI6IFtcImJ0Y1wiLCBcImV0aFwiLCBcImJhdFwiLFxuXHRcdFx0XHRcdCAgICAgIFwidXNkdFwiLCBcImRvZ2VcIiwgXCJ4cnBcIl19KSlcbiAgIH1cbiAgIC8vbm93IHN1cmVseSB0aGVyZSdzIGNyeXB0b3M/XG4gICB2YXIgcGFpcnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXlDcnlwdG9zXCIpKVtcImNyeXB0b3NcIl1cbiAgIHZhciBhbGxDcnlwdG9zRGF0YSA9IHt9XG4gICBhbGxDcnlwdG9zRGF0YSA9IGdldENyeXB0b3NJbmZvKHBhaXJzKVxuICAgLy9pcyB0aGlzIHRoZSBiZXN0IHdheSB0byBhcHByb2FjaCB0aGlzP1xuICAgaWYoYWxsQ3J5cHRvc0RhdGEgPT09IG51bGwpe1xuXHRyZXR1cm4gPHA+XCJsb2FkaW5nLi4uXCI8L3A+XG4gICB9XG5cbiAgIHJldHVybiAoXG5cdDxkaXYgY2xhc3NOYW1lID0ge215U3R5bGVzLm1haW5HcmlkfT5cblx0XHR7cGFpcnMubWFwKChhQ3J5cHRvLGluZGV4KSA9PiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IHtteVN0eWxlcy50aWxlfT5cblx0XHRcdCAgPGltZyBhbGlnbj1cInRvcFwiIGNsYXNzTmFtZSA9IHtteVN0eWxlcy5zcmNJbWFnZX1zcmMgPSB7YWxsQ3J5cHRvc0RhdGFbaW5kZXhdW1wibG9nb191cmxcIl19PjwvaW1nPlxuICBcdFx0XHQgICA8TGluayBrZXk9e2luZGV4fWhyZWYgPSB7XCJjcnlwdG9EZXRhaWxlZC9cIiArIGFDcnlwdG99PlxuXHRcdFx0XHQ8YSBrZXk9e2FDcnlwdG99ICA+e2FDcnlwdG99PC9hPlxuXHRcdFx0ICAgPC9MaW5rPlxuXHRcdFx0ICAgPGNhbnZhcyBpZD1cIm15Q2hhcnRcIj48L2NhbnZhcz5cblxuXHRcdFx0ICAgPGRpdj5QcmljZToge2FsbENyeXB0b3NEYXRhW2luZGV4XVtcInByaWNlXCJdfTwvZGl2PlxuXHRcdFx0ICAgPGRpdj4gVm9sdW1lOnthbGxDcnlwdG9zRGF0YVtpbmRleF1bXCIxZFwiXVtcInZvbHVtZVwiXX08L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCkpfVx0XG5cdDwvZGl2Plx0XHRcdFxuICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3J5cHRvc0luZm8ocXVlcnkpXG57ICAgIFxuICAgIHZhciBjYWxsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2dldENyeXB0b0luZm8/cGFyYW1zPVwiXG4gICAgZm9yKHZhciBpbmRleCBpbiBxdWVyeSlcbiAgICB7XG4gXHRpZigraW5kZXggKyArMSAhPT0gcXVlcnkubGVuZ3RoKSBjYWxsICs9IHF1ZXJ5W2luZGV4XSArIFwiLFwiO1xuICAgICAgICBpZigraW5kZXggKyArMSA9PT0gcXVlcnkubGVuZ3RoKSBjYWxsICs9IHF1ZXJ5W2luZGV4XVxuICAgIH1cblxuICAgIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1IoY2FsbCwgZmV0Y2hlcilcbiAgICBpZighZGF0YSkgeyBcbiAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gZGF0YVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/cryptos.js\n");

/***/ }),

/***/ "./styles/styles.module.css":
/*!**********************************!*\
  !*** ./styles/styles.module.css ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles.module.css */ \"./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/styles.module.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = function(element){// These elements should always exist. If they do not,\n// this code should fail.\nvar anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>\n// Each style tag should be placed right before our\n// anchor. By inserting before and not after, we do not\n// need to track the last inserted element.\nparentNode.insertBefore(element,anchorElement);};\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue\ncontinue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue\ncontinue;}if(!a[p]){return false;}}return true;};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles.module.css */ \"./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/styles.module.css\",\n      function () {\n        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles.module.css */ \"./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/styles.module.css\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.id, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3N0eWxlcy5tb2R1bGUuY3NzPzhhMTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVSxtQkFBTyxDQUFDLG9OQUF3RztBQUMxSCwwQkFBMEIsbUJBQU8sQ0FBQyx1YUFBK007O0FBRWpQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxzRUFBc0Usd0NBQXdDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkLHlCQUF5QixVQUFVO0FBQ25DLGtFQUFrRSxpQkFBaUIsY0FBYyxNQUFNLFlBQVksaUNBQWlDO0FBQ3BKLFVBQVUsZ0JBQWdCLGVBQWUsWUFBWSxpQ0FBaUM7QUFDdEYsVUFBVSxVQUFVLGVBQWU7QUFDbkM7O0FBRUEsSUFBSSxpQkFBaUI7QUFDckIsTUFBTSx1YUFBK007QUFDck47QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyx1YUFBK007O0FBRXpPOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOztBQUVBIiwiZmlsZSI6Ii4vc3R5bGVzL3N0eWxlcy5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsyXSEuL3N0eWxlcy5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsyXSEuL3N0eWxlcy5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMl0hLi9zdHlsZXMubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/styles.module.css\n");

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/styles.module.css":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/styles.module.css ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".styles_tile__2-Tnh {\\n   background:navy;\\n   color:white;\\n   padding:5px;\\n   border:2px solid black;\\n}\\n \\n.styles_mainGrid__1HDYl {\\n   display:grid;\\n   padding:2px;\\n   grid-template-columns: 1fr 1fr 1fr;\\n   grid-auto-rows: 250px;\\n}\\n\\n.styles_srcImage__3mKRB { \\n   width:100%;\\n   height:100%;\\n   max-height:30px;\\n}\\n\\n\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/styles.module.css\"],\"names\":[],\"mappings\":\"AAAA;GACG,eAAe;GACf,WAAW;GACX,WAAW;GACX,sBAAsB;AACzB;;AAEA;GACG,YAAY;GACZ,WAAW;GACX,kCAAkC;GAClC,qBAAqB;AACxB;;AAEA;GACG,UAAU;GACV,WAAW;GACX,eAAe;AAClB\",\"sourcesContent\":[\".tile {\\n   background:navy;\\n   color:white;\\n   padding:5px;\\n   border:2px solid black;\\n}\\n \\n.mainGrid {\\n   display:grid;\\n   padding:2px;\\n   grid-template-columns: 1fr 1fr 1fr;\\n   grid-auto-rows: 250px;\\n}\\n\\n.srcImage { \\n   width:100%;\\n   height:100%;\\n   max-height:30px;\\n}\\n\\n\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"tile\": \"styles_tile__2-Tnh\",\n\t\"mainGrid\": \"styles_mainGrid__1HDYl\",\n\t\"srcImage\": \"styles_srcImage__3mKRB\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3N0eWxlcy5tb2R1bGUuY3NzPzFiZTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxpSEFBc0Q7QUFDaEc7QUFDQTtBQUNBLCtEQUErRCxxQkFBcUIsaUJBQWlCLGlCQUFpQiw0QkFBNEIsR0FBRyw4QkFBOEIsa0JBQWtCLGlCQUFpQix3Q0FBd0MsMkJBQTJCLEdBQUcsNkJBQTZCLGlCQUFpQixpQkFBaUIscUJBQXFCLEdBQUcsYUFBYSx5RkFBeUYsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsaUNBQWlDLHFCQUFxQixpQkFBaUIsaUJBQWlCLDRCQUE0QixHQUFHLGdCQUFnQixrQkFBa0IsaUJBQWlCLHdDQUF3QywyQkFBMkIsR0FBRyxlQUFlLGlCQUFpQixpQkFBaUIscUJBQXFCLEdBQUcseUJBQXlCO0FBQ3g3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzJdIS4vc3R5bGVzL3N0eWxlcy5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0eWxlc190aWxlX18yLVRuaCB7XFxuICAgYmFja2dyb3VuZDpuYXZ5O1xcbiAgIGNvbG9yOndoaXRlO1xcbiAgIHBhZGRpbmc6NXB4O1xcbiAgIGJvcmRlcjoycHggc29saWQgYmxhY2s7XFxufVxcbiBcXG4uc3R5bGVzX21haW5HcmlkX18xSERZbCB7XFxuICAgZGlzcGxheTpncmlkO1xcbiAgIHBhZGRpbmc6MnB4O1xcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgZ3JpZC1hdXRvLXJvd3M6IDI1MHB4O1xcbn1cXG5cXG4uc3R5bGVzX3NyY0ltYWdlX18zbUtSQiB7IFxcbiAgIHdpZHRoOjEwMCU7XFxuICAgaGVpZ2h0OjEwMCU7XFxuICAgbWF4LWhlaWdodDozMHB4O1xcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL3N0eWxlcy5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0dBQ0csZUFBZTtHQUNmLFdBQVc7R0FDWCxXQUFXO0dBQ1gsc0JBQXNCO0FBQ3pCOztBQUVBO0dBQ0csWUFBWTtHQUNaLFdBQVc7R0FDWCxrQ0FBa0M7R0FDbEMscUJBQXFCO0FBQ3hCOztBQUVBO0dBQ0csVUFBVTtHQUNWLFdBQVc7R0FDWCxlQUFlO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50aWxlIHtcXG4gICBiYWNrZ3JvdW5kOm5hdnk7XFxuICAgY29sb3I6d2hpdGU7XFxuICAgcGFkZGluZzo1cHg7XFxuICAgYm9yZGVyOjJweCBzb2xpZCBibGFjaztcXG59XFxuIFxcbi5tYWluR3JpZCB7XFxuICAgZGlzcGxheTpncmlkO1xcbiAgIHBhZGRpbmc6MnB4O1xcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgZ3JpZC1hdXRvLXJvd3M6IDI1MHB4O1xcbn1cXG5cXG4uc3JjSW1hZ2UgeyBcXG4gICB3aWR0aDoxMDAlO1xcbiAgIGhlaWdodDoxMDAlO1xcbiAgIG1heC1oZWlnaHQ6MzBweDtcXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwidGlsZVwiOiBcInN0eWxlc190aWxlX18yLVRuaFwiLFxuXHRcIm1haW5HcmlkXCI6IFwic3R5bGVzX21haW5HcmlkX18xSERZbFwiLFxuXHRcInNyY0ltYWdlXCI6IFwic3R5bGVzX3NyY0ltYWdlX18zbUtSQlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/styles.module.css\n");

/***/ })

}]);