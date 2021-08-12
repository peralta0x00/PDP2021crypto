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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ displayCurrentCryptos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/styles.module.css */ \"./styles/styles.module.css\");\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recharts */ \"./node_modules/recharts/es6/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/kevinperalta/Documents/SUMMERPROJ/PDP2021crypto/lib/cryptoDisplays.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\n\n\n\n\n\n\nfunction displayCurrentCryptos() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      results = _useState[0],\n      setResults = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      search = _useState2[0],\n      setSearch = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(grabLCLStorageCryptos()),\n      pairs = _useState3[0],\n      setPairs = _useState3[1]; //pretty good at refreshing soon\n\n\n  var allCryptosMetadata = getCryptosInfo(pairs);\n\n  var getRelevantCoins = function getRelevantCoins(currSearch) {\n    var search = currSearch.target.value;\n\n    if (search) {\n      //fetch simpler than useswr, as prob dont need to hook onto specific search\n      var data = fetch(\"https://pdp-2021crypto.vercel.app/api/getRelevantCoins?param=\" + search).then(function (res) {\n        return res.json();\n      }).then(function (res) {\n        setResults(res[\"smlrCoins\"]);\n      });\n    } else {\n      //handles emptying searchquery to ''\n      setResults([]);\n    }\n  };\n\n  var addCoinSelection = function addCoinSelection(e) {\n    try {\n      var currStrg = JSON.parse(localStorage.getItem('myCryptos'))[\"cryptos\"];\n\n      if (!currStrg.includes(e.target.innerHTML)) {\n        currStrg.push(e.target.innerHTML);\n        localStorage.setItem('myCryptos', JSON.stringify({\n          \"cryptos\": currStrg\n        }));\n        setPairs(currStrg);\n      } else {\n        alert(\"you already have that!\");\n      }\n    } catch (error) {\n      alert(error);\n    }\n  }; //<div>1D % change: {Math.round(aCrypto[\"1d\"][\"price_change_pct\"]*100*100)/100}</div>  \n\n\n  if (allCryptosMetadata === null) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"\\\"loading...\\\"\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 44\n  }, this);else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().homePage),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"name\",\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().search),\n        placeholder: \"Search for coin tickers...\",\n        autoComplete: \"off\",\n        type: \"text\",\n        onChange: getRelevantCoins\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 3\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\" \", results.map(function (el, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: addCoinSelection,\n            children: el\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 6\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 4\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainGrid),\n        children: allCryptosMetadata.map(function (aCrypto, indx) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: aCrypto[\"id\"],\n            className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().tile),\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n              align: \"top\",\n              className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().srcImage),\n              src: aCrypto[\"logo_url\"]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 7\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n              href: \"cryptoDetailed/\" + aCrypto[\"id\"],\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                children: aCrypto[\"name\"]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 6\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 10\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              children: [aCrypto[\"price\"], /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 67,\n                columnNumber: 31\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 8\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              style: {\n                color: aCrypto[\"price_color\"]\n              },\n              children: [aCrypto[\"1d\"][\"price_change_pct\"], \"%\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 5\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.ResponsiveContainer, {\n              width: \"100%\",\n              height: 130,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.LineChart, {\n                data: aCrypto[\"prices\"],\n                dot: false,\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.Line, {\n                  type: \"monotone\",\n                  dataKey: \"prc\",\n                  stroke: \"white\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 72,\n                  columnNumber: 28\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.XAxis, {\n                  margin: {\n                    top: 10\n                  },\n                  padding: {\n                    right: 15\n                  },\n                  dataKey: \"stmp\",\n                  interval: 6,\n                  stroke: \"#999999\",\n                  angle: -45\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 73,\n                  columnNumber: 30\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.YAxis, {\n                  padding: {\n                    top: 5\n                  },\n                  dx: 8,\n                  stroke: \"#999999\",\n                  interval: 0,\n                  domain: [\"auto\", \"auto\"]\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 74,\n                  columnNumber: 36\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 71,\n                columnNumber: 10\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 9\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              style: {\n                \"font-size\": \"10px\"\n              },\n              children: [\" Volume: \", aCrypto[\"1d\"][\"volume\"], \"B\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 5\n            }, _this)]\n          }, indx, true, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 5\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 4\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 2\n    }, this);\n  }\n} //inspired by https://github.com/vercel/swr/issues/192\n\n_s(displayCurrentCryptos, \"Gy0NUgA1mHWIlxAPioGHyJ/b4yw=\");\n\nfunction useStickyResult(val) {\n  _s2();\n\n  var mutable = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n  if (val !== undefined) mutable.current = val;\n  return mutable.current;\n}\n\n_s2(useStickyResult, \"zp++H2OHZTudVr6LLs5U2nc9bw8=\");\n\nfunction getCryptosInfo(query) {\n  _s3();\n\n  var doGetPricehist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n  var priceInterv = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"1d\";\n  //var call = \"https://pdp-2021crypto.vercel.app/api/getCryptoInfo?params=\"\n  var call = \"http://localhost:3000/api/getCryptoInfo?params=\";\n\n  var fetcher = function fetcher(url) {\n    return fetch(url).then(function (res) {\n      return res.json();\n    });\n  };\n\n  for (var index in query) {\n    if (+index + +1 !== query.length) call += query[index] + \",\";else call += query[index];\n  } //why would someone not want getPriceHist?..\n\n\n  if (doGetPricehist) call += \"&priceHist=true\";\n  call += \"&priceInterv=\" + priceInterv;\n\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_1__.default)(call, fetcher),\n      data = _useSWR.data,\n      error = _useSWR.error,\n      isValidating = _useSWR.isValidating;\n\n  var sticky = useStickyResult(data);\n  if (!data && !sticky && isValidating) return null;else if (data) sticky.current = data;\n  return sticky.current;\n}\n\n_s3(getCryptosInfo, \"aD8Sx0S+lKCCW5S/aYssbNc08FE=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_1__.default, useStickyResult];\n});\n\nfunction grabLCLStorageCryptos() {\n  try {\n    return JSON.parse(localStorage.getItem(\"myCryptos\"))[\"cryptos\"];\n  } catch (error) {\n    localStorage.setItem('myCryptos', JSON.stringify({\n      \"cryptos\": [\"usdt\", \"doge\", \"xrp\"]\n    }));\n    return {\n      \"cryptos\": [\"usdt\", \"doge\", \"xrp\"]\n    };\n  }\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NyeXB0b0Rpc3BsYXlzLmpzPzE2NWIiXSwibmFtZXMiOlsiZGlzcGxheUN1cnJlbnRDcnlwdG9zIiwidXNlU3RhdGUiLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsInNlYXJjaCIsInNldFNlYXJjaCIsImdyYWJMQ0xTdG9yYWdlQ3J5cHRvcyIsInBhaXJzIiwic2V0UGFpcnMiLCJhbGxDcnlwdG9zTWV0YWRhdGEiLCJnZXRDcnlwdG9zSW5mbyIsImdldFJlbGV2YW50Q29pbnMiLCJjdXJyU2VhcmNoIiwidGFyZ2V0IiwidmFsdWUiLCJkYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImFkZENvaW5TZWxlY3Rpb24iLCJlIiwiY3VyclN0cmciLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaW5jbHVkZXMiLCJpbm5lckhUTUwiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImFsZXJ0IiwiZXJyb3IiLCJteVN0eWxlcyIsIm1hcCIsImVsIiwiaW5kZXgiLCJhQ3J5cHRvIiwiaW5keCIsImNvbG9yIiwidG9wIiwicmlnaHQiLCJ1c2VTdGlja3lSZXN1bHQiLCJ2YWwiLCJtdXRhYmxlIiwidXNlUmVmIiwidW5kZWZpbmVkIiwiY3VycmVudCIsInF1ZXJ5IiwiZG9HZXRQcmljZWhpc3QiLCJwcmljZUludGVydiIsImNhbGwiLCJmZXRjaGVyIiwidXJsIiwibGVuZ3RoIiwidXNlU1dSIiwiaXNWYWxpZGF0aW5nIiwic3RpY2t5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxxQkFBVCxHQUFpQztBQUFBOztBQUFBOztBQUFBLGtCQUVmQywrQ0FBUSxDQUFDLEVBQUQsQ0FGTztBQUFBLE1BRXRDQyxPQUZzQztBQUFBLE1BRTdCQyxVQUY2Qjs7QUFBQSxtQkFHakJGLCtDQUFRLENBQUMs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LGU7OztBQVVuQixTQUFTckMscUJBQVQsR0FBZ0M7QUFDL0IsTUFBSTtBQUNILFdBQU9pQixJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFdBQXJCLENBQVgsRUFBOEMsU0FBOUMsQ0FBUDtBQUNBLEdBRkQsQ0FFRSxPQUFNTyxLQUFOLEVBQWE7QUFDZFIsZ0JBQVksQ0FBQ0ssT0FBYixDQUFxQixXQUFyQixFQUMrQlAsSUFBSSxDQUFDUSxTQUFMLENBQWU7QUFBQyxpQkFBVyxDQUNWLE1BRFUsRUFDRixNQURFLEVBQ00sS0FETjtBQUFaLEtBQWYsQ0FEL0I7QUFHQSxXQUFPO0FBQUMsaUJBQVcsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixLQUFqQjtBQUFaLEtBQVA7QUFDQTtBQUNEIiwiZmlsZSI6Ii4vbGliL2NyeXB0b0Rpc3BsYXlzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiwge211dGF0ZX0gZnJvbSAnc3dyJ1xuaW1wb3J0IG15U3R5bGVzIGZyb20gJy4uL3N0eWxlcy9zdHlsZXMubW9kdWxlLmNzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7dXNlU3RhdGUsIGlzVmFsaWRhdGluZywgdXNlQ2FsbGJhY2ssIHVzZVJlZn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQge0xpbmVDaGFydCwgTGluZSwgWEF4aXMsIFlBeGlzLCBDYXJ0ZXNpYW5HcmlkLCBSZXNwb25zaXZlQ29udGFpbmVyLCBUb29sdGlwfSBmcm9tICdyZWNoYXJ0cydcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5Q3VycmVudENyeXB0b3MoKSB7XG5cbiAgIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlKFtdKVxuICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKSBcbiAgIGNvbnN0IFtwYWlycywgc2V0UGFpcnNdID0gdXNlU3RhdGUoZ3JhYkxDTFN0b3JhZ2VDcnlwdG9zKCkpIC8vcHJldHR5IGdvb2QgYXQgcmVmcmVzaGluZyBzb29uXG4gICB2YXIgYWxsQ3J5cHRvc01ldGFkYXRhID0gZ2V0Q3J5cHRvc0luZm8ocGFpcnMpXG4gXG4gICBjb25zdCBnZXRSZWxldmFudENvaW5zID0gKGN1cnJTZWFyY2gpID0+IHtcblx0XHRjb25zdCBzZWFyY2ggPSBjdXJyU2VhcmNoLnRhcmdldC52YWx1ZVxuXHRcdGlmKHNlYXJjaCkge1xuXHRcdFx0Ly9mZXRjaCBzaW1wbGVyIHRoYW4gdXNlc3dyLCBhcyBwcm9iIGRvbnQgbmVlZCB0byBob29rIG9udG8gc3BlY2lmaWMgc2VhcmNoXG5cdFx0XHRjb25zdCBkYXRhID0gZmV0Y2goXCJodHRwczovL3BkcC0yMDIxY3J5cHRvLnZlcmNlbC5hcHAvYXBpL2dldFJlbGV2YW50Q29pbnM/cGFyYW09XCIrc2VhcmNoKVxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG5cdFx0XHQudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRzZXRSZXN1bHRzKHJlc1tcInNtbHJDb2luc1wiXSlcblx0XHRcdH0pXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0Ly9oYW5kbGVzIGVtcHR5aW5nIHNlYXJjaHF1ZXJ5IHRvICcnXG5cdFx0XHRzZXRSZXN1bHRzKFtdKVxuXHRcdH1cbiAgIH1cbiAgIGNvbnN0IGFkZENvaW5TZWxlY3Rpb24gPSAoZSkgPT4ge1xuXHR0cnkge1xuXHRcdHZhciBjdXJyU3RyZyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215Q3J5cHRvcycpKVtcImNyeXB0b3NcIl1cblx0XHRpZighY3VyclN0cmcuaW5jbHVkZXMoZS50YXJnZXQuaW5uZXJIVE1MKSkge1xuXHRcdFx0Y3VyclN0cmcucHVzaChlLnRhcmdldC5pbm5lckhUTUwpXG5cdCAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlDcnlwdG9zJywgSlNPTi5zdHJpbmdpZnkoe1wiY3J5cHRvc1wiOiBjdXJyU3RyZ30pKVxuXHRcdFx0c2V0UGFpcnMoY3VyclN0cmcpXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0YWxlcnQoXCJ5b3UgYWxyZWFkeSBoYXZlIHRoYXQhXCIpXG5cdFx0fVxuXHR9IGNhdGNoKGVycm9yKSB7XG5cdFx0YWxlcnQoZXJyb3IpXG5cdH1cbiAgIH0gXG4gICBcbiAgIC8vPGRpdj4xRCAlIGNoYW5nZToge01hdGgucm91bmQoYUNyeXB0b1tcIjFkXCJdW1wicHJpY2VfY2hhbmdlX3BjdFwiXSoxMDAqMTAwKS8xMDB9PC9kaXY+ICBcbiAgIGlmKGFsbENyeXB0b3NNZXRhZGF0YSA9PT0gbnVsbCApIHJldHVybiA8cD5cImxvYWRpbmcuLi5cIjwvcD5cbiAgIGVsc2Uge1xuXHRyZXR1cm4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT17bXlTdHlsZXMuaG9tZVBhZ2V9PlxuXHRcdDxpbnB1dCBpZD1cIm5hbWVcIiBjbGFzc05hbWU9e215U3R5bGVzLnNlYXJjaH0gcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGNvaW4gdGlja2Vycy4uLlwiIGF1dG9Db21wbGV0ZSA9IFwib2ZmXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17Z2V0UmVsZXZhbnRDb2luc30vPlxuXHRcdFx0PGRpdj4ge1xuXHRcdFx0XHRyZXN1bHRzLm1hcCgoZWwsIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXthZGRDb2luU2VsZWN0aW9ufSBrZXk9e2luZGV4fT5cblx0XHRcdFx0XHRcdHtlbH1cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHQgXHQgICAgICApKX1cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWUgPSB7bXlTdHlsZXMubWFpbkdyaWR9PlxuXHRcdFx0e2FsbENyeXB0b3NNZXRhZGF0YS5tYXAoKGFDcnlwdG8sIGluZHgpID0+IChcblx0XHRcdFx0PGRpdiBpZD17YUNyeXB0b1tcImlkXCJdfSBrZXk9e2luZHh9IGNsYXNzTmFtZSA9IHtteVN0eWxlcy50aWxlfT5cblx0XHRcdFx0ICA8aW1nIGFsaWduPVwidG9wXCIgY2xhc3NOYW1lID0ge215U3R5bGVzLnNyY0ltYWdlfXNyYyA9IHthQ3J5cHRvW1wibG9nb191cmxcIl19PjwvaW1nPlxuICBcdFx0XHRcdCAgIDxMaW5rIGhyZWYgPSB7XCJjcnlwdG9EZXRhaWxlZC9cIiArIGFDcnlwdG9bXCJpZFwiXX0+XG5cdFx0XHRcdFx0PGE+e2FDcnlwdG9bXCJuYW1lXCJdfTwvYT5cblx0XHRcdFx0ICAgPC9MaW5rPlxuXHRcdFx0XHQgICA8ZGl2PnthQ3J5cHRvW1wicHJpY2VcIl19PGJyLz48L2Rpdj5cblx0XHRcdFx0PGRpdiBzdHlsZT17e2NvbG9yOmFDcnlwdG9bXCJwcmljZV9jb2xvclwiXX19PnthQ3J5cHRvW1wiMWRcIl1bXCJwcmljZV9jaGFuZ2VfcGN0XCJdfSU8L2Rpdj5cblxuXHRcdFx0XHQgICAgPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9JzEwMCUnIGhlaWdodD17MTMwfT5cblx0XHRcdFx0ICAgICA8TGluZUNoYXJ0IGRhdGE9e2FDcnlwdG9bXCJwcmljZXNcIl19IGRvdD17ZmFsc2V9PlxuXHQgICAgIFx0ICAgICAgICAgICAgICAgICAgICA8TGluZSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwicHJjXCIgc3Ryb2tlPVwid2hpdGVcIi8+XG4gICAgICAgXHRcdCAgICAgICAgICAgICAgICAgICAgPFhBeGlzIG1hcmdpbj17e3RvcDoxMH19IHBhZGRpbmc9e3tyaWdodDoxNX19IGRhdGFLZXk9XCJzdG1wXCIgaW50ZXJ2YWw9ezZ9IHN0cm9rZT1cIiM5OTk5OTlcImFuZ2xlPXstNDV9IC8+XG4gICAgICAgXHQgICAgICAgICAgICAgICAgICAgICAgICAgICA8WUF4aXMgcGFkZGluZz17e3RvcDo1fX0gZHg9ezh9IHN0cm9rZT1cIiM5OTk5OTlcIiBpbnRlcnZhbD17MH0gZG9tYWluPXtbXCJhdXRvXCIsIFwiYXV0b1wiXX0vPlxuICAgICAgICAgICAgICBcdFx0XHQgICAgICA8L0xpbmVDaGFydD5cblx0XHRcdFx0ICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7XCJmb250LXNpemVcIjpcIjEwcHhcIn19PiBWb2x1bWU6IHthQ3J5cHRvW1wiMWRcIl1bXCJ2b2x1bWVcIl19QjwvZGl2PlxuXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KSl9XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuICAgXHQpXG4gICAgfVxufVxuXG4vL2luc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvc3dyL2lzc3Vlcy8xOTJcbmZ1bmN0aW9uIHVzZVN0aWNreVJlc3VsdCAodmFsKVxue1xuXHRjb25zdCBtdXRhYmxlID0gdXNlUmVmKClcblx0aWYodmFsICE9PSB1bmRlZmluZWQpIG11dGFibGUuY3VycmVudCA9IHZhbFxuXHRyZXR1cm4gbXV0YWJsZS5jdXJyZW50XG59XG5cblxuZnVuY3Rpb24gZ2V0Q3J5cHRvc0luZm8ocXVlcnksIGRvR2V0UHJpY2VoaXN0PXRydWUsIHByaWNlSW50ZXJ2PVwiMWRcIikgeyAgIFxuICAgIC8vdmFyIGNhbGwgPSBcImh0dHBzOi8vcGRwLTIwMjFjcnlwdG8udmVyY2VsLmFwcC9hcGkvZ2V0Q3J5cHRvSW5mbz9wYXJhbXM9XCJcbiAgICB2YXIgY2FsbCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9nZXRDcnlwdG9JbmZvP3BhcmFtcz1cIlxuICAgIGNvbnN0IGZldGNoZXIgPSB1cmwgPT4gZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcblxuICAgIGZvcih2YXIgaW5kZXggaW4gcXVlcnkpIHtcbiBcdGlmKCtpbmRleCArICsxICE9PSBxdWVyeS5sZW5ndGgpIGNhbGwgKz0gcXVlcnlbaW5kZXhdICsgXCIsXCI7XG4gICAgICAgIGVsc2UgY2FsbCArPSBxdWVyeVtpbmRleF1cbiAgICB9XG4gICAgLy93aHkgd291bGQgc29tZW9uZSBub3Qgd2FudCBnZXRQcmljZUhpc3Q/Li5cbiAgICBpZiAoZG9HZXRQcmljZWhpc3QpIGNhbGwgKz0gXCImcHJpY2VIaXN0PXRydWVcIlxuICAgIGNhbGwgKz0gXCImcHJpY2VJbnRlcnY9XCIgKyBwcmljZUludGVydiAgXG5cbiAgICBjb25zdCB7ZGF0YSwgZXJyb3IsIGlzVmFsaWRhdGluZ30gPSB1c2VTV1IoY2FsbCwgZmV0Y2hlcilcbiAgICBjb25zdCBzdGlja3kgPSB1c2VTdGlja3lSZXN1bHQoZGF0YSlcblxuICAgIGlmKCFkYXRhICYmICFzdGlja3kgJiYgaXNWYWxpZGF0aW5nKSByZXR1cm4gbnVsbFxuXG4gICAgZWxzZSBpZihkYXRhKSBzdGlja3kuY3VycmVudCA9ICBkYXRhXG5cbiAgICByZXR1cm4gc3RpY2t5LmN1cnJlbnRcbn1cblxuXG5mdW5jdGlvbiBncmFiTENMU3RvcmFnZUNyeXB0b3MoKXtcblx0dHJ5IHtcblx0XHRyZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15Q3J5cHRvc1wiKSlbXCJjcnlwdG9zXCJdXG5cdH0gY2F0Y2goZXJyb3IpIHtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlDcnlwdG9zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcImNyeXB0b3NcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVzZHRcIiwgXCJkb2dlXCIsIFwieHJwXCJdfSkpXG5cdFx0cmV0dXJuIHtcImNyeXB0b3NcIjogW1widXNkdFwiLCBcImRvZ2VcIiwgXCJ4cnBcIl19XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/cryptoDisplays.js\n");

/***/ })

});