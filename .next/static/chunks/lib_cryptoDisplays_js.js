/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["lib_cryptoDisplays_js"],{

/***/ "./lib/cryptoDisplays.js":
/*!*******************************!*\
  !*** ./lib/cryptoDisplays.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ displayCurrentCryptos; },\n/* harmony export */   \"getCryptosInfo\": function() { return /* binding */ getCryptosInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/styles.module.css */ \"./styles/styles.module.css\");\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_sparklines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-sparklines */ \"./node_modules/react-sparklines/build/index.js\");\n/* harmony import */ var react_sparklines__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_sparklines__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/kevinperalta/Documents/SUMMERPROJ/PDP2021crypto/lib/cryptoDisplays.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar fetcher = function fetcher(url) {\n  return fetch(url).then(function (res) {\n    return res.json();\n  });\n};\n\nvar apiCALL = \"https://pdp-2021crypto.vercel.app/api/getCryptoInfo?params=\";\nfunction displayCurrentCryptos() {\n  var _this = this;\n\n  var pairs = grabLCLStorageCryptos();\n  var allCryptosMetadata = {};\n  allCryptosMetadata = getCryptosInfo(pairs, true); //w/o priceInterv param, defaults to 1d\n  //is this the best way to approach this?\n\n  if (allCryptosMetadata === null) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: \"\\\"loading...\\\"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }, this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainGrid),\n      children: pairs.map(function (aCrypto, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().tile),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            align: \"top\",\n            className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().srcImage),\n            src: allCryptosMetadata[index][\"logo_url\"]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 6\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"cryptoDetailed/\" + aCrypto,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              children: aCrypto\n            }, aCrypto, false, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 5\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 9\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\"Price: \", allCryptosMetadata[index][\"price\"]]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 7\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\" Volume:\", allCryptosMetadata[index][\"1d\"][\"volume\"]]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 7\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sparklines__WEBPACK_IMPORTED_MODULE_4__.Sparklines, {\n            data: allCryptosMetadata[index][\"prices\"],\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sparklines__WEBPACK_IMPORTED_MODULE_4__.SparklinesLine, {\n              color: \"white\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 5\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sparklines__WEBPACK_IMPORTED_MODULE_4__.SparklinesReferenceLine, {\n              type: \"mean\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 5\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sparklines__WEBPACK_IMPORTED_MODULE_4__.SparklinesSpots, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 5\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 8\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 4\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 2\n    }, this);\n  }\n}\nfunction getCryptosInfo(query) {\n  _s();\n\n  var doGetPricehist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  var priceInterv = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"1d\";\n  var call = apiCALL;\n\n  for (var index in query) {\n    if (+index + +1 !== query.length) call += query[index] + \",\";else call += query[index];\n  }\n\n  if (doGetPricehist) call += \"&priceHist=true\";\n  call += \"&priceInterv=\" + priceInterv; //send regardless? \n\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_1__.default)(call, fetcher),\n      data = _useSWR.data,\n      error = _useSWR.error;\n\n  if (!data) {\n    console.log(\"wait...\");\n    return null;\n  }\n\n  console.log(\"final data: \" + data);\n  return data;\n}\n\n_s(getCryptosInfo, \"PLUSh3GLacfZJClYQJks7Deieck=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_1__.default];\n});\n\nfunction grabLCLStorageCryptos() {\n  try {\n    return JSON.parse(localStorage.getItem(\"myCryptos\"))[\"cryptos\"].sort();\n  } catch (error) {\n    localStorage.setItem('myCryptos', JSON.stringify({\n      \"cryptos\": [\"btc\", \"eth\", \"bat\", \"usdt\", \"doge\", \"xrp\"]\n    }));\n    return JSON.parse(localStorage.getItem(\"myCryptos\"))[\"cryptos\"].sort();\n  }\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NyeXB0b0Rpc3BsYXlzLmpzPzE2NWIiXSwibmFtZXMiOlsiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJhcGlDQUxMIiwiZGlzcGxheUN1cnJlbnRDcnlwdG9zIiwicGFpcnMiLCJncmFiTENMU3RvcmFnZUNyeXB0b3MiLCJhbGxDcnlwdG9zTWV0YWRhdGEiLCJnZXRDcnlwdG9zSW5mbyIsIm15U3R5bGVzIiwibWFwIiwiYUNyeXB0byIsImluZGV4IiwicXVlcnkiLCJkb0dldFByaWNlaGlzdCIsInByaWNlSW50ZXJ2IiwiY2FsbCIsImxlbmd0aCIsInVzZVNXUiIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic29ydCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUFDLEdBQUc7QUFBQSxTQUFJQyxLQUFLLENBQUNELEdBQUQsQ0FBTCxDQUFXRSxJQUFYLENBQWdCLFVBQUFDLEdBQUc7QUFBQSxXQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLEdBQW5CLENBQUo7QUFBQSxDQUFuQjs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsNkRBQWhCO0FBR2UsU0FBU0MscUJBQVQsR0FBaUM7QUFBQTs7QUFDN0MsTUFBSUMsS0FBSyxHQUFHQyxxQkFBcUIsRUFBakM7QUFDQSxNQUFJQyxrQkFBa0IsR0FBRyxFQUF6QjtBQUNBQSxvQkFBa0IsR0FBR0MsY0FBYyxDQUFDSCxLQUFELEVBQVEsSUFBUixDQUFuQyxDQUg2QyxDQUdJO0FBQ2pEOztBQUNBLE1BQUdFLGtCQUFrQixLQUFLLElBQTFCLEVBQStCO0FBQ2pDLHdCQUFPO0FBQUE7QUFBQTtB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QThDLFNBQTlDLEVBQXlEQyxJQUF6RCxFQUFQO0FBQ0EsR0FGRCxDQUVFLE9BQU1QLEtBQU4sRUFBYTtBQUNkSyxnQkFBWSxDQUFDRyxPQUFiLENBQXFCLFdBQXJCLEVBQytCTCxJQUFJLENBQUNNLFNBQUwsQ0FBZTtBQUFDLGlCQUFXLENBQUMsS0FBRCxFQUFPLEtBQVAsRUFBYSxLQUFiLEVBQ1YsTUFEVSxFQUNGLE1BREUsRUFDTSxLQUROO0FBQVosS0FBZixDQUQvQjtBQUdBLFdBQU9OLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsV0FBckIsQ0FBWCxFQUE4QyxTQUE5QyxFQUF5REMsSUFBekQsRUFBUDtBQUNBO0FBRUQiLCJmaWxlIjoiLi9saWIvY3J5cHRvRGlzcGxheXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSLCB7bXV0YXRlfSBmcm9tICdzd3InXG5pbXBvcnQgbXlTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3N0eWxlcy5tb2R1bGUuY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IHsgU3BhcmtsaW5lcywgU3BhcmtsaW5lc1JlZmVyZW5jZUxpbmUsIFNwYXJrbGluZXNMaW5lLCBTcGFya2xpbmVzU3BvdHMgfSBmcm9tICdyZWFjdC1zcGFya2xpbmVzJ1xuY29uc3QgZmV0Y2hlciA9IHVybCA9PiBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuY29uc3QgYXBpQ0FMTCA9IFwiaHR0cHM6Ly9wZHAtMjAyMWNyeXB0by52ZXJjZWwuYXBwL2FwaS9nZXRDcnlwdG9JbmZvP3BhcmFtcz1cIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50Q3J5cHRvcygpIHtcbiAgIHZhciBwYWlycyA9IGdyYWJMQ0xTdG9yYWdlQ3J5cHRvcygpXG4gICB2YXIgYWxsQ3J5cHRvc01ldGFkYXRhID0ge31cbiAgIGFsbENyeXB0b3NNZXRhZGF0YSA9IGdldENyeXB0b3NJbmZvKHBhaXJzLCB0cnVlKSAvL3cvbyBwcmljZUludGVydiBwYXJhbSwgZGVmYXVsdHMgdG8gMWRcbiAgIC8vaXMgdGhpcyB0aGUgYmVzdCB3YXkgdG8gYXBwcm9hY2ggdGhpcz9cbiAgIGlmKGFsbENyeXB0b3NNZXRhZGF0YSA9PT0gbnVsbCl7XG5cdHJldHVybiA8cD5cImxvYWRpbmcuLi5cIjwvcD5cbiAgIH1cbiAgIGVsc2VcbiAgIHtcbiAgIHJldHVybiAoXG5cdDxkaXYgY2xhc3NOYW1lID0ge215U3R5bGVzLm1haW5HcmlkfT5cblx0XHR7cGFpcnMubWFwKChhQ3J5cHRvLGluZGV4KSA9PiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IHtteVN0eWxlcy50aWxlfT5cblx0XHRcdCAgPGltZyBhbGlnbj1cInRvcFwiIGNsYXNzTmFtZSA9IHtteVN0eWxlcy5zcmNJbWFnZX1zcmMgPSB7YWxsQ3J5cHRvc01ldGFkYXRhW2luZGV4XVtcImxvZ29fdXJsXCJdfT48L2ltZz5cbiAgXHRcdFx0ICAgPExpbmsga2V5PXtpbmRleH1ocmVmID0ge1wiY3J5cHRvRGV0YWlsZWQvXCIgKyBhQ3J5cHRvfT5cblx0XHRcdFx0PGEga2V5PXthQ3J5cHRvfSAgPnthQ3J5cHRvfTwvYT5cblx0XHRcdCAgIDwvTGluaz5cblx0XHRcdCAgIDxkaXY+UHJpY2U6IHthbGxDcnlwdG9zTWV0YWRhdGFbaW5kZXhdW1wicHJpY2VcIl19PC9kaXY+XG5cdFx0XHQgICA8ZGl2PiBWb2x1bWU6e2FsbENyeXB0b3NNZXRhZGF0YVtpbmRleF1bXCIxZFwiXVtcInZvbHVtZVwiXX08L2Rpdj5cblx0XHRcdCAgICA8U3BhcmtsaW5lcyBkYXRhPXthbGxDcnlwdG9zTWV0YWRhdGFbaW5kZXhdW1wicHJpY2VzXCJdfSA+XG5cdFx0XHRcdDxTcGFya2xpbmVzTGluZSBjb2xvcj1cIndoaXRlXCIvPlxuXHRcdFx0XHQ8U3BhcmtsaW5lc1JlZmVyZW5jZUxpbmUgdHlwZT1cIm1lYW5cIi8+XG5cdFx0XHRcdDxTcGFya2xpbmVzU3BvdHMvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFya2xpbmVzPlxuXHRcdFx0PC9kaXY+XG5cdFx0KSl9XHRcblx0PC9kaXY+XHRcdFx0XG4gICApXG4gICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENyeXB0b3NJbmZvKHF1ZXJ5LCBkb0dldFByaWNlaGlzdD1mYWxzZSwgcHJpY2VJbnRlcnY9XCIxZFwiKVxueyAgICBcbiAgICB2YXIgY2FsbCA9IGFwaUNBTExcbiAgICBmb3IodmFyIGluZGV4IGluIHF1ZXJ5KVxuICAgIHtcbiBcdGlmKCtpbmRleCArICsxICE9PSBxdWVyeS5sZW5ndGgpIGNhbGwgKz0gcXVlcnlbaW5kZXhdICsgXCIsXCI7XG4gICAgICAgIGVsc2UgY2FsbCArPSBxdWVyeVtpbmRleF1cbiAgICB9XG4gICBcbiAgICBpZiAoZG9HZXRQcmljZWhpc3QpIGNhbGwgKz0gXCImcHJpY2VIaXN0PXRydWVcIlxuICAgIGNhbGwgKz0gXCImcHJpY2VJbnRlcnY9XCIgKyBwcmljZUludGVydiAvL3NlbmQgcmVnYXJkbGVzcz8gXG4gICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUihjYWxsLCBmZXRjaGVyKVxuICAgIGlmKCFkYXRhKSB7IFxuICAgICAgIGNvbnNvbGUubG9nKFwid2FpdC4uLlwiKVxuICAgICAgIHJldHVybiBudWxsXG4gICAgfSBcbiAgICBjb25zb2xlLmxvZyhcImZpbmFsIGRhdGE6IFwiICsgZGF0YSlcbiAgICByZXR1cm4gZGF0YVxufVxuXG5mdW5jdGlvbiBncmFiTENMU3RvcmFnZUNyeXB0b3MoKVxue1xuXHR0cnkge1xuXHRcdHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXlDcnlwdG9zXCIpKVtcImNyeXB0b3NcIl0uc29ydCgpXG5cdH0gY2F0Y2goZXJyb3IpIHtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlDcnlwdG9zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcImNyeXB0b3NcIjogW1wiYnRjXCIsXCJldGhcIixcImJhdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVzZHRcIiwgXCJkb2dlXCIsIFwieHJwXCJdfSkpXG5cdFx0cmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJteUNyeXB0b3NcIikpW1wiY3J5cHRvc1wiXS5zb3J0KClcblx0fVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/cryptoDisplays.js\n");

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

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".styles_tile__2-Tnh {\\n   background:navy;\\n   color:white;\\n   padding:5px;\\n   border:2px solid black;\\n}\\n \\n.styles_mainGrid__1HDYl {\\n   display:grid;\\n   padding:2px;\\n   grid-template-columns: 1fr 1fr 1fr;\\n   grid-auto-rows: 250px;\\n}\\n\\n.styles_srcImage__3mKRB {\\n    max-height:45px;\\n    margin-left:auto;\\n    margin-right:auto;\\n}\\n\\n.styles_side__CVvZs {\\n   border:2px solid black;\\n   color:white;\\n}\\n\\n\\n.styles_mainContent__2xkR9{\\n   background:navy;\\n   display:grid;\\n   grid-template-columns:70% 30%;\\n   height:500px;\\n   padding:5px;\\n}\\n\\n.styles_mainBar__1pTdS img {\\n   float:left;\\n   height: 7%;\\n   width: 7%;\\n   vertical-align:middle;\\n   position:relative;\\n}\\n\\n.styles_mainBar__1pTdS {\\n    background:navy;\\n    align-items:center;\\n    display:flex;\\n    border:2px solid black;\\n}\\n\\n.styles_mainBar__1pTdS h1 {\\n   background:navy;\\n   padding-left:10px;\\n   font-size:3vw;\\n   color:white;\\n   white-space:nowrap;\\n}\\n\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/styles.module.css\"],\"names\":[],\"mappings\":\"AAAA;GACG,eAAe;GACf,WAAW;GACX,WAAW;GACX,sBAAsB;AACzB;;AAEA;GACG,YAAY;GACZ,WAAW;GACX,kCAAkC;GAClC,qBAAqB;AACxB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;GACG,sBAAsB;GACtB,WAAW;AACd;;;AAGA;GACG,eAAe;GACf,YAAY;GACZ,6BAA6B;GAC7B,YAAY;GACZ,WAAW;AACd;;AAEA;GACG,UAAU;GACV,UAAU;GACV,SAAS;GACT,qBAAqB;GACrB,iBAAiB;AACpB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;GACG,eAAe;GACf,iBAAiB;GACjB,aAAa;GACb,WAAW;GACX,kBAAkB;AACrB\",\"sourcesContent\":[\".tile {\\n   background:navy;\\n   color:white;\\n   padding:5px;\\n   border:2px solid black;\\n}\\n \\n.mainGrid {\\n   display:grid;\\n   padding:2px;\\n   grid-template-columns: 1fr 1fr 1fr;\\n   grid-auto-rows: 250px;\\n}\\n\\n.srcImage {\\n    max-height:45px;\\n    margin-left:auto;\\n    margin-right:auto;\\n}\\n\\n.side {\\n   border:2px solid black;\\n   color:white;\\n}\\n\\n\\n.mainContent{\\n   background:navy;\\n   display:grid;\\n   grid-template-columns:70% 30%;\\n   height:500px;\\n   padding:5px;\\n}\\n\\n.mainBar img {\\n   float:left;\\n   height: 7%;\\n   width: 7%;\\n   vertical-align:middle;\\n   position:relative;\\n}\\n\\n.mainBar {\\n    background:navy;\\n    align-items:center;\\n    display:flex;\\n    border:2px solid black;\\n}\\n\\n.mainBar h1 {\\n   background:navy;\\n   padding-left:10px;\\n   font-size:3vw;\\n   color:white;\\n   white-space:nowrap;\\n}\\n\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"tile\": \"styles_tile__2-Tnh\",\n\t\"mainGrid\": \"styles_mainGrid__1HDYl\",\n\t\"srcImage\": \"styles_srcImage__3mKRB\",\n\t\"side\": \"styles_side__CVvZs\",\n\t\"mainContent\": \"styles_mainContent__2xkR9\",\n\t\"mainBar\": \"styles_mainBar__1pTdS\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3N0eWxlcy5tb2R1bGUuY3NzPzFiZTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxpSEFBc0Q7QUFDaEc7QUFDQTtBQUNBLCtEQUErRCxxQkFBcUIsaUJBQWlCLGlCQUFpQiw0QkFBNEIsR0FBRyw4QkFBOEIsa0JBQWtCLGlCQUFpQix3Q0FBd0MsMkJBQTJCLEdBQUcsNkJBQTZCLHNCQUFzQix1QkFBdUIsd0JBQXdCLEdBQUcseUJBQXlCLDRCQUE0QixpQkFBaUIsR0FBRyxpQ0FBaUMscUJBQXFCLGtCQUFrQixtQ0FBbUMsa0JBQWtCLGlCQUFpQixHQUFHLGdDQUFnQyxnQkFBZ0IsZ0JBQWdCLGVBQWUsMkJBQTJCLHVCQUF1QixHQUFHLDRCQUE0QixzQkFBc0IseUJBQXlCLG1CQUFtQiw2QkFBNkIsR0FBRywrQkFBK0IscUJBQXFCLHVCQUF1QixtQkFBbUIsaUJBQWlCLHdCQUF3QixHQUFHLFdBQVcseUZBQXlGLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksaUNBQWlDLHFCQUFxQixpQkFBaUIsaUJBQWlCLDRCQUE0QixHQUFHLGdCQUFnQixrQkFBa0IsaUJBQWlCLHdDQUF3QywyQkFBMkIsR0FBRyxlQUFlLHNCQUFzQix1QkFBdUIsd0JBQXdCLEdBQUcsV0FBVyw0QkFBNEIsaUJBQWlCLEdBQUcsbUJBQW1CLHFCQUFxQixrQkFBa0IsbUNBQW1DLGtCQUFrQixpQkFBaUIsR0FBRyxrQkFBa0IsZ0JBQWdCLGdCQUFnQixlQUFlLDJCQUEyQix1QkFBdUIsR0FBRyxjQUFjLHNCQUFzQix5QkFBeUIsbUJBQW1CLDZCQUE2QixHQUFHLGlCQUFpQixxQkFBcUIsdUJBQXVCLG1CQUFtQixpQkFBaUIsd0JBQXdCLEdBQUcsdUJBQXVCO0FBQzczRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzJdIS4vc3R5bGVzL3N0eWxlcy5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0eWxlc190aWxlX18yLVRuaCB7XFxuICAgYmFja2dyb3VuZDpuYXZ5O1xcbiAgIGNvbG9yOndoaXRlO1xcbiAgIHBhZGRpbmc6NXB4O1xcbiAgIGJvcmRlcjoycHggc29saWQgYmxhY2s7XFxufVxcbiBcXG4uc3R5bGVzX21haW5HcmlkX18xSERZbCB7XFxuICAgZGlzcGxheTpncmlkO1xcbiAgIHBhZGRpbmc6MnB4O1xcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgZ3JpZC1hdXRvLXJvd3M6IDI1MHB4O1xcbn1cXG5cXG4uc3R5bGVzX3NyY0ltYWdlX18zbUtSQiB7XFxuICAgIG1heC1oZWlnaHQ6NDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XFxufVxcblxcbi5zdHlsZXNfc2lkZV9fQ1Z2WnMge1xcbiAgIGJvcmRlcjoycHggc29saWQgYmxhY2s7XFxuICAgY29sb3I6d2hpdGU7XFxufVxcblxcblxcbi5zdHlsZXNfbWFpbkNvbnRlbnRfXzJ4a1I5e1xcbiAgIGJhY2tncm91bmQ6bmF2eTtcXG4gICBkaXNwbGF5OmdyaWQ7XFxuICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjcwJSAzMCU7XFxuICAgaGVpZ2h0OjUwMHB4O1xcbiAgIHBhZGRpbmc6NXB4O1xcbn1cXG5cXG4uc3R5bGVzX21haW5CYXJfXzFwVGRTIGltZyB7XFxuICAgZmxvYXQ6bGVmdDtcXG4gICBoZWlnaHQ6IDclO1xcbiAgIHdpZHRoOiA3JTtcXG4gICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XFxuICAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcblxcbi5zdHlsZXNfbWFpbkJhcl9fMXBUZFMge1xcbiAgICBiYWNrZ3JvdW5kOm5hdnk7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBib3JkZXI6MnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc3R5bGVzX21haW5CYXJfXzFwVGRTIGgxIHtcXG4gICBiYWNrZ3JvdW5kOm5hdnk7XFxuICAgcGFkZGluZy1sZWZ0OjEwcHg7XFxuICAgZm9udC1zaXplOjN2dztcXG4gICBjb2xvcjp3aGl0ZTtcXG4gICB3aGl0ZS1zcGFjZTpub3dyYXA7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvc3R5bGVzLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7R0FDRyxlQUFlO0dBQ2YsV0FBVztHQUNYLFdBQVc7R0FDWCxzQkFBc0I7QUFDekI7O0FBRUE7R0FDRyxZQUFZO0dBQ1osV0FBVztHQUNYLGtDQUFrQztHQUNsQyxxQkFBcUI7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtHQUNHLHNCQUFzQjtHQUN0QixXQUFXO0FBQ2Q7OztBQUdBO0dBQ0csZUFBZTtHQUNmLFlBQVk7R0FDWiw2QkFBNkI7R0FDN0IsWUFBWTtHQUNaLFdBQVc7QUFDZDs7QUFFQTtHQUNHLFVBQVU7R0FDVixVQUFVO0dBQ1YsU0FBUztHQUNULHFCQUFxQjtHQUNyQixpQkFBaUI7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7R0FDRyxlQUFlO0dBQ2YsaUJBQWlCO0dBQ2pCLGFBQWE7R0FDYixXQUFXO0dBQ1gsa0JBQWtCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50aWxlIHtcXG4gICBiYWNrZ3JvdW5kOm5hdnk7XFxuICAgY29sb3I6d2hpdGU7XFxuICAgcGFkZGluZzo1cHg7XFxuICAgYm9yZGVyOjJweCBzb2xpZCBibGFjaztcXG59XFxuIFxcbi5tYWluR3JpZCB7XFxuICAgZGlzcGxheTpncmlkO1xcbiAgIHBhZGRpbmc6MnB4O1xcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgZ3JpZC1hdXRvLXJvd3M6IDI1MHB4O1xcbn1cXG5cXG4uc3JjSW1hZ2Uge1xcbiAgICBtYXgtaGVpZ2h0OjQ1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XFxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xcbn1cXG5cXG4uc2lkZSB7XFxuICAgYm9yZGVyOjJweCBzb2xpZCBibGFjaztcXG4gICBjb2xvcjp3aGl0ZTtcXG59XFxuXFxuXFxuLm1haW5Db250ZW50e1xcbiAgIGJhY2tncm91bmQ6bmF2eTtcXG4gICBkaXNwbGF5OmdyaWQ7XFxuICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjcwJSAzMCU7XFxuICAgaGVpZ2h0OjUwMHB4O1xcbiAgIHBhZGRpbmc6NXB4O1xcbn1cXG5cXG4ubWFpbkJhciBpbWcge1xcbiAgIGZsb2F0OmxlZnQ7XFxuICAgaGVpZ2h0OiA3JTtcXG4gICB3aWR0aDogNyU7XFxuICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xcbiAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG5cXG4ubWFpbkJhciB7XFxuICAgIGJhY2tncm91bmQ6bmF2eTtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGJvcmRlcjoycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5tYWluQmFyIGgxIHtcXG4gICBiYWNrZ3JvdW5kOm5hdnk7XFxuICAgcGFkZGluZy1sZWZ0OjEwcHg7XFxuICAgZm9udC1zaXplOjN2dztcXG4gICBjb2xvcjp3aGl0ZTtcXG4gICB3aGl0ZS1zcGFjZTpub3dyYXA7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInRpbGVcIjogXCJzdHlsZXNfdGlsZV9fMi1UbmhcIixcblx0XCJtYWluR3JpZFwiOiBcInN0eWxlc19tYWluR3JpZF9fMUhEWWxcIixcblx0XCJzcmNJbWFnZVwiOiBcInN0eWxlc19zcmNJbWFnZV9fM21LUkJcIixcblx0XCJzaWRlXCI6IFwic3R5bGVzX3NpZGVfX0NWdlpzXCIsXG5cdFwibWFpbkNvbnRlbnRcIjogXCJzdHlsZXNfbWFpbkNvbnRlbnRfXzJ4a1I5XCIsXG5cdFwibWFpbkJhclwiOiBcInN0eWxlc19tYWluQmFyX18xcFRkU1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/styles.module.css\n");

/***/ })

}]);