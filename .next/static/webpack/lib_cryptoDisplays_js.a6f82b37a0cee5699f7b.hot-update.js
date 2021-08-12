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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ displayCurrentCryptos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/styles.module.css */ \"./styles/styles.module.css\");\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recharts */ \"./node_modules/recharts/es6/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/kevinperalta/Documents/SUMMERPROJ/PDP2021crypto/lib/cryptoDisplays.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\n\n\n\n\n\n\nfunction displayCurrentCryptos() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      results = _useState[0],\n      setResults = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      search = _useState2[0],\n      setSearch = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(grabLCLStorageCryptos()),\n      pairs = _useState3[0],\n      setPairs = _useState3[1]; //pretty good at refreshing soon\n\n\n  var allCryptosMetadata = getCryptosInfo(pairs);\n\n  var getRelevantCoins = function getRelevantCoins(currSearch) {\n    var search = currSearch.target.value;\n\n    if (search) {\n      //fetch simpler than useswr, as prob dont need to hook onto specific search\n      var data = fetch(\"https://pdp-2021crypto.vercel.app/api/getRelevantCoins?param=\" + search).then(function (res) {\n        return res.json();\n      }).then(function (res) {\n        setResults(res[\"smlrCoins\"]);\n      });\n    } else {\n      //handles emptying searchquery to ''\n      setResults([]);\n    }\n  };\n\n  var addCoinSelection = function addCoinSelection(e) {\n    try {\n      var currStrg = JSON.parse(localStorage.getItem('myCryptos'))[\"cryptos\"];\n\n      if (!currStrg.includes(e.target.innerHTML)) {\n        currStrg.push(e.target.innerHTML);\n        localStorage.setItem('myCryptos', JSON.stringify({\n          \"cryptos\": currStrg\n        }));\n        setPairs(currStrg);\n      } else {\n        alert(\"you already have that!\");\n      }\n    } catch (error) {\n      alert(error);\n    }\n  }; //<div>1D % change: {Math.round(aCrypto[\"1d\"][\"price_change_pct\"]*100*100)/100}</div>  \n\n\n  if (allCryptosMetadata === null) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"\\\"loading...\\\"\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 44\n  }, this);else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().homePage),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"name\",\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().search),\n        placeholder: \"Search for coin tickers...\",\n        autoComplete: \"off\",\n        type: \"text\",\n        onChange: getRelevantCoins\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 3\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\" \", results.map(function (el, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: addCoinSelection,\n            children: el\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 6\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 4\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainGrid),\n        children: allCryptosMetadata.map(function (aCrypto, indx) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: aCrypto[\"id\"],\n            className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().tile),\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n              align: \"top\",\n              className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().srcImage),\n              src: aCrypto[\"logo_url\"]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 7\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n              href: \"cryptoDetailed/\" + aCrypto[\"id\"],\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                children: aCrypto[\"name\"]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 6\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 10\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              children: [aCrypto[\"price\"], /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 67,\n                columnNumber: 31\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 8\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              style: {\n                color: aCrypto[\"price_color\"]\n              },\n              children: [aCrypto[\"1d\"][\"price_change_pct\"], \"%\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 5\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.ResponsiveContainer, {\n              width: \"100%\",\n              height: 130,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.LineChart, {\n                data: aCrypto[\"prices\"],\n                dot: false,\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.Line, {\n                  type: \"monotone\",\n                  dataKey: \"prc\",\n                  stroke: \"white\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 72,\n                  columnNumber: 28\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.XAxis, {\n                  margin: {\n                    top: 10\n                  },\n                  padding: {\n                    right: 15\n                  },\n                  dataKey: \"stmp\",\n                  interval: 6,\n                  stroke: \"#999999\",\n                  angle: -45\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 73,\n                  columnNumber: 30\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.YAxis, {\n                  padding: {\n                    top: 5\n                  },\n                  dx: 8,\n                  tick: {\n                    strokeWidth: 2\n                  },\n                  stroke: \"#999999\",\n                  interval: 1,\n                  domain: [\"auto\", \"auto\"]\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 74,\n                  columnNumber: 36\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 71,\n                columnNumber: 10\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 9\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              style: {\n                \"font-size\": \"10px\"\n              },\n              children: [\" Volume: \", aCrypto[\"1d\"][\"volume\"], \"B\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 5\n            }, _this)]\n          }, indx, true, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 5\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 4\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 2\n    }, this);\n  }\n} //inspired by https://github.com/vercel/swr/issues/192\n\n_s(displayCurrentCryptos, \"Gy0NUgA1mHWIlxAPioGHyJ/b4yw=\");\n\nfunction useStickyResult(val) {\n  _s2();\n\n  var mutable = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n  if (val !== undefined) mutable.current = val;\n  return mutable.current;\n}\n\n_s2(useStickyResult, \"zp++H2OHZTudVr6LLs5U2nc9bw8=\");\n\nfunction getCryptosInfo(query) {\n  _s3();\n\n  var doGetPricehist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n  var priceInterv = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"1d\";\n  //var call = \"https://pdp-2021crypto.vercel.app/api/getCryptoInfo?params=\"\n  var call = \"http://localhost:3000/api/getCryptoInfo?params=\";\n\n  var fetcher = function fetcher(url) {\n    return fetch(url).then(function (res) {\n      return res.json();\n    });\n  };\n\n  for (var index in query) {\n    if (+index + +1 !== query.length) call += query[index] + \",\";else call += query[index];\n  } //why would someone not want getPriceHist?..\n\n\n  if (doGetPricehist) call += \"&priceHist=true\";\n  call += \"&priceInterv=\" + priceInterv;\n\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_1__.default)(call, fetcher),\n      data = _useSWR.data,\n      error = _useSWR.error,\n      isValidating = _useSWR.isValidating;\n\n  var sticky = useStickyResult(data);\n  if (!data && !sticky && isValidating) return null;else if (data) sticky.current = data;\n  return sticky.current;\n}\n\n_s3(getCryptosInfo, \"aD8Sx0S+lKCCW5S/aYssbNc08FE=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_1__.default, useStickyResult];\n});\n\nfunction grabLCLStorageCryptos() {\n  try {\n    return JSON.parse(localStorage.getItem(\"myCryptos\"))[\"cryptos\"];\n  } catch (error) {\n    localStorage.setItem('myCryptos', JSON.stringify({\n      \"cryptos\": [\"usdt\", \"doge\", \"xrp\"]\n    }));\n    return {\n      \"cryptos\": [\"usdt\", \"doge\", \"xrp\"]\n    };\n  }\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NyeXB0b0Rpc3BsYXlzLmpzPzE2NWIiXSwibmFtZXMiOlsiZGlzcGxheUN1cnJlbnRDcnlwdG9zIiwidXNlU3RhdGUiLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsInNlYXJjaCIsInNldFNlYXJjaCIsImdyYWJMQ0xTdG9yYWdlQ3J5cHRvcyIsInBhaXJzIiwic2V0UGFpcnMiLCJhbGxDcnlwdG9zTWV0YWRhdGEiLCJnZXRDcnlwdG9zSW5mbyIsImdldFJlbGV2YW50Q29pbnMiLCJjdXJyU2VhcmNoIiwidGFyZ2V0IiwidmFsdWUiLCJkYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImFkZENvaW5TZWxlY3Rpb24iLCJlIiwiY3VyclN0cmciLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaW5jbHVkZXMiLCJpbm5lckhUTUwiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImFsZXJ0IiwiZXJyb3IiLCJteVN0eWxlcyIsIm1hcCIsImVsIiwiaW5kZXgiLCJhQ3J5cHRvIiwiaW5keCIsImNvbG9yIiwidG9wIiwicmlnaHQiLCJzdHJva2VXaWR0aCIsInVzZVN0aWNreVJlc3VsdCIsInZhbCIsIm11dGFibGUiLCJ1c2VSZWYiLCJ1bmRlZmluZWQiLCJjdXJyZW50IiwicXVlcnkiLCJkb0dldFByaWNlaGlzdCIsInByaWNlSW50ZXJ2IiwiY2FsbCIsImZldGNoZXIiLCJ1cmwiLCJsZW5ndGgiLCJ1c2VTV1IiLCJpc1ZhbGlkYXRpbmciLCJzdGlja3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLHFCQUFULEdBQWlDO0FBQUE7O0FBQUE7O0FBQUEsa0JBRWZDLCtDQUFRLENBQUMsRUFBRCxDQUZPO0FBQUEsTUFFdENDLE9BRnNDO0FBQUEsTUFFN0JDLFVBRjZCOztBQUFBLG1CQUdq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QUFFZCxTQUFPNEMsTUFBTSxDQUFDVixPQUFkO0FBQ0g7O0lBckJRdkMsYztVQWErQitDLHdDLEVBQ3JCYixlOzs7QUFVbkIsU0FBU3RDLHFCQUFULEdBQWdDO0FBQy9CLE1BQUk7QUFDSCxXQUFPaUIsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixXQUFyQixDQUFYLEVBQThDLFNBQTlDLENBQVA7QUFDQSxHQUZELENBRUUsT0FBTU8sS0FBTixFQUFhO0FBQ2RSLGdCQUFZLENBQUNLLE9BQWIsQ0FBcUIsV0FBckIsRUFDK0JQLElBQUksQ0FBQ1EsU0FBTCxDQUFlO0FBQUMsaUJBQVcsQ0FDVixNQURVLEVBQ0YsTUFERSxFQUNNLEtBRE47QUFBWixLQUFmLENBRC9CO0FBR0EsV0FBTztBQUFDLGlCQUFXLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsS0FBakI7QUFBWixLQUFQO0FBQ0E7QUFDRCIsImZpbGUiOiIuL2xpYi9jcnlwdG9EaXNwbGF5cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IsIHttdXRhdGV9IGZyb20gJ3N3cidcbmltcG9ydCBteVN0eWxlcyBmcm9tICcuLi9zdHlsZXMvc3R5bGVzLm1vZHVsZS5jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQge3VzZVN0YXRlLCBpc1ZhbGlkYXRpbmcsIHVzZUNhbGxiYWNrLCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IHtMaW5lQ2hhcnQsIExpbmUsIFhBeGlzLCBZQXhpcywgQ2FydGVzaWFuR3JpZCwgUmVzcG9uc2l2ZUNvbnRhaW5lciwgVG9vbHRpcH0gZnJvbSAncmVjaGFydHMnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRDcnlwdG9zKCkge1xuXG4gICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZShbXSlcbiAgIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJykgXG4gICBjb25zdCBbcGFpcnMsIHNldFBhaXJzXSA9IHVzZVN0YXRlKGdyYWJMQ0xTdG9yYWdlQ3J5cHRvcygpKSAvL3ByZXR0eSBnb29kIGF0IHJlZnJlc2hpbmcgc29vblxuICAgdmFyIGFsbENyeXB0b3NNZXRhZGF0YSA9IGdldENyeXB0b3NJbmZvKHBhaXJzKVxuIFxuICAgY29uc3QgZ2V0UmVsZXZhbnRDb2lucyA9IChjdXJyU2VhcmNoKSA9PiB7XG5cdFx0Y29uc3Qgc2VhcmNoID0gY3VyclNlYXJjaC50YXJnZXQudmFsdWVcblx0XHRpZihzZWFyY2gpIHtcblx0XHRcdC8vZmV0Y2ggc2ltcGxlciB0aGFuIHVzZXN3ciwgYXMgcHJvYiBkb250IG5lZWQgdG8gaG9vayBvbnRvIHNwZWNpZmljIHNlYXJjaFxuXHRcdFx0Y29uc3QgZGF0YSA9IGZldGNoKFwiaHR0cHM6Ly9wZHAtMjAyMWNyeXB0by52ZXJjZWwuYXBwL2FwaS9nZXRSZWxldmFudENvaW5zP3BhcmFtPVwiK3NlYXJjaClcblx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuXHRcdFx0LnRoZW4ocmVzID0+IHtcblx0XHRcdFx0c2V0UmVzdWx0cyhyZXNbXCJzbWxyQ29pbnNcIl0pXG5cdFx0XHR9KVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdC8vaGFuZGxlcyBlbXB0eWluZyBzZWFyY2hxdWVyeSB0byAnJ1xuXHRcdFx0c2V0UmVzdWx0cyhbXSlcblx0XHR9XG4gICB9XG4gICBjb25zdCBhZGRDb2luU2VsZWN0aW9uID0gKGUpID0+IHtcblx0dHJ5IHtcblx0XHR2YXIgY3VyclN0cmcgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteUNyeXB0b3MnKSlbXCJjcnlwdG9zXCJdXG5cdFx0aWYoIWN1cnJTdHJnLmluY2x1ZGVzKGUudGFyZ2V0LmlubmVySFRNTCkpIHtcblx0XHRcdGN1cnJTdHJnLnB1c2goZS50YXJnZXQuaW5uZXJIVE1MKVxuXHQgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215Q3J5cHRvcycsIEpTT04uc3RyaW5naWZ5KHtcImNyeXB0b3NcIjogY3VyclN0cmd9KSlcblx0XHRcdHNldFBhaXJzKGN1cnJTdHJnKVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGFsZXJ0KFwieW91IGFscmVhZHkgaGF2ZSB0aGF0IVwiKVxuXHRcdH1cblx0fSBjYXRjaChlcnJvcikge1xuXHRcdGFsZXJ0KGVycm9yKVxuXHR9XG4gICB9IFxuICAgXG4gICAvLzxkaXY+MUQgJSBjaGFuZ2U6IHtNYXRoLnJvdW5kKGFDcnlwdG9bXCIxZFwiXVtcInByaWNlX2NoYW5nZV9wY3RcIl0qMTAwKjEwMCkvMTAwfTwvZGl2PiAgXG4gICBpZihhbGxDcnlwdG9zTWV0YWRhdGEgPT09IG51bGwgKSByZXR1cm4gPHA+XCJsb2FkaW5nLi4uXCI8L3A+XG4gICBlbHNlIHtcblx0cmV0dXJuIChcblx0PGRpdiBjbGFzc05hbWU9e215U3R5bGVzLmhvbWVQYWdlfT5cblx0XHQ8aW5wdXQgaWQ9XCJuYW1lXCIgY2xhc3NOYW1lPXtteVN0eWxlcy5zZWFyY2h9IHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBjb2luIHRpY2tlcnMuLi5cIiBhdXRvQ29tcGxldGUgPSBcIm9mZlwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2dldFJlbGV2YW50Q29pbnN9Lz5cblx0XHRcdDxkaXY+IHtcblx0XHRcdFx0cmVzdWx0cy5tYXAoKGVsLCBpbmRleCkgPT4gKFxuXHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17YWRkQ29pblNlbGVjdGlvbn0ga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHR7ZWx9XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0IFx0ICAgICAgKSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lID0ge215U3R5bGVzLm1haW5HcmlkfT5cblx0XHRcdHthbGxDcnlwdG9zTWV0YWRhdGEubWFwKChhQ3J5cHRvLCBpbmR4KSA9PiAoXG5cdFx0XHRcdDxkaXYgaWQ9e2FDcnlwdG9bXCJpZFwiXX0ga2V5PXtpbmR4fSBjbGFzc05hbWUgPSB7bXlTdHlsZXMudGlsZX0+XG5cdFx0XHRcdCAgPGltZyBhbGlnbj1cInRvcFwiIGNsYXNzTmFtZSA9IHtteVN0eWxlcy5zcmNJbWFnZX1zcmMgPSB7YUNyeXB0b1tcImxvZ29fdXJsXCJdfT48L2ltZz5cbiAgXHRcdFx0XHQgICA8TGluayBocmVmID0ge1wiY3J5cHRvRGV0YWlsZWQvXCIgKyBhQ3J5cHRvW1wiaWRcIl19PlxuXHRcdFx0XHRcdDxhPnthQ3J5cHRvW1wibmFtZVwiXX08L2E+XG5cdFx0XHRcdCAgIDwvTGluaz5cblx0XHRcdFx0ICAgPGRpdj57YUNyeXB0b1tcInByaWNlXCJdfTxici8+PC9kaXY+XG5cdFx0XHRcdDxkaXYgc3R5bGU9e3tjb2xvcjphQ3J5cHRvW1wicHJpY2VfY29sb3JcIl19fT57YUNyeXB0b1tcIjFkXCJdW1wicHJpY2VfY2hhbmdlX3BjdFwiXX0lPC9kaXY+XG5cblx0XHRcdFx0ICAgIDxSZXNwb25zaXZlQ29udGFpbmVyIHdpZHRoPScxMDAlJyBoZWlnaHQ9ezEzMH0+XG5cdFx0XHRcdCAgICAgPExpbmVDaGFydCBkYXRhPXthQ3J5cHRvW1wicHJpY2VzXCJdfSBkb3Q9e2ZhbHNlfT5cblx0ICAgICBcdCAgICAgICAgICAgICAgICAgICAgPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cInByY1wiIHN0cm9rZT1cIndoaXRlXCIvPlxuICAgICAgIFx0XHQgICAgICAgICAgICAgICAgICAgIDxYQXhpcyBtYXJnaW49e3t0b3A6MTB9fSBwYWRkaW5nPXt7cmlnaHQ6MTV9fSBkYXRhS2V5PVwic3RtcFwiIGludGVydmFsPXs2fSBzdHJva2U9XCIjOTk5OTk5XCJhbmdsZT17LTQ1fSAvPlxuICAgICAgIFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgPFlBeGlzIHBhZGRpbmc9e3t0b3A6NX19IGR4PXs4fSB0aWNrPXt7c3Ryb2tlV2lkdGg6Mn19IHN0cm9rZT1cIiM5OTk5OTlcIiBpbnRlcnZhbD17MX0gZG9tYWluPXtbXCJhdXRvXCIsIFwiYXV0b1wiXX0vPlxuICAgICAgICAgICAgICBcdFx0XHQgICAgICA8L0xpbmVDaGFydD5cblx0XHRcdFx0ICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7XCJmb250LXNpemVcIjpcIjEwcHhcIn19PiBWb2x1bWU6IHthQ3J5cHRvW1wiMWRcIl1bXCJ2b2x1bWVcIl19QjwvZGl2PlxuXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KSl9XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuICAgXHQpXG4gICAgfVxufVxuXG4vL2luc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvc3dyL2lzc3Vlcy8xOTJcbmZ1bmN0aW9uIHVzZVN0aWNreVJlc3VsdCAodmFsKVxue1xuXHRjb25zdCBtdXRhYmxlID0gdXNlUmVmKClcblx0aWYodmFsICE9PSB1bmRlZmluZWQpIG11dGFibGUuY3VycmVudCA9IHZhbFxuXHRyZXR1cm4gbXV0YWJsZS5jdXJyZW50XG59XG5cblxuZnVuY3Rpb24gZ2V0Q3J5cHRvc0luZm8ocXVlcnksIGRvR2V0UHJpY2VoaXN0PXRydWUsIHByaWNlSW50ZXJ2PVwiMWRcIikgeyAgIFxuICAgIC8vdmFyIGNhbGwgPSBcImh0dHBzOi8vcGRwLTIwMjFjcnlwdG8udmVyY2VsLmFwcC9hcGkvZ2V0Q3J5cHRvSW5mbz9wYXJhbXM9XCJcbiAgICB2YXIgY2FsbCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9nZXRDcnlwdG9JbmZvP3BhcmFtcz1cIlxuICAgIGNvbnN0IGZldGNoZXIgPSB1cmwgPT4gZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcblxuICAgIGZvcih2YXIgaW5kZXggaW4gcXVlcnkpIHtcbiBcdGlmKCtpbmRleCArICsxICE9PSBxdWVyeS5sZW5ndGgpIGNhbGwgKz0gcXVlcnlbaW5kZXhdICsgXCIsXCI7XG4gICAgICAgIGVsc2UgY2FsbCArPSBxdWVyeVtpbmRleF1cbiAgICB9XG4gICAgLy93aHkgd291bGQgc29tZW9uZSBub3Qgd2FudCBnZXRQcmljZUhpc3Q/Li5cbiAgICBpZiAoZG9HZXRQcmljZWhpc3QpIGNhbGwgKz0gXCImcHJpY2VIaXN0PXRydWVcIlxuICAgIGNhbGwgKz0gXCImcHJpY2VJbnRlcnY9XCIgKyBwcmljZUludGVydiAgXG5cbiAgICBjb25zdCB7ZGF0YSwgZXJyb3IsIGlzVmFsaWRhdGluZ30gPSB1c2VTV1IoY2FsbCwgZmV0Y2hlcilcbiAgICBjb25zdCBzdGlja3kgPSB1c2VTdGlja3lSZXN1bHQoZGF0YSlcblxuICAgIGlmKCFkYXRhICYmICFzdGlja3kgJiYgaXNWYWxpZGF0aW5nKSByZXR1cm4gbnVsbFxuXG4gICAgZWxzZSBpZihkYXRhKSBzdGlja3kuY3VycmVudCA9ICBkYXRhXG5cbiAgICByZXR1cm4gc3RpY2t5LmN1cnJlbnRcbn1cblxuXG5mdW5jdGlvbiBncmFiTENMU3RvcmFnZUNyeXB0b3MoKXtcblx0dHJ5IHtcblx0XHRyZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15Q3J5cHRvc1wiKSlbXCJjcnlwdG9zXCJdXG5cdH0gY2F0Y2goZXJyb3IpIHtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlDcnlwdG9zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcImNyeXB0b3NcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVzZHRcIiwgXCJkb2dlXCIsIFwieHJwXCJdfSkpXG5cdFx0cmV0dXJuIHtcImNyeXB0b3NcIjogW1widXNkdFwiLCBcImRvZ2VcIiwgXCJ4cnBcIl19XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/cryptoDisplays.js\n");

/***/ })

});