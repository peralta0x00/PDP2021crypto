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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DetailedCrypto; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recharts */ \"./node_modules/recharts/es6/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/styles.module.css */ \"./styles/styles.module.css\");\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/kevinperalta/Documents/SUMMERPROJ/PDP2021crypto/pages/cryptoDetailed/[pid].js\",\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\nfunction DetailedCrypto() {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  var fetcher = function fetcher(url) {\n    return fetch(url).then(function (res) {\n      return res.json();\n    });\n  };\n\n  var getData = function getData(endpoint) {\n    _s();\n\n    var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_3__.default)(endpoint, fetcher),\n        data = _useSWR.data;\n\n    return data;\n  };\n\n  _s(getData, \"0sj2yJGYzZcCGI13NamvRceNarI=\", false, function () {\n    return [swr__WEBPACK_IMPORTED_MODULE_3__.default];\n  });\n\n  var getCryptoCall = \"http://localhost:3000/api/getCryptoInfo?params=\"; //const getCryptoCall =  \"https://pdp-2021crypto.vercel.app/api/getCryptoInfo?params=\"\n\n  var billion = 1000000000;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var pid = router.query.pid;\n\n  if (pid !== undefined) {\n    var data = getData(getCryptoCall + pid + \"&priceHist=true\" + \"&priceInterv=365d\");\n    if (!data) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: \"Loading content...\\\"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 20\n    }, this);\n    console.log(data);\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainBar),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: data[0][\"logo_url\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: [\"\\xA0\", data[0][\"name\"], \"($\", data[0][\"symbol\"], \")\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().priceBar),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [\"Price: \", data[0][\"price\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n          children: [\"MKT CAP:   1d VOL:    RANK:\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 38\n          }, this), data[0][\"market_cap\"], \"B    \", data[0][\"365d\"][\"volume\"], \"B     \", data[0][\"rank\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainContent),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.ResponsiveContainer, {\n            width: \"100%\",\n            height: 300,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.LineChart, {\n              data: data[0][\"prices\"],\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.Line, {\n                type: \"monotone\",\n                dataKey: \"prc\",\n                stroke: \"white\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 44,\n                columnNumber: 9\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.XAxis, {\n                stroke: \"#999999\",\n                dataKey: \"stmp\",\n                angle: -45\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 9\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.YAxis, {\n                stroke: \"#999999\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 9\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 8\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 8\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"365d performance\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 8\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 7\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().side),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: [\"About \", data[0][\"name\"]]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 8\n          }, this), \"All time high: \", data[0][\"high\"], /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 40\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 45\n          }, this), \"Maximum supply: \", data[0][\"max_supply\"], /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 47\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 52\n          }, this), \"First trade:   \", data[0][\"first_candle\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 7\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 14\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 4\n    }, this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading content...\\\"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 22\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 14\n    }, this);\n  }\n}\n\n_s2(DetailedCrypto, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = DetailedCrypto;\n\nvar _c;\n\n$RefreshReg$(_c, \"DetailedCrypto\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3J5cHRvRGV0YWlsZWQvW3BpZF0uanM/YzQwOCJdLCJuYW1lcyI6WyJEZXRhaWxlZENyeXB0byIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZ2V0RGF0YSIsImVuZHBvaW50IiwidXNlU1dSIiwiZGF0YSIsImdldENyeXB0b0NhbGwiLCJiaWxsaW9uIiwicm91dGVyIiwidXNlUm91dGVyIiwicGlkIiwicXVlcnkiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwibXlTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGNBQVQsR0FBMEI7QUFBQTs7QUFBQTs7QUFDeEMsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQUMsR0FBRztBQUFBLFdBQUlDLEtBQUssQ0FBQ0QsR0FBRCxDQUFMLENBQVdFLElBQVgsQ0FBZ0IsVUFBQUMsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsS0FBbkIsQ0FBSjtBQUFBLEdBQW5COztBQUNDLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLFFBQUQsRUFBYztBQUFBOztBQUFBLGtCQUNSQyw0Q0FBTSxDQUFDRCxRQUFELEVBQVdQLE9BQVgsQ0FERTtBQUFBLFFBQ2hCUyxJQURnQixXQUNoQkEsSUFEZ0I7O0FBRXZCLFdBQU9BLElBQVA7QUFDUCxHQUhBOztBQUZ1QyxLQUVqQ0gsT0FGaUM7QUFBQSxZQUdqQkUsd0NBSGlCO0FBQUE7O0FBTXhDLE1BQU1FLGFBQWEsR0FBSSxpREFBdkIsQ0FOd0MsQ0FPeEM7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFVBQWhCO0FBRUEsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQVZ3QyxNQVdoQ0MsR0FYZ0MsR0FXeEJGLE1BQU0sQ0FBQ0csS0FYaUIsQ0FX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QUFBO0FBQUEsa0JBSnhDLGVBSTZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSjdDLHFCQUt3QkEsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRLGNBQVIsQ0FMeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUREO0FBcUNBLEdBekNELE1BMENJO0FBQUMsd0JBQU8sOERBQUMsdURBQUQ7QUFBQSw2QkFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUF3RDtBQUM3RDs7SUF4RHVCVixjO1VBVVJjLGtEOzs7S0FWUWQsYyIsImZpbGUiOiIuL3BhZ2VzL2NyeXB0b0RldGFpbGVkL1twaWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQge0xpbmVDaGFydCwgTGluZSwgWEF4aXMsIFlBeGlzLCBDYXJ0ZXNpYW5HcmlkLCBUb29sdGlwLCBSZXNwb25zaXZlQ29udGFpbmVyfSBmcm9tICdyZWNoYXJ0cydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBteVN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvc3R5bGVzLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERldGFpbGVkQ3J5cHRvKCkge1xuXHRjb25zdCBmZXRjaGVyID0gdXJsID0+IGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG5cdFx0Y29uc3QgZ2V0RGF0YSA9IChlbmRwb2ludCkgPT4ge1xuICAgICAgICBcdGNvbnN0IHtkYXRhfSA9IHVzZVNXUihlbmRwb2ludCwgZmV0Y2hlcilcbiAgICAgICAgXHRyZXR1cm4gZGF0YVxuXHR9XG5cdGNvbnN0IGdldENyeXB0b0NhbGwgPSAgXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2dldENyeXB0b0luZm8/cGFyYW1zPVwiXG5cdC8vY29uc3QgZ2V0Q3J5cHRvQ2FsbCA9ICBcImh0dHBzOi8vcGRwLTIwMjFjcnlwdG8udmVyY2VsLmFwcC9hcGkvZ2V0Q3J5cHRvSW5mbz9wYXJhbXM9XCJcblx0Y29uc3QgYmlsbGlvbiA9IDEwMDAwMDAwMDBcdFxuXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cdGNvbnN0IHsgcGlkIH0gPSByb3V0ZXIucXVlcnlcblxuXHRpZiggcGlkICE9PSB1bmRlZmluZWQpIHtcblx0XHRjb25zdCBkYXRhID0gZ2V0RGF0YShnZXRDcnlwdG9DYWxsICsgcGlkICsgXCImcHJpY2VIaXN0PXRydWVcIiArIFwiJnByaWNlSW50ZXJ2PTM2NWRcIilcblx0XHRpZighZGF0YSkgcmV0dXJuIDxMYXlvdXQ+TG9hZGluZyBjb250ZW50Li4uXCI8L0xheW91dD5cblx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSlcblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e215U3R5bGVzLm1haW5CYXJ9PlxuXHRcdFx0XHRcdDxpbWcgc3JjPXtkYXRhWzBdW1wibG9nb191cmxcIl19PjwvaW1nPlxuXHRcdFx0XHRcdDxwPiZuYnNwO3tkYXRhWzBdW1wibmFtZVwiXX0gXG5cdFx0XHRcdFx0ICAgICgke2RhdGFbMF1bXCJzeW1ib2xcIl19KVxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtteVN0eWxlcy5wcmljZUJhcn0+XG5cdFx0XHRcdFx0PGRpdj5QcmljZToge2RhdGFbMF1bXCJwcmljZVwiXX0gIFxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxwcmU+TUtUIENBUDogICAxZCBWT0w6ICAgIFJBTks6PGJyLz5cblx0XHRcdFx0XHRcdHtkYXRhWzBdW1wibWFya2V0X2NhcFwiXX1CICAgIHtkYXRhWzBdW1wiMzY1ZFwiXVtcInZvbHVtZVwiXX1CICAgICB7ZGF0YVswXVtcInJhbmtcIl19XG5cdFx0XHRcdFx0PC9wcmU+IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICBcdFx0XHQgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtteVN0eWxlcy5tYWluQ29udGVudH0+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8UmVzcG9uc2l2ZUNvbnRhaW5lciB3aWR0aD0nMTAwJScgaGVpZ2h0PXszMDB9PlxuXHRcdFx0XHRcdFx0XHQ8TGluZUNoYXJ0ICBkYXRhPXtkYXRhWzBdW1wicHJpY2VzXCJdfT5cblx0XHRcdFx0XHRcdFx0XHQ8TGluZSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwicHJjXCIgc3Ryb2tlPVwid2hpdGVcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PFhBeGlzIHN0cm9rZT1cIiM5OTk5OTlcIiBkYXRhS2V5PVwic3RtcFwiYW5nbGU9ey00NX0gLz5cblx0XHRcdFx0XHRcdFx0XHQ8WUF4aXMgc3Ryb2tlID0gXCIjOTk5OTk5XCIvPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbmVDaGFydD5cblx0XHRcdFx0XHRcdFx0PC9SZXNwb25zaXZlQ29udGFpbmVyPlxuXHRcdFx0XHRcdFx0XHQ8cD4zNjVkIHBlcmZvcm1hbmNlPC9wPlxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e215U3R5bGVzLnNpZGV9PlxuXHRcdFx0XHRcdFx0XHQ8aDE+QWJvdXQge2RhdGFbMF1bXCJuYW1lXCJdfTwvaDE+XG5cblx0XHRcdFx0XHRcdFx0QWxsIHRpbWUgaGlnaDoge2RhdGFbMF1bXCJoaWdoXCJdfTxici8+PGJyLz5cblx0XHRcdFx0XHRcdFx0TWF4aW11bSBzdXBwbHk6IHtkYXRhWzBdW1wibWF4X3N1cHBseVwiXX08YnIvPjxici8+XG5cdFx0XHRcdFx0ICAgICAgICBcdEZpcnN0IHRyYWRlOiAgIHtkYXRhWzBdW1wiZmlyc3RfY2FuZGxlXCJdfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQpXG5cdH1cblx0ZWxzZXtyZXR1cm4gPExheW91dD48ZGl2PkxvYWRpbmcgY29udGVudC4uLlwiPC9kaXY+PC9MYXlvdXQ+IH1cbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/cryptoDetailed/[pid].js\n");

/***/ })

});