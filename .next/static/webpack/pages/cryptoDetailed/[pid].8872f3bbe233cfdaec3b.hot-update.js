/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cryptoDetailed/[pid]",{

/***/ "./pages/cryptoDetailed/[pid].js":
/*!***************************************!*\
  !*** ./pages/cryptoDetailed/[pid].js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DetailedCrypto; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recharts */ \"./node_modules/recharts/es6/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/styles.module.css */ \"./styles/styles.module.css\");\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/kevinperalta/Documents/SUMMERPROJ/PDP2021crypto/pages/cryptoDetailed/[pid].js\",\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\nfunction DetailedCrypto() {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  var fetcher = function fetcher(url) {\n    return fetch(url).then(function (res) {\n      return res.json();\n    });\n  };\n\n  var getData = function getData(endpoint) {\n    _s();\n\n    var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_3__.default)(endpoint, fetcher),\n        data = _useSWR.data;\n\n    return data;\n  };\n\n  _s(getData, \"0sj2yJGYzZcCGI13NamvRceNarI=\", false, function () {\n    return [swr__WEBPACK_IMPORTED_MODULE_3__.default];\n  });\n\n  var getCryptoCall = \"http://localhost:3000/api/getCryptoInfo?params=\"; //const getCryptoCall =  \"https://pdp-2021crypto.vercel.app/api/getCryptoInfo?params=\"\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var pid = router.query.pid;\n\n  if (pid !== undefined) {\n    var data = getData(getCryptoCall + pid + \"&priceHist=true\" + \"&priceInterv=365d\");\n    if (!data) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: \"Loading content... \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 20\n    }, this);\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainBar),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: data[0][\"logo_url\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: [\"\\xA0\", data[0][\"name\"], \"($\", data[0][\"symbol\"], \")\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().priceBar),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [\"Price: \", data[0][\"price\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n          children: [\"MKT CAP:   365d VOL:    RANK:\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 40\n          }, this), data[0][\"market_cap\"], \"B    \", data[0][\"365d\"][\"volume\"], \"B     \", data[0][\"rank\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainContent),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.ResponsiveContainer, {\n            width: \"100%\",\n            height: 300,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.LineChart, {\n              data: data[0][\"prices\"],\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.Line, {\n                type: \"monotone\",\n                dataKey: \"prc\",\n                stroke: \"white\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 9\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.XAxis, {\n                stroke: \"#999999\",\n                dataKey: \"stmp\",\n                angle: -45\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 9\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.YAxis, {\n                stroke: \"#999999\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 44,\n                columnNumber: 9\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 8\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 8\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [\"365d performance\", aCrypto[\"365d\"][\"price_change_pct\"]]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 8\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 7\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().side),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: [\"About \", data[0][\"name\"]]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 8\n          }, this), \"All time high: \", data[0][\"high\"], /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 40\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 45\n          }, this), \"Maximum supply: \", data[0][\"max_supply\"], /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 47\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 52\n          }, this), \"First trade:   \", data[0][\"first_candle\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 7\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 14\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 4\n    }, this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading content...\\\"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 22\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 14\n    }, this);\n  }\n}\n\n_s2(DetailedCrypto, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = DetailedCrypto;\n\nvar _c;\n\n$RefreshReg$(_c, \"DetailedCrypto\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3J5cHRvRGV0YWlsZWQvW3BpZF0uanM/YzQwOCJdLCJuYW1lcyI6WyJEZXRhaWxlZENyeXB0byIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZ2V0RGF0YSIsImVuZHBvaW50IiwidXNlU1dSIiwiZGF0YSIsImdldENyeXB0b0NhbGwiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwaWQiLCJxdWVyeSIsInVuZGVmaW5lZCIsIm15U3R5bGVzIiwiYUNyeXB0byJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsY0FBVCxHQUEwQjtBQUFBOztBQUFBOztBQUN4QyxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFBQyxHQUFHO0FBQUEsV0FBSUMsS0FBSyxDQUFDRCxHQUFELENBQUwsQ0FBV0UsSUFBWCxDQUFnQixVQUFBQyxHQUFHO0FBQUEsYUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxLQUFuQixDQUFKO0FBQUEsR0FBbkI7O0FBQ0MsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsUUFBRCxFQUFjO0FBQUE7O0FBQUEsa0JBQ1JDLDRDQUFNLENBQUNELFFBQUQsRUFBV1AsT0FBWCxDQURFO0FBQUEsUUFDaEJTLElBRGdCLFdBQ2hCQSxJQURnQjs7QUFFdkIsV0FBT0EsSUFBUDtBQUNQLEdBSEE7O0FBRnVDLEtBRWpDSCxPQUZpQztBQUFBLFlBR2pCRSx3Q0FIaUI7QUFBQTs7QUFNeEMsTUFBTUUsYUFBYSxHQUFJLGlEQUF2QixDQU53QyxDQU94Qzs7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBUndDLE1BU2hDQyxHQVRnQyxHQVN4QkYsTUFBTSxDQUFDRyxLQVRpQixDQVNoQ0QsR0FUZ0M7O0FBV3hDLE1BQUlBLEdBQUcsS0FBS0UsU0FBWixFQUF1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O0FBQUE7QUFBQSxrQkFKN0MscUJBS3dCQSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVEsY0FBUixDQUx4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYk87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFzQ0EsR0ExQ0QsTUEyQ0k7QUFBQyx3QkFBTyw4REFBQyx1REFBRDtBQUFBLDZCQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQXdEO0FBQzdEOztJQXZEdUJWLGM7VUFRUmEsa0Q7OztLQVJRYixjIiwiZmlsZSI6Ii4vcGFnZXMvY3J5cHRvRGV0YWlsZWQvW3BpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCB7TGluZUNoYXJ0LCBMaW5lLCBYQXhpcywgWUF4aXMsIENhcnRlc2lhbkdyaWQsIFRvb2x0aXAsIFJlc3BvbnNpdmVDb250YWluZXJ9IGZyb20gJ3JlY2hhcnRzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG15U3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9zdHlsZXMubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV0YWlsZWRDcnlwdG8oKSB7XG5cdGNvbnN0IGZldGNoZXIgPSB1cmwgPT4gZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcblx0XHRjb25zdCBnZXREYXRhID0gKGVuZHBvaW50KSA9PiB7XG4gICAgICAgIFx0Y29uc3Qge2RhdGF9ID0gdXNlU1dSKGVuZHBvaW50LCBmZXRjaGVyKVxuICAgICAgICBcdHJldHVybiBkYXRhXG5cdH1cblx0Y29uc3QgZ2V0Q3J5cHRvQ2FsbCA9ICBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ2V0Q3J5cHRvSW5mbz9wYXJhbXM9XCJcblx0Ly9jb25zdCBnZXRDcnlwdG9DYWxsID0gIFwiaHR0cHM6Ly9wZHAtMjAyMWNyeXB0by52ZXJjZWwuYXBwL2FwaS9nZXRDcnlwdG9JbmZvP3BhcmFtcz1cIlxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXHRjb25zdCB7IHBpZCB9ID0gcm91dGVyLnF1ZXJ5XG5cblx0aWYoIHBpZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Y29uc3QgZGF0YSA9IGdldERhdGEoZ2V0Q3J5cHRvQ2FsbCArIHBpZCArIFwiJnByaWNlSGlzdD10cnVlXCIgKyBcIiZwcmljZUludGVydj0zNjVkXCIpXG5cdFx0aWYoIWRhdGEpIHJldHVybiA8TGF5b3V0PkxvYWRpbmcgY29udGVudC4uLiA8L0xheW91dD5cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17bXlTdHlsZXMubWFpbkJhcn0+XG5cdFx0XHRcdFx0PGltZyBzcmM9e2RhdGFbMF1bXCJsb2dvX3VybFwiXX0+PC9pbWc+XG5cdFx0XHRcdFx0PHA+Jm5ic3A7e2RhdGFbMF1bXCJuYW1lXCJdfSBcblx0XHRcdFx0XHQgICAgKCR7ZGF0YVswXVtcInN5bWJvbFwiXX0pXG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e215U3R5bGVzLnByaWNlQmFyfT5cblx0XHRcdFx0XHQ8ZGl2PlByaWNlOiB7ZGF0YVswXVtcInByaWNlXCJdfSAgXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PHByZT5NS1QgQ0FQOiAgIDM2NWQgVk9MOiAgICBSQU5LOjxici8+XG5cdFx0XHRcdFx0XHR7ZGF0YVswXVtcIm1hcmtldF9jYXBcIl19QiAgICB7ZGF0YVswXVtcIjM2NWRcIl1bXCJ2b2x1bWVcIl19QiAgICAge2RhdGFbMF1bXCJyYW5rXCJdfVxuXHRcdFx0XHRcdDwvcHJlPiBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgXHRcdFx0ICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bXlTdHlsZXMubWFpbkNvbnRlbnR9PlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9JzEwMCUnIGhlaWdodD17MzAwfT5cblx0XHRcdFx0XHRcdFx0PExpbmVDaGFydCAgZGF0YT17ZGF0YVswXVtcInByaWNlc1wiXX0+XG5cdFx0XHRcdFx0XHRcdFx0PExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cInByY1wiIHN0cm9rZT1cIndoaXRlXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDxYQXhpcyBzdHJva2U9XCIjOTk5OTk5XCIgZGF0YUtleT1cInN0bXBcImFuZ2xlPXstNDV9IC8+XG5cdFx0XHRcdFx0XHRcdFx0PFlBeGlzIHN0cm9rZSA9IFwiIzk5OTk5OVwiLz5cblx0XHRcdFx0XHRcdFx0PC9MaW5lQ2hhcnQ+XG5cdFx0XHRcdFx0XHRcdDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cblx0XHRcdFx0XHRcdFx0PHA+MzY1ZCBwZXJmb3JtYW5jZVxuXHRcdFx0XHRcdFx0XHRcdHthQ3J5cHRvW1wiMzY1ZFwiXVtcInByaWNlX2NoYW5nZV9wY3RcIl19XG5cdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e215U3R5bGVzLnNpZGV9PlxuXHRcdFx0XHRcdFx0XHQ8aDE+QWJvdXQge2RhdGFbMF1bXCJuYW1lXCJdfTwvaDE+XG5cblx0XHRcdFx0XHRcdFx0QWxsIHRpbWUgaGlnaDoge2RhdGFbMF1bXCJoaWdoXCJdfTxici8+PGJyLz5cblx0XHRcdFx0XHRcdFx0TWF4aW11bSBzdXBwbHk6IHtkYXRhWzBdW1wibWF4X3N1cHBseVwiXX08YnIvPjxici8+XG5cdFx0XHRcdFx0ICAgICAgICBcdEZpcnN0IHRyYWRlOiAgIHtkYXRhWzBdW1wiZmlyc3RfY2FuZGxlXCJdfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQpXG5cdH1cblx0ZWxzZXtyZXR1cm4gPExheW91dD48ZGl2PkxvYWRpbmcgY29udGVudC4uLlwiPC9kaXY+PC9MYXlvdXQ+IH1cbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/cryptoDetailed/[pid].js\n");

/***/ })

});