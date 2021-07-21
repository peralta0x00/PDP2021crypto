/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("lib_cryptoDisplays_js",{

/***/ "./lib/cryptoDisplays.js":
/*!*******************************!*\
  !*** ./lib/cryptoDisplays.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ displayCurrentCryptos; },\n/* harmony export */   \"getCryptosInfo\": function() { return /* binding */ getCryptosInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/styles.module.css */ \"./styles/styles.module.css\");\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_sparklines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-sparklines */ \"./node_modules/react-sparklines/build/index.js\");\n/* harmony import */ var react_sparklines__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_sparklines__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/kevinperalta/Documents/SUMMERPROJ/PDP2021crypto/lib/cryptoDisplays.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar fetcher = function fetcher(url) {\n  return fetch(url).then(function (res) {\n    return res.json();\n  });\n};\n\nvar apiCALL = \"https://pdp-2021crypto.vercel.app/api/getCryptoInfo?params=\";\nfunction displayCurrentCryptos() {\n  var _this = this;\n\n  var pairs = grabLCLStorageCryptos();\n  var allCryptosMetadata = {};\n  allCryptosMetadata = getCryptosInfo(pairs, true); //w/o priceInterv param, defaults to 1d\n  //is this the best way to approach this?\n\n  if (allCryptosMetadata === null) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: \"\\\"loading...\\\"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }, this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainGrid),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 27\n      }, this), pairs.map(function (aCrypto, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().tile),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            align: \"top\",\n            className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().srcImage),\n            src: allCryptosMetadata[index][\"logo_url\"]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 6\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"cryptoDetailed/\" + aCrypto,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              children: aCrypto\n            }, aCrypto, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 5\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 9\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\"Price: \", allCryptosMetadata[index][\"price\"]]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 7\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\" Volume:\", allCryptosMetadata[index][\"1d\"][\"volume\"]]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 7\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sparklines__WEBPACK_IMPORTED_MODULE_4__.Sparklines, {\n            data: allCryptosMetadata[index][\"prices\"],\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sparklines__WEBPACK_IMPORTED_MODULE_4__.SparklinesLine, {\n              color: \"white\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 5\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sparklines__WEBPACK_IMPORTED_MODULE_4__.SparklinesReferenceLine, {\n              type: \"mean\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 5\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sparklines__WEBPACK_IMPORTED_MODULE_4__.SparklinesSpots, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 5\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 8\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 4\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 2\n    }, this);\n  }\n}\nfunction getCryptosInfo(query) {\n  _s();\n\n  var doGetPricehist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  var priceInterv = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"1d\";\n  var call = apiCALL;\n\n  for (var index in query) {\n    if (+index + +1 !== query.length) call += query[index] + \",\";else call += query[index];\n  }\n\n  if (doGetPricehist) call += \"&priceHist=true\";\n  call += \"&priceInterv=\" + priceInterv; //send regardless? \n\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_1__.default)(call, fetcher),\n      data = _useSWR.data,\n      error = _useSWR.error;\n\n  if (!data) {\n    console.log(\"wait...\");\n    return null;\n  }\n\n  console.log(\"final data: \" + data);\n  return data;\n}\n\n_s(getCryptosInfo, \"PLUSh3GLacfZJClYQJks7Deieck=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_1__.default];\n});\n\nfunction grabLCLStorageCryptos() {\n  try {\n    return JSON.parse(localStorage.getItem(\"myCryptos\"))[\"cryptos\"].sort();\n  } catch (error) {\n    localStorage.setItem('myCryptos', JSON.stringify({\n      \"cryptos\": [\"btc\", \"eth\", \"bat\", \"usdt\", \"doge\", \"xrp\"]\n    }));\n    return JSON.parse(localStorage.getItem(\"myCryptos\"))[\"cryptos\"].sort();\n  }\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NyeXB0b0Rpc3BsYXlzLmpzPzE2NWIiXSwibmFtZXMiOlsiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJhcGlDQUxMIiwiZGlzcGxheUN1cnJlbnRDcnlwdG9zIiwicGFpcnMiLCJncmFiTENMU3RvcmFnZUNyeXB0b3MiLCJhbGxDcnlwdG9zTWV0YWRhdGEiLCJnZXRDcnlwdG9zSW5mbyIsIm15U3R5bGVzIiwibWFwIiwiYUNyeXB0byIsImluZGV4IiwicXVlcnkiLCJkb0dldFByaWNlaGlzdCIsInByaWNlSW50ZXJ2IiwiY2FsbCIsImxlbmd0aCIsInVzZVNXUiIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic29ydCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUFDLEdBQUc7QUFBQSxTQUFJQyxLQUFLLENBQUNELEdBQUQsQ0FBTCxDQUFXRSxJQUFYLENBQWdCLFVBQUFDLEdBQUc7QUFBQSxXQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLEdBQW5CLENBQUo7QUFBQSxDQUFuQjs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsNkRBQWhCO0FBR2UsU0FBU0MscUJBQVQsR0FBaUM7QUFBQTs7QUFDN0MsTUFBSUMsS0FBSyxHQUFHQyxxQkFBcUIsRUFBakM7QUFDQSxNQUFJQyxrQkFBa0IsR0FBRyxFQUF6QjtBQUNBQSxvQkFBa0IsR0FBR0MsY0FBYyxDQUFDSCxLQUFELEVBQVEsSUFBUixDQUFuQyxDQUg2QyxDQUdJO0FBQ2pEOztBQUNBLE1BQUdFLGtCQUFrQixLQUFLLElBQTFCLEVBQStCO0FBQ2pDLHdCQUFPO0FBQUE7QUFBQTtB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QUFDQyxNQUFJO0FBQ0gsV0FBT2lCLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsV0FBckIsQ0FBWCxFQUE4QyxTQUE5QyxFQUF5REMsSUFBekQsRUFBUDtBQUNBLEdBRkQsQ0FFRSxPQUFNUCxLQUFOLEVBQWE7QUFDZEssZ0JBQVksQ0FBQ0csT0FBYixDQUFxQixXQUFyQixFQUMrQkwsSUFBSSxDQUFDTSxTQUFMLENBQWU7QUFBQyxpQkFBVyxDQUFDLEtBQUQsRUFBTyxLQUFQLEVBQWEsS0FBYixFQUNWLE1BRFUsRUFDRixNQURFLEVBQ00sS0FETjtBQUFaLEtBQWYsQ0FEL0I7QUFHQSxXQUFPTixJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFdBQXJCLENBQVgsRUFBOEMsU0FBOUMsRUFBeURDLElBQXpELEVBQVA7QUFDQTtBQUVEIiwiZmlsZSI6Ii4vbGliL2NyeXB0b0Rpc3BsYXlzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiwge211dGF0ZX0gZnJvbSAnc3dyJ1xuaW1wb3J0IG15U3R5bGVzIGZyb20gJy4uL3N0eWxlcy9zdHlsZXMubW9kdWxlLmNzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCB7IFNwYXJrbGluZXMsIFNwYXJrbGluZXNSZWZlcmVuY2VMaW5lLCBTcGFya2xpbmVzTGluZSwgU3BhcmtsaW5lc1Nwb3RzIH0gZnJvbSAncmVhY3Qtc3BhcmtsaW5lcydcbmNvbnN0IGZldGNoZXIgPSB1cmwgPT4gZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcbmNvbnN0IGFwaUNBTEwgPSBcImh0dHBzOi8vcGRwLTIwMjFjcnlwdG8udmVyY2VsLmFwcC9hcGkvZ2V0Q3J5cHRvSW5mbz9wYXJhbXM9XCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5Q3VycmVudENyeXB0b3MoKSB7XG4gICB2YXIgcGFpcnMgPSBncmFiTENMU3RvcmFnZUNyeXB0b3MoKVxuICAgdmFyIGFsbENyeXB0b3NNZXRhZGF0YSA9IHt9XG4gICBhbGxDcnlwdG9zTWV0YWRhdGEgPSBnZXRDcnlwdG9zSW5mbyhwYWlycywgdHJ1ZSkgLy93L28gcHJpY2VJbnRlcnYgcGFyYW0sIGRlZmF1bHRzIHRvIDFkXG4gICAvL2lzIHRoaXMgdGhlIGJlc3Qgd2F5IHRvIGFwcHJvYWNoIHRoaXM/XG4gICBpZihhbGxDcnlwdG9zTWV0YWRhdGEgPT09IG51bGwpe1xuXHRyZXR1cm4gPHA+XCJsb2FkaW5nLi4uXCI8L3A+XG4gICB9XG4gICBlbHNlXG4gICB7XG4gICByZXR1cm4gKFxuXG5cdDxkaXYgY2xhc3NOYW1lID0ge215U3R5bGVzLm1haW5HcmlkfT5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIi8+XG5cblx0XHR7cGFpcnMubWFwKChhQ3J5cHRvLGluZGV4KSA9PiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IHtteVN0eWxlcy50aWxlfT5cblx0XHRcdCAgPGltZyBhbGlnbj1cInRvcFwiIGNsYXNzTmFtZSA9IHtteVN0eWxlcy5zcmNJbWFnZX1zcmMgPSB7YWxsQ3J5cHRvc01ldGFkYXRhW2luZGV4XVtcImxvZ29fdXJsXCJdfT48L2ltZz5cbiAgXHRcdFx0ICAgPExpbmsga2V5PXtpbmRleH1ocmVmID0ge1wiY3J5cHRvRGV0YWlsZWQvXCIgKyBhQ3J5cHRvfT5cblx0XHRcdFx0PGEga2V5PXthQ3J5cHRvfSAgPnthQ3J5cHRvfTwvYT5cblx0XHRcdCAgIDwvTGluaz5cblx0XHRcdCAgIDxkaXY+UHJpY2U6IHthbGxDcnlwdG9zTWV0YWRhdGFbaW5kZXhdW1wicHJpY2VcIl19PC9kaXY+XG5cdFx0XHQgICA8ZGl2PiBWb2x1bWU6e2FsbENyeXB0b3NNZXRhZGF0YVtpbmRleF1bXCIxZFwiXVtcInZvbHVtZVwiXX08L2Rpdj5cblx0XHRcdCAgICA8U3BhcmtsaW5lcyBkYXRhPXthbGxDcnlwdG9zTWV0YWRhdGFbaW5kZXhdW1wicHJpY2VzXCJdfSA+XG5cdFx0XHRcdDxTcGFya2xpbmVzTGluZSBjb2xvcj1cIndoaXRlXCIvPlxuXHRcdFx0XHQ8U3BhcmtsaW5lc1JlZmVyZW5jZUxpbmUgdHlwZT1cIm1lYW5cIi8+XG5cdFx0XHRcdDxTcGFya2xpbmVzU3BvdHMvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFya2xpbmVzPlxuXHRcdFx0PC9kaXY+XG5cdFx0KSl9XHRcblx0PC9kaXY+XG4gICApXG4gICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENyeXB0b3NJbmZvKHF1ZXJ5LCBkb0dldFByaWNlaGlzdD1mYWxzZSwgcHJpY2VJbnRlcnY9XCIxZFwiKVxueyAgICBcbiAgICB2YXIgY2FsbCA9IGFwaUNBTExcbiAgICBmb3IodmFyIGluZGV4IGluIHF1ZXJ5KVxuICAgIHtcbiBcdGlmKCtpbmRleCArICsxICE9PSBxdWVyeS5sZW5ndGgpIGNhbGwgKz0gcXVlcnlbaW5kZXhdICsgXCIsXCI7XG4gICAgICAgIGVsc2UgY2FsbCArPSBxdWVyeVtpbmRleF1cbiAgICB9XG4gICBcbiAgICBpZiAoZG9HZXRQcmljZWhpc3QpIGNhbGwgKz0gXCImcHJpY2VIaXN0PXRydWVcIlxuICAgIGNhbGwgKz0gXCImcHJpY2VJbnRlcnY9XCIgKyBwcmljZUludGVydiAvL3NlbmQgcmVnYXJkbGVzcz8gXG4gICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUihjYWxsLCBmZXRjaGVyKVxuICAgIGlmKCFkYXRhKSB7IFxuICAgICAgIGNvbnNvbGUubG9nKFwid2FpdC4uLlwiKVxuICAgICAgIHJldHVybiBudWxsXG4gICAgfSBcbiAgICBjb25zb2xlLmxvZyhcImZpbmFsIGRhdGE6IFwiICsgZGF0YSlcbiAgICByZXR1cm4gZGF0YVxufVxuXG5mdW5jdGlvbiBncmFiTENMU3RvcmFnZUNyeXB0b3MoKVxue1xuXHR0cnkge1xuXHRcdHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXlDcnlwdG9zXCIpKVtcImNyeXB0b3NcIl0uc29ydCgpXG5cdH0gY2F0Y2goZXJyb3IpIHtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlDcnlwdG9zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcImNyeXB0b3NcIjogW1wiYnRjXCIsXCJldGhcIixcImJhdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVzZHRcIiwgXCJkb2dlXCIsIFwieHJwXCJdfSkpXG5cdFx0cmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJteUNyeXB0b3NcIikpW1wiY3J5cHRvc1wiXS5zb3J0KClcblx0fVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/cryptoDisplays.js\n");

/***/ })

});