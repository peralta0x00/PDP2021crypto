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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DetailedCrypto; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recharts */ \"./node_modules/recharts/es6/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/styles.module.css */ \"./styles/styles.module.css\");\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/kevinperalta/Documents/SUMMERPROJ/PDP2021crypto/pages/cryptoDetailed/[pid].js\",\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\nfunction DetailedCrypto() {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  var fetcher = function fetcher(url) {\n    return fetch(url).then(function (res) {\n      return res.json();\n    });\n  };\n\n  var getData = function getData(endpoint) {\n    _s();\n\n    var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_3__.default)(endpoint, fetcher),\n        data = _useSWR.data;\n\n    return data;\n  };\n\n  _s(getData, \"0sj2yJGYzZcCGI13NamvRceNarI=\", false, function () {\n    return [swr__WEBPACK_IMPORTED_MODULE_3__.default];\n  });\n\n  var getCryptoCall = \"http://localhost:3000/api/getCryptoInfo?params=\"; //const getCryptoCall =  \"https://pdp-2021crypto.vercel.app/api/getCryptoInfo?params=\"\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var pid = router.query.pid;\n\n  if (pid !== undefined) {\n    var data = getData(getCryptoCall + pid + \"&priceHist=true\" + \"&priceInterv=365d\");\n    if (!data) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: \"Loading content... \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 20\n    }, this);\n    console.log(data);\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainBar),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: data[0][\"logo_url\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: [\"\\xA0\", data[0][\"name\"], \"($\", data[0][\"symbol\"], \")\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().priceBar),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [\"Price: \", data[0][\"price\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n          children: [\"MKT CAP:   365d VOL:    RANK:\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 40\n          }, this), data[0][\"market_cap\"], \"B    \", data[0][\"365d\"][\"volume\"], \"B     \", data[0][\"rank\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainContent),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.ResponsiveContainer, {\n            width: \"100%\",\n            height: 300,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.LineChart, {\n              data: data[0][\"prices\"],\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.Line, {\n                type: \"monotone\",\n                dataKey: \"prc\",\n                stroke: \"white\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 9\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.XAxis, {\n                stroke: \"#999999\",\n                dataKey: \"stmp\",\n                angle: -45\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 9\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.YAxis, {\n                stroke: \"#999999\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 44,\n                columnNumber: 9\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 8\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 8\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"365d performance\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 8\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n              color: data[0][\"price_color\"]\n            },\n            children: [data[0][\"365d\"][\"price_change_pct\"], \"%\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 8\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 7\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().side),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: [\"About \", data[0][\"name\"]]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 8\n          }, this), \"All time high: \", data[0][\"high\"], /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 40\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 45\n          }, this), \"Maximum supply: \", data[0][\"max_supply\"], /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 47\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 52\n          }, this), \"First trade:   \", data[0][\"first_candle\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 7\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 14\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 4\n    }, this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading content...\\\"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 22\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 14\n    }, this);\n  }\n}\n\n_s2(DetailedCrypto, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = DetailedCrypto;\n\nvar _c;\n\n$RefreshReg$(_c, \"DetailedCrypto\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3J5cHRvRGV0YWlsZWQvW3BpZF0uanM/YzQwOCJdLCJuYW1lcyI6WyJEZXRhaWxlZENyeXB0byIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZ2V0RGF0YSIsImVuZHBvaW50IiwidXNlU1dSIiwiZGF0YSIsImdldENyeXB0b0NhbGwiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwaWQiLCJxdWVyeSIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJteVN0eWxlcyIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxjQUFULEdBQTBCO0FBQUE7O0FBQUE7O0FBQ3hDLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUFDLEdBQUc7QUFBQSxXQUFJQyxLQUFLLENBQUNELEdBQUQsQ0FBTCxDQUFXRSxJQUFYLENBQWdCLFVBQUFDLEdBQUc7QUFBQSxhQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLEtBQW5CLENBQUo7QUFBQSxHQUFuQjs7QUFDQyxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxRQUFELEVBQWM7QUFBQTs7QUFBQSxrQkFDUkMsNENBQU0sQ0FBQ0QsUUFBRCxFQUFXUCxPQUFYLENBREU7QUFBQSxRQUNoQlMsSUFEZ0IsV0FDaEJBLElBRGdCOztBQUV2QixXQUFPQSxJQUFQO0FBQ1AsR0FIQTs7QUFGdUMsS0FFakNILE9BRmlDO0FBQUEsWUFHakJFLHdDQUhpQjtBQUFBOztBQU14QyxNQUFNRSxhQUFhLEdBQUksaURBQXZCLENBTndDLENBT3hDOztBQUNBLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFSd0MsTUFTaENDLEdBVGdDLEdBU3hCRixNQUFNLENBQUNHLEtBVGlCLENBU2hDRCxHQVRnQzs7QUFXeEMsTUFBSUEsR0FBRyxL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Q0FBUSxNQUFSLENBSGpCLGVBR2lDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSGpDLGVBR3NDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSHRDLHNCQUlrQkEsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRLFlBQVIsQ0FKbEIsZUFJd0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKeEMsZUFJNkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKN0MscUJBS3dCQSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVEsY0FBUixDQUx4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWk87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFxQ0EsR0F6Q0QsTUEwQ0k7QUFBQyx3QkFBTyw4REFBQyx1REFBRDtBQUFBLDZCQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQXdEO0FBQzdEOztJQXREdUJWLGM7VUFRUmEsa0Q7OztLQVJRYixjIiwiZmlsZSI6Ii4vcGFnZXMvY3J5cHRvRGV0YWlsZWQvW3BpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCB7TGluZUNoYXJ0LCBMaW5lLCBYQXhpcywgWUF4aXMsIENhcnRlc2lhbkdyaWQsIFRvb2x0aXAsIFJlc3BvbnNpdmVDb250YWluZXJ9IGZyb20gJ3JlY2hhcnRzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG15U3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9zdHlsZXMubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV0YWlsZWRDcnlwdG8oKSB7XG5cdGNvbnN0IGZldGNoZXIgPSB1cmwgPT4gZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcblx0XHRjb25zdCBnZXREYXRhID0gKGVuZHBvaW50KSA9PiB7XG4gICAgICAgIFx0Y29uc3Qge2RhdGF9ID0gdXNlU1dSKGVuZHBvaW50LCBmZXRjaGVyKVxuICAgICAgICBcdHJldHVybiBkYXRhXG5cdH1cblx0Y29uc3QgZ2V0Q3J5cHRvQ2FsbCA9ICBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ2V0Q3J5cHRvSW5mbz9wYXJhbXM9XCJcblx0Ly9jb25zdCBnZXRDcnlwdG9DYWxsID0gIFwiaHR0cHM6Ly9wZHAtMjAyMWNyeXB0by52ZXJjZWwuYXBwL2FwaS9nZXRDcnlwdG9JbmZvP3BhcmFtcz1cIlxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXHRjb25zdCB7IHBpZCB9ID0gcm91dGVyLnF1ZXJ5XG5cblx0aWYoIHBpZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Y29uc3QgZGF0YSA9IGdldERhdGEoZ2V0Q3J5cHRvQ2FsbCArIHBpZCArIFwiJnByaWNlSGlzdD10cnVlXCIgKyBcIiZwcmljZUludGVydj0zNjVkXCIpXG5cdFx0aWYoIWRhdGEpIHJldHVybiA8TGF5b3V0PkxvYWRpbmcgY29udGVudC4uLiA8L0xheW91dD5cblx0XHRcdGNvbnNvbGUubG9nKGRhdGEpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtteVN0eWxlcy5tYWluQmFyfT5cblx0XHRcdFx0XHQ8aW1nIHNyYz17ZGF0YVswXVtcImxvZ29fdXJsXCJdfT48L2ltZz5cblx0XHRcdFx0XHQ8cD4mbmJzcDt7ZGF0YVswXVtcIm5hbWVcIl19IFxuXHRcdFx0XHRcdCAgICAoJHtkYXRhWzBdW1wic3ltYm9sXCJdfSlcblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17bXlTdHlsZXMucHJpY2VCYXJ9PlxuXHRcdFx0XHRcdDxkaXY+UHJpY2U6IHtkYXRhWzBdW1wicHJpY2VcIl19ICBcblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8cHJlPk1LVCBDQVA6ICAgMzY1ZCBWT0w6ICAgIFJBTks6PGJyLz5cblx0XHRcdFx0XHRcdHtkYXRhWzBdW1wibWFya2V0X2NhcFwiXX1CICAgIHtkYXRhWzBdW1wiMzY1ZFwiXVtcInZvbHVtZVwiXX1CICAgICB7ZGF0YVswXVtcInJhbmtcIl19XG5cdFx0XHRcdFx0PC9wcmU+IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICBcdFx0XHQgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtteVN0eWxlcy5tYWluQ29udGVudH0+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8UmVzcG9uc2l2ZUNvbnRhaW5lciB3aWR0aD0nMTAwJScgaGVpZ2h0PXszMDB9PlxuXHRcdFx0XHRcdFx0XHQ8TGluZUNoYXJ0ICBkYXRhPXtkYXRhWzBdW1wicHJpY2VzXCJdfT5cblx0XHRcdFx0XHRcdFx0XHQ8TGluZSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwicHJjXCIgc3Ryb2tlPVwid2hpdGVcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PFhBeGlzIHN0cm9rZT1cIiM5OTk5OTlcIiBkYXRhS2V5PVwic3RtcFwiYW5nbGU9ey00NX0gLz5cblx0XHRcdFx0XHRcdFx0XHQ8WUF4aXMgc3Ryb2tlID0gXCIjOTk5OTk5XCIvPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbmVDaGFydD5cblx0XHRcdFx0XHRcdFx0PC9SZXNwb25zaXZlQ29udGFpbmVyPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PjM2NWQgcGVyZm9ybWFuY2U8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e2NvbG9yOmRhdGFbMF1bXCJwcmljZV9jb2xvclwiXX19PntkYXRhWzBdW1wiMzY1ZFwiXVtcInByaWNlX2NoYW5nZV9wY3RcIl19JTwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17bXlTdHlsZXMuc2lkZX0+XG5cdFx0XHRcdFx0XHRcdDxoMT5BYm91dCB7ZGF0YVswXVtcIm5hbWVcIl19PC9oMT5cblxuXHRcdFx0XHRcdFx0XHRBbGwgdGltZSBoaWdoOiB7ZGF0YVswXVtcImhpZ2hcIl19PGJyLz48YnIvPlxuXHRcdFx0XHRcdFx0XHRNYXhpbXVtIHN1cHBseToge2RhdGFbMF1bXCJtYXhfc3VwcGx5XCJdfTxici8+PGJyLz5cblx0XHRcdFx0XHQgICAgICAgIFx0Rmlyc3QgdHJhZGU6ICAge2RhdGFbMF1bXCJmaXJzdF9jYW5kbGVcIl19XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdClcblx0fVxuXHRlbHNle3JldHVybiA8TGF5b3V0PjxkaXY+TG9hZGluZyBjb250ZW50Li4uXCI8L2Rpdj48L0xheW91dD4gfVxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/cryptoDetailed/[pid].js\n");

/***/ })

});