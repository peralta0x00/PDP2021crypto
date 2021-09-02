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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ displayCurrentCryptos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/styles.module.css */ \"./styles/styles.module.css\");\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recharts */ \"./node_modules/recharts/es6/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/kevinperalta/Documents/SUMMERPROJ/PDP2021crypto/lib/cryptoDisplays.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\n\n\n\n\n\n\nfunction displayCurrentCryptos() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      results = _useState[0],\n      setResults = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      search = _useState2[0],\n      setSearch = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(grabLCLStorageCryptos()),\n      pairs = _useState3[0],\n      setPairs = _useState3[1]; //pretty good at refreshing soon\n\n\n  var allCryptosMetadata = getCryptosInfo(pairs);\n\n  var getRelevantCoins = function getRelevantCoins(currSearch) {\n    var search = currSearch.target.value;\n\n    if (search) {\n      //fetch simpler than useswr, as prob dont need to hook onto specific search\n      var data = fetch(\"https://pdp-2021crypto.vercel.app/api/getRelevantCoins?param=\" + search).then(function (res) {\n        return res.json();\n      }).then(function (res) {\n        setResults(res[\"smlrCoins\"]);\n      });\n    } else {\n      //handles emptying searchquery to ''\n      setResults([]);\n    }\n  };\n\n  var addCoinSelection = function addCoinSelection(e) {\n    try {\n      var currStrg = JSON.parse(localStorage.getItem('myCryptos'))[\"cryptos\"];\n\n      if (!currStrg.includes(e.target.innerHTML)) {\n        currStrg.push(e.target.innerHTML);\n        localStorage.setItem('myCryptos', JSON.stringify({\n          \"cryptos\": currStrg\n        }));\n        setPairs(currStrg);\n      } else {\n        alert(\"you already have that!\");\n      }\n    } catch (error) {\n      alert(error);\n    }\n  }; //<div>1D % change: {Math.round(aCrypto[\"1d\"][\"price_change_pct\"]*100*100)/100}</div>  \n\n\n  if (allCryptosMetadata === null) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"\\\"loading...\\\"\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 44\n  }, this);else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().homePage),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"name\",\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().search),\n        placeholder: \"Search for coin tickers...\",\n        autoComplete: \"off\",\n        type: \"text\",\n        onChange: getRelevantCoins\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 3\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\" \", results.map(function (el, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: addCoinSelection,\n            children: el\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 6\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 4\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainGrid),\n        children: allCryptosMetadata.map(function (aCrypto, indx) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: aCrypto[\"id\"],\n            className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().tile),\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n              align: \"top\",\n              className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().srcImage),\n              src: aCrypto[\"logo_url\"]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 7\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n              href: \"cryptoDetailed/\" + aCrypto[\"id\"],\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                children: aCrypto[\"name\"]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 6\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 10\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              children: [aCrypto[\"price\"], /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 67,\n                columnNumber: 31\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 8\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              style: {\n                color: aCrypto[\"price_color\"]\n              },\n              children: [aCrypto[\"1d\"][\"price_change_pct\"], \"%\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 5\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.ResponsiveContainer, {\n              width: \"100%\",\n              height: 130,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.LineChart, {\n                data: aCrypto[\"prices\"],\n                dot: false,\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.Line, {\n                  type: \"monotone\",\n                  dataKey: \"prc\",\n                  stroke: \"white\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 72,\n                  columnNumber: 28\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.XAxis, {\n                  margin: {\n                    top: 10\n                  },\n                  padding: {\n                    right: 15\n                  },\n                  dataKey: \"stmp\",\n                  interval: 6,\n                  stroke: \"#999999\",\n                  angle: -45\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 73,\n                  columnNumber: 30\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.YAxis, {\n                  padding: {\n                    top: 5\n                  },\n                  dx: 8,\n                  tick: {\n                    stroke: \"red\"\n                  },\n                  stroke: \"#999999\",\n                  interval: 1,\n                  domain: [\"auto\", \"auto\"]\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 74,\n                  columnNumber: 36\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 71,\n                columnNumber: 10\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 9\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              style: {\n                \"font-size\": \"10px\"\n              },\n              children: [\" Volume: \", aCrypto[\"1d\"][\"volume\"], \"B\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 5\n            }, _this)]\n          }, indx, true, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 5\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 4\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 2\n    }, this);\n  }\n} //inspired by https://github.com/vercel/swr/issues/192\n\n_s(displayCurrentCryptos, \"Gy0NUgA1mHWIlxAPioGHyJ/b4yw=\");\n\nfunction useStickyResult(val) {\n  _s2();\n\n  var mutable = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n  if (val !== undefined) mutable.current = val;\n  return mutable.current;\n}\n\n_s2(useStickyResult, \"zp++H2OHZTudVr6LLs5U2nc9bw8=\");\n\nfunction getCryptosInfo(query) {\n  _s3();\n\n  var doGetPricehist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n  var priceInterv = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"1d\";\n  //var call = \"https://pdp-2021crypto.vercel.app/api/getCryptoInfo?params=\"\n  var call = \"http://localhost:3000/api/getCryptoInfo?params=\";\n\n  var fetcher = function fetcher(url) {\n    return fetch(url).then(function (res) {\n      return res.json();\n    });\n  };\n\n  for (var index in query) {\n    if (+index + +1 !== query.length) call += query[index] + \",\";else call += query[index];\n  } //why would someone not want getPriceHist?..\n\n\n  if (doGetPricehist) call += \"&priceHist=true\";\n  call += \"&priceInterv=\" + priceInterv;\n\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_1__.default)(call, fetcher),\n      data = _useSWR.data,\n      error = _useSWR.error,\n      isValidating = _useSWR.isValidating;\n\n  var sticky = useStickyResult(data);\n  if (!data && !sticky && isValidating) return null;else if (data) sticky.current = data;\n  return sticky.current;\n}\n\n_s3(getCryptosInfo, \"aD8Sx0S+lKCCW5S/aYssbNc08FE=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_1__.default, useStickyResult];\n});\n\nfunction grabLCLStorageCryptos() {\n  try {\n    return JSON.parse(localStorage.getItem(\"myCryptos\"))[\"cryptos\"];\n  } catch (error) {\n    localStorage.setItem('myCryptos', JSON.stringify({\n      \"cryptos\": [\"usdt\", \"doge\", \"xrp\"]\n    }));\n    return {\n      \"cryptos\": [\"usdt\", \"doge\", \"xrp\"]\n    };\n  }\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NyeXB0b0Rpc3BsYXlzLmpzPzE2NWIiXSwibmFtZXMiOlsiZGlzcGxheUN1cnJlbnRDcnlwdG9zIiwidXNlU3RhdGUiLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsInNlYXJjaCIsInNldFNlYXJjaCIsImdyYWJMQ0xTdG9yYWdlQ3J5cHRvcyIsInBhaXJzIiwic2V0UGFpcnMiLCJhbGxDcnlwdG9zTWV0YWRhdGEiLCJnZXRDcnlwdG9zSW5mbyIsImdldFJlbGV2YW50Q29pbnMiLCJjdXJyU2VhcmNoIiwidGFyZ2V0IiwidmFsdWUiLCJkYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImFkZENvaW5TZWxlY3Rpb24iLCJlIiwiY3VyclN0cmciLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaW5jbHVkZXMiLCJpbm5lckhUTUwiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImFsZXJ0IiwiZXJyb3IiLCJteVN0eWxlcyIsIm1hcCIsImVsIiwiaW5kZXgiLCJhQ3J5cHRvIiwiaW5keCIsImNvbG9yIiwidG9wIiwicmlnaHQiLCJzdHJva2UiLCJ1c2VTdGlja3lSZXN1bHQiLCJ2YWwiLCJtdXRhYmxlIiwidXNlUmVmIiwidW5kZWZpbmVkIiwiY3VycmVudCIsInF1ZXJ5IiwiZG9HZXRQcmljZWhpc3QiLCJwcmljZUludGVydiIsImNhbGwiLCJmZXRjaGVyIiwidXJsIiwibGVuZ3RoIiwidXNlU1dSIiwiaXNWYWxpZGF0aW5nIiwic3RpY2t5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxxQkFBVCxHQUFpQztBQUFBOztBQUFBOztBQUFBLGtCQUVmQywrQ0FBUSxDQUFDLEVBQUQsQ0FGTztBQUFBLE1BRXRDQyxPQUZzQztBQUFBLE1BRTdCQyxVQUY2Qjs7QUFBQSxtQkFHakJGLCtDQUFRLENBQUMsRUFBRCxDQUhTO0FBQUEsTUFHdENHLE1BSHNDO0FBQUEsTUFHOUJDLFNBSDhCOztBQUFBLG1CQUluQkosK0NBQVEsQ0FBQ0sscUJBQXFCLEVBQXRCLENBSlc7QUFBQSxNQUl0Q0MsS0FKc0M7QUFBQSxNQUkvQkMsUUFKK0Isa0JBSWU7OztBQUM1RCxNQUFJQyxrQkFBa0IsR0FBR0MsY0FBYyxDQUFDSCxLQUFELENBQXZDOztBQUVBLE1BQU1JLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsVUFBRCxFQUFnQjtBQUMxQyxRQUFNUixNQUFNLEdBQUdRLFVBQVUsQ0FBQ0MsTUFBWCxDQUFrQkMsS0FBakM7O0FBQ0EsUUFBR1YsTUFBSCxFQUFXO0FBQ1Y7QUFDQSxVQUFNVyxJQUFJLEdBQUdDLEtBQUssQ0FBQyxrRUFBZ0VaLE1BQWpFLENBQUwsQ0FDWmEsSUFEWSxDQUNQLFVBQUFDLEdBQUc7QUFBQSxlQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLE9BREksRUFFWkYsSUFGWSxDQUVQLFVBQUFDLEdBQUcsRUFBSTtBQUNaZixrQkFBVSxDQUFDZSxHQUFHLENBQUMsV0FBRCxDQUFKLENBQVY7QUFDQSxPQUpZLENBQWI7QUFLQSxLQVBELE1BUUs7QUFDSjtBQUNBZixnQkFBVSxDQUFDLEVBQUQsQ0FBVjtBQUNBO0FBQ0MsR0FkRDs7QUFlQSxNQUFNaUIsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxDQUFELEVBQU87QUFDbEMsUUFBSTtBQUNILFVBQUlDLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixXQUFyQixDQUFYLEVBQThDLFNBQTlDLENBQWY7O0FBQ0EsVUFBRyxDQUFDSixRQUFRLENBQUNLLFFBQVQsQ0FBa0JOLENBQUMsQ0FBQ1IsTUFBRixDQUFTZSxTQUEzQixDQUFKLEVBQTJDO0FBQzFDTixnQkFBUSxDQUFDTyxJQUFULENBQWNSLENBQUMsQ0FBQ1IsTUFBRixDQUFTZSxTQUF2QjtBQUNjSCxvQkFBWSxDQUFDSyxPQUFiLENBQXFCLFdBQXJCLEVBQWtDUCxJQUFJLENBQUNRLFNBQUwsQ0FBZTtBQUFDLHFCQUFXVDtBQUFaLFNBQWYsQ0FBbEM7QUFDZGQsZ0JBQVEsQ0FBQ2MsUUFBRCxDQUFSO0FBQ0EsT0FKRCxNQUtLO0FBQ0pVLGFBQUssQ0FBQyx3QkFBRCxDQUFMO0FBQ0E7QUFDRCxLQVZELENBVUUsT0FBTUMsS0FBTixFQUFhO0FBQ2RELFdBQUssQ0FBQ0MsS0FBRCxDQUFMO0FBQ0E7QUFDRSxHQWRELENBdEI2QyxDQXNDN0M7OztBQUNBLE1BQUd4QixrQkFBa0IsS0FBSyxJQUExQixFQUFpQyxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQLENBQWpDLEtBQ0s7QUFDUCx3QkFDQTtBQUFLLGVBQVMsRUFBRXlCLDJFQUFoQjtBQUFBLDhCQUNDO0FBQU8sVUFBRSxFQUFDLE1BQVY7QUFBaUIsaUJBQVMsRUFBRUEseUVBQTVCO0FBQTZDLG1CQUFXLEVBQUMsNEJBQXpEO0FBQXNGLG9CQUFZLEVBQUcsS0FBckc7QUFBMkcsWUFBSSxFQUFDLE1BQWhIO0FBQXVILGdCQUFRLEVBQUV2QjtBQUFqSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFFRTtBQUFBLHdCQUNDVCxPQUFPLENBQUNpQyxHQUFSLENBQVksVUFBQ0MsRUFBRCxFQUFLQyxLQUFMO0FBQUEsOEJBQ1g7QUFBUSxtQkFBTyxFQUFFakIsZ0JBQWpCO0FBQUEsc0JBQ0VnQjtBQURGLGFBQXdDQyxLQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURXO0FBQUEsU0FBWixDQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBU0U7QUFBSyxpQkFBUyxFQUFJSCwyRUFBbEI7QUFBQSxrQkFDQ3pCLGtCQUFrQixDQUFDMEIsR0FBbkIsQ0FBdUIsVUFBQ0csT0FBRCxFQUFVQyxJQUFWO0FBQUEsOEJBQ3ZCO0FBQUssY0FBRSxFQUFFRCxPQUFPLENBQUMsSUFBRCxDQUFoQjtBQUFtQyxxQkFBUyxFQUFJSix1RUFBaEQ7QUFBQSxvQ0FDRTtBQUFLLG1CQUFLLEVBQUMsS0FBWDtBQUFpQix1QkFBUyxFQUFJQSwyRUFBOUI7QUFBZ0QsaUJBQUcsRUFBSUksT0FBTyxDQUFDLFVBQUQ7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVLLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBSSxvQkFBb0JBLE9BQU8sQ0FBQyxJQUFELENBQXpDO0FBQUEscUNBQ0o7QUFBQSwwQkFBSUEsT0FBTyxDQUFDLE1BQUQ7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREk7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGTCxlQUtHO0FBQUEseUJBQU1BLE9BQU8sQ0FBQyxPQUFELENBQWIsZUFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxILGVBTUE7QUFBSyxtQkFBSyxFQUFFO0FBQUNFLHFCQUFLLEVBQUNGLE9BQU8sQ0FBQyxhQUFEO0FBQWQsZUFBWjtBQUFBLHlCQUE2Q0EsT0FBTyxDQUFDLElBQUQsQ0FBUCxDQUFjLGtCQUFkLENBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFOQSxlQVFJLDhEQUFDLHlEQUFEO0FBQXFCLG1CQUFLLEVBQUMsTUFBM0I7QUFBa0Msb0JBQU0sRUFBRSxHQUExQztBQUFBLHFDQUNDLDhEQUFDLCtDQUFEO0FBQVcsb0JBQUksRUFBRUEsT0FBTyxDQUFDLFFBQUQsQ0FBeEI7QUFBb0MsbUJBQUcsRUFBRSxLQUF6QztBQUFBLHdDQUNrQiw4REFBQywwQ0FBRDtBQUFNLHNCQUFJLEVBQUMsVUFBWDtBQUFzQix5QkFBTyxFQUFDLEtBQTlCO0FBQW9DLHdCQUFNLEVBQUM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEbEIsZUFFb0IsOERBQUMsMkNBQUQ7QUFBTyx3QkFBTSxFQUFFO0FBQUNHLHVCQUFHLEVBQUM7QUFBTCxtQkFBZjtBQUF5Qix5QkFBTyxFQUFFO0FBQUNDLHlCQUFLLEVBQUM7QUFBUCxtQkFBbEM7QUFBOEMseUJBQU8sRUFBQyxNQUF0RDtBQUE2RCwwQkFBUSxFQUFFLENBQXZFO0FBQTBFLHdCQUFNLEVBQUMsU0FBakY7QUFBMEYsdUJBQUssRUFBRSxDQUFDO0FBQWxHO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRnBCLGVBRzBCLDhEQUFDLDJDQUFEO0FBQU8seUJBQU8sRUFBRTtBQUFDRCx1QkFBRyxFQUFDO0FBQUwsbUJBQWhCO0FBQXlCLG9CQUFFLEVBQUUsQ0FBN0I7QUFBZ0Msc0JBQUksRUFBRTtBQUFDRSwwQkFBTSxFQUFDO0FBQVIsbUJBQXRDO0FBQXNELHdCQUFNLEVBQUMsU0FBN0Q7QUFBdUUsMEJBQVEsRUFBRSxDQUFqRjtBQUFvRix3QkFBTSxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQ7QUFBNUY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSSixlQWVBO0FBQUssbUJBQUssRUFBRTtBQUFDLDZCQUFZO0FBQWIsZUFBWjtBQUFBLHNDQUE0Q0wsT0FBTyxDQUFDLElBQUQsQ0FBUCxDQUFjLFFBQWQsQ0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWZBO0FBQUEsYUFBNkJDLElBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRHVCO0FBQUEsU0FBdkI7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREE7QUFrQ0k7QUFDSixDLENBRUQ7O0dBOUV3QnZDLHFCOztBQStFeEIsU0FBUzRDLGVBQVQsQ0FBMEJDLEdBQTFCLEVBQ0E7QUFBQTs7QUFDQyxNQUFNQyxPQUFPLEdBQUdDLDZDQUFNLEVBQXRCO0FBQ0EsTUFBR0YsR0FBRyxLQUFLRyxTQUFYLEVBQXNCRixPQUFPLENBQUNHLE9BQVIsR0FBa0JKLEdBQWxCO0FBQ3RCLFNBQU9DLE9BQU8sQ0FBQ0csT0FBZjtBQUNBOztJQUxRTCxlOztBQVFULFNBQVNsQyxjQUFULENBQXdCd0MsS0FBeEIsRUFBc0U7QUFBQTs7QUFBQSxNQUF2Q0MsY0FBdUMsdUVBQXhCLElBQXdCO0FBQUEsTUFBbEJDLFdBQWtCLHVFQUFOLElBQU07QUFDbEU7QUFDQSxNQUFJQyxJQUFJLEdBQUcsaURBQVg7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQUMsR0FBRztBQUFBLFdBQUl2QyxLQUFLLENBQUN1QyxHQUFELENBQUwsQ0FBV3RDLElBQVgsQ0FBZ0IsVUFBQUMsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsS0FBbkIsQ0FBSjtBQUFBLEdBQW5COztBQUVBLE9BQUksSUFBSWtCLEtBQVIsSUFBaUJhLEtBQWpCLEVBQXdCO0FBQzFCLFFBQUcsQ0FBQ2IsS0FBRCxHQUFTLENBQUMsQ0FBVixLQUFnQmEsS0FBSyxDQUFDTSxNQUF6QixFQUFpQ0gsSUFBSSxJQUFJSCxLQUFLLENBQUNiLEtBQUQsQ0FBTCxHQUFlLEdBQXZCLENBQWpDLEtBQ1dnQixJQUFJLElBQUlILEtBQUssQ0FBQ2IsS0FBRCxDQUFiO0FBQ1IsR0FSaUUsQ0FTbEU7OztBQUNBLE1BQUljLGNBQUosRUFBb0JFLElBQUksSUFBSSxpQkFBUjtBQUNwQkEsTUFBSSxJQUFJLGtCQUFrQkQsV0FBMUI7O0FBWGtFLGdCQWE5QkssNENBQU0sQ0FBQ0osSUFBRCxFQUFPQyxPQUFQLENBYndCO0FBQUEsTUFhM0R2QyxJQWIyRCxXQWEzREEsSUFiMkQ7QUFBQSxNQWFyRGtCLEtBYnFELFdBYXJEQSxLQWJxRDtBQUFBLE1BYTlDeUIsWUFiOEMsV0FhOUNBLFlBYjhDOztBQWNsRSxNQUFNQyxNQUFNLEdBQUdmLGVBQWUsQ0FBQzdCLElBQUQsQ0FBOUI7QUFFQSxNQUFHLENBQUNBLElBQUQsSUFBUyxDQUFDNEMsTUFBVixJQUFvQkQsWUFBdkIsRUFBcUMsT0FBTyxJQUFQLENBQXJDLEtBRUssSUFBRzNDLElBQUgsRUFBUzRDLE1BQU0sQ0FBQ1YsT0FBUCxHQUFrQmxDLElBQWxCO0FBRWQsU0FBTzRDLE1BQU0sQ0FBQ1YsT0FBZDtBQUNIOztJQXJCUXZDLGM7VUFhK0IrQyx3QyxFQUNyQmIsZTs7O0FBVW5CLFNBQVN0QyxxQkFBVCxHQUFnQztBQUMvQixNQUFJO0FBQ0gsV0FBT2lCLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsV0FBckIsQ0FBWCxFQUE4QyxTQUE5QyxDQUFQO0FBQ0EsR0FGRCxDQUVFLE9BQU1PLEtBQU4sRUFBYTtBQUNkUixnQkFBWSxDQUFDSyxPQUFiLENBQXFCLFdBQXJCLEVBQytCUCxJQUFJLENBQUNRLFNBQUwsQ0FBZTtBQUFDLGlCQUFXLENBQ1YsTUFEVSxFQUNGLE1BREUsRUFDTSxLQUROO0FBQVosS0FBZixDQUQvQjtBQUdBLFdBQU87QUFBQyxpQkFBVyxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLEtBQWpCO0FBQVosS0FBUDtBQUNBO0FBQ0QiLCJmaWxlIjoiLi9saWIvY3J5cHRvRGlzcGxheXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSLCB7bXV0YXRlfSBmcm9tICdzd3InXG5pbXBvcnQgbXlTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3N0eWxlcy5tb2R1bGUuY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHt1c2VTdGF0ZSwgaXNWYWxpZGF0aW5nLCB1c2VDYWxsYmFjaywgdXNlUmVmfSBmcm9tICdyZWFjdCdcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCB7TGluZUNoYXJ0LCBMaW5lLCBYQXhpcywgWUF4aXMsIENhcnRlc2lhbkdyaWQsIFJlc3BvbnNpdmVDb250YWluZXIsIFRvb2x0aXB9IGZyb20gJ3JlY2hhcnRzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50Q3J5cHRvcygpIHtcblxuICAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoW10pXG4gICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpIFxuICAgY29uc3QgW3BhaXJzLCBzZXRQYWlyc10gPSB1c2VTdGF0ZShncmFiTENMU3RvcmFnZUNyeXB0b3MoKSkgLy9wcmV0dHkgZ29vZCBhdCByZWZyZXNoaW5nIHNvb25cbiAgIHZhciBhbGxDcnlwdG9zTWV0YWRhdGEgPSBnZXRDcnlwdG9zSW5mbyhwYWlycylcbiBcbiAgIGNvbnN0IGdldFJlbGV2YW50Q29pbnMgPSAoY3VyclNlYXJjaCkgPT4ge1xuXHRcdGNvbnN0IHNlYXJjaCA9IGN1cnJTZWFyY2gudGFyZ2V0LnZhbHVlXG5cdFx0aWYoc2VhcmNoKSB7XG5cdFx0XHQvL2ZldGNoIHNpbXBsZXIgdGhhbiB1c2Vzd3IsIGFzIHByb2IgZG9udCBuZWVkIHRvIGhvb2sgb250byBzcGVjaWZpYyBzZWFyY2hcblx0XHRcdGNvbnN0IGRhdGEgPSBmZXRjaChcImh0dHBzOi8vcGRwLTIwMjFjcnlwdG8udmVyY2VsLmFwcC9hcGkvZ2V0UmVsZXZhbnRDb2lucz9wYXJhbT1cIitzZWFyY2gpXG5cdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcblx0XHRcdC50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdHNldFJlc3VsdHMocmVzW1wic21sckNvaW5zXCJdKVxuXHRcdFx0fSlcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHQvL2hhbmRsZXMgZW1wdHlpbmcgc2VhcmNocXVlcnkgdG8gJydcblx0XHRcdHNldFJlc3VsdHMoW10pXG5cdFx0fVxuICAgfVxuICAgY29uc3QgYWRkQ29pblNlbGVjdGlvbiA9IChlKSA9PiB7XG5cdHRyeSB7XG5cdFx0dmFyIGN1cnJTdHJnID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlDcnlwdG9zJykpW1wiY3J5cHRvc1wiXVxuXHRcdGlmKCFjdXJyU3RyZy5pbmNsdWRlcyhlLnRhcmdldC5pbm5lckhUTUwpKSB7XG5cdFx0XHRjdXJyU3RyZy5wdXNoKGUudGFyZ2V0LmlubmVySFRNTClcblx0ICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteUNyeXB0b3MnLCBKU09OLnN0cmluZ2lmeSh7XCJjcnlwdG9zXCI6IGN1cnJTdHJnfSkpXG5cdFx0XHRzZXRQYWlycyhjdXJyU3RyZylcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRhbGVydChcInlvdSBhbHJlYWR5IGhhdmUgdGhhdCFcIilcblx0XHR9XG5cdH0gY2F0Y2goZXJyb3IpIHtcblx0XHRhbGVydChlcnJvcilcblx0fVxuICAgfSBcbiAgIFxuICAgLy88ZGl2PjFEICUgY2hhbmdlOiB7TWF0aC5yb3VuZChhQ3J5cHRvW1wiMWRcIl1bXCJwcmljZV9jaGFuZ2VfcGN0XCJdKjEwMCoxMDApLzEwMH08L2Rpdj4gIFxuICAgaWYoYWxsQ3J5cHRvc01ldGFkYXRhID09PSBudWxsICkgcmV0dXJuIDxwPlwibG9hZGluZy4uLlwiPC9wPlxuICAgZWxzZSB7XG5cdHJldHVybiAoXG5cdDxkaXYgY2xhc3NOYW1lPXtteVN0eWxlcy5ob21lUGFnZX0+XG5cdFx0PGlucHV0IGlkPVwibmFtZVwiIGNsYXNzTmFtZT17bXlTdHlsZXMuc2VhcmNofSBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgY29pbiB0aWNrZXJzLi4uXCIgYXV0b0NvbXBsZXRlID0gXCJvZmZcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtnZXRSZWxldmFudENvaW5zfS8+XG5cdFx0XHQ8ZGl2PiB7XG5cdFx0XHRcdHJlc3VsdHMubWFwKChlbCwgaW5kZXgpID0+IChcblx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2FkZENvaW5TZWxlY3Rpb259IGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0e2VsfVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdCBcdCAgICAgICkpfVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IHtteVN0eWxlcy5tYWluR3JpZH0+XG5cdFx0XHR7YWxsQ3J5cHRvc01ldGFkYXRhLm1hcCgoYUNyeXB0bywgaW5keCkgPT4gKFxuXHRcdFx0XHQ8ZGl2IGlkPXthQ3J5cHRvW1wiaWRcIl19IGtleT17aW5keH0gY2xhc3NOYW1lID0ge215U3R5bGVzLnRpbGV9PlxuXHRcdFx0XHQgIDxpbWcgYWxpZ249XCJ0b3BcIiBjbGFzc05hbWUgPSB7bXlTdHlsZXMuc3JjSW1hZ2V9c3JjID0ge2FDcnlwdG9bXCJsb2dvX3VybFwiXX0+PC9pbWc+XG4gIFx0XHRcdFx0ICAgPExpbmsgaHJlZiA9IHtcImNyeXB0b0RldGFpbGVkL1wiICsgYUNyeXB0b1tcImlkXCJdfT5cblx0XHRcdFx0XHQ8YT57YUNyeXB0b1tcIm5hbWVcIl19PC9hPlxuXHRcdFx0XHQgICA8L0xpbms+XG5cdFx0XHRcdCAgIDxkaXY+e2FDcnlwdG9bXCJwcmljZVwiXX08YnIvPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7Y29sb3I6YUNyeXB0b1tcInByaWNlX2NvbG9yXCJdfX0+e2FDcnlwdG9bXCIxZFwiXVtcInByaWNlX2NoYW5nZV9wY3RcIl19JTwvZGl2PlxuXG5cdFx0XHRcdCAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lciB3aWR0aD0nMTAwJScgaGVpZ2h0PXsxMzB9PlxuXHRcdFx0XHQgICAgIDxMaW5lQ2hhcnQgZGF0YT17YUNyeXB0b1tcInByaWNlc1wiXX0gZG90PXtmYWxzZX0+XG5cdCAgICAgXHQgICAgICAgICAgICAgICAgICAgIDxMaW5lIHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9XCJwcmNcIiBzdHJva2U9XCJ3aGl0ZVwiLz5cbiAgICAgICBcdFx0ICAgICAgICAgICAgICAgICAgICA8WEF4aXMgbWFyZ2luPXt7dG9wOjEwfX0gcGFkZGluZz17e3JpZ2h0OjE1fX0gZGF0YUtleT1cInN0bXBcIiBpbnRlcnZhbD17Nn0gc3Ryb2tlPVwiIzk5OTk5OVwiYW5nbGU9ey00NX0gLz5cbiAgICAgICBcdCAgICAgICAgICAgICAgICAgICAgICAgICAgIDxZQXhpcyBwYWRkaW5nPXt7dG9wOjV9fSBkeD17OH0gdGljaz17e3N0cm9rZTpcInJlZFwifX0gc3Ryb2tlPVwiIzk5OTk5OVwiIGludGVydmFsPXsxfSBkb21haW49e1tcImF1dG9cIiwgXCJhdXRvXCJdfS8+XG4gICAgICAgICAgICAgIFx0XHRcdCAgICAgIDwvTGluZUNoYXJ0PlxuXHRcdFx0XHQgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XG5cdFx0XHRcdDxkaXYgc3R5bGU9e3tcImZvbnQtc2l6ZVwiOlwiMTBweFwifX0+IFZvbHVtZToge2FDcnlwdG9bXCIxZFwiXVtcInZvbHVtZVwiXX1CPC9kaXY+XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpKX1cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG4gICBcdClcbiAgICB9XG59XG5cbi8vaW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9zd3IvaXNzdWVzLzE5MlxuZnVuY3Rpb24gdXNlU3RpY2t5UmVzdWx0ICh2YWwpXG57XG5cdGNvbnN0IG11dGFibGUgPSB1c2VSZWYoKVxuXHRpZih2YWwgIT09IHVuZGVmaW5lZCkgbXV0YWJsZS5jdXJyZW50ID0gdmFsXG5cdHJldHVybiBtdXRhYmxlLmN1cnJlbnRcbn1cblxuXG5mdW5jdGlvbiBnZXRDcnlwdG9zSW5mbyhxdWVyeSwgZG9HZXRQcmljZWhpc3Q9dHJ1ZSwgcHJpY2VJbnRlcnY9XCIxZFwiKSB7ICAgXG4gICAgLy92YXIgY2FsbCA9IFwiaHR0cHM6Ly9wZHAtMjAyMWNyeXB0by52ZXJjZWwuYXBwL2FwaS9nZXRDcnlwdG9JbmZvP3BhcmFtcz1cIlxuICAgIHZhciBjYWxsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2dldENyeXB0b0luZm8/cGFyYW1zPVwiXG4gICAgY29uc3QgZmV0Y2hlciA9IHVybCA9PiBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuXG4gICAgZm9yKHZhciBpbmRleCBpbiBxdWVyeSkge1xuIFx0aWYoK2luZGV4ICsgKzEgIT09IHF1ZXJ5Lmxlbmd0aCkgY2FsbCArPSBxdWVyeVtpbmRleF0gKyBcIixcIjtcbiAgICAgICAgZWxzZSBjYWxsICs9IHF1ZXJ5W2luZGV4XVxuICAgIH1cbiAgICAvL3doeSB3b3VsZCBzb21lb25lIG5vdCB3YW50IGdldFByaWNlSGlzdD8uLlxuICAgIGlmIChkb0dldFByaWNlaGlzdCkgY2FsbCArPSBcIiZwcmljZUhpc3Q9dHJ1ZVwiXG4gICAgY2FsbCArPSBcIiZwcmljZUludGVydj1cIiArIHByaWNlSW50ZXJ2ICBcblxuICAgIGNvbnN0IHtkYXRhLCBlcnJvciwgaXNWYWxpZGF0aW5nfSA9IHVzZVNXUihjYWxsLCBmZXRjaGVyKVxuICAgIGNvbnN0IHN0aWNreSA9IHVzZVN0aWNreVJlc3VsdChkYXRhKVxuXG4gICAgaWYoIWRhdGEgJiYgIXN0aWNreSAmJiBpc1ZhbGlkYXRpbmcpIHJldHVybiBudWxsXG5cbiAgICBlbHNlIGlmKGRhdGEpIHN0aWNreS5jdXJyZW50ID0gIGRhdGFcblxuICAgIHJldHVybiBzdGlja3kuY3VycmVudFxufVxuXG5cbmZ1bmN0aW9uIGdyYWJMQ0xTdG9yYWdlQ3J5cHRvcygpe1xuXHR0cnkge1xuXHRcdHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXlDcnlwdG9zXCIpKVtcImNyeXB0b3NcIl1cblx0fSBjYXRjaChlcnJvcikge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteUNyeXB0b3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1wiY3J5cHRvc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXNkdFwiLCBcImRvZ2VcIiwgXCJ4cnBcIl19KSlcblx0XHRyZXR1cm4ge1wiY3J5cHRvc1wiOiBbXCJ1c2R0XCIsIFwiZG9nZVwiLCBcInhycFwiXX1cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/cryptoDisplays.js\n");

/***/ })

});