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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ detailedCrypto; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var react_sparklines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-sparklines */ \"./node_modules/react-sparklines/build/index.js\");\n/* harmony import */ var react_sparklines__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_sparklines__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/styles.module.css */ \"./styles/styles.module.css\");\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/kevinperalta/Documents/SUMMERPROJ/PDP2021crypto/pages/cryptoDetailed/[pid].js\",\n    _s = $RefreshSig$();\n\n //import dynamic from 'next/dynamic'\n\n\n\n\n\nvar apiCALL = \"https://pdp-2021crypto.vercel.app/api/getCryptoInfo?params=\";\n\nvar fetcher = function fetcher(url) {\n  return fetch(url).then(function (res) {\n    return res.json();\n  });\n};\n\nfunction detailedCrypto() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var billion = 1000000000; //url query?\n\n  var pid = router.query.pid; //During prerendering, the router's query object will be empty since we do not have query information to provide during this phase.\n\n  if (pid !== undefined) {\n    var call = apiCALL + pid + \"&priceHist=true\";\n    call += \"&priceInterv=365d\";\n\n    var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_3__.default)(call, fetcher),\n        data = _useSWR.data,\n        error = _useSWR.error;\n\n    if (!data) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: \"Loading content...\\\"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 20\n    }, this);\n    console.log(JSON.stringify(data[0]));\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainBar),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: data[0][\"logo_url\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          children: [data[0][\"name\"], \"($\", data[0][\"symbol\"], \")\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().priceBar),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [\"Price: \", data[0][\"price\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n          children: [\"MKT CAP:  1d VOL:  RANK:\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 35\n          }, this), Math.round(data[0][\"market_cap\"] / billion * 100) / 100, \"B    \", Math.round(data[0][\"1d\"][\"volume\"] / billion * 100) / 100, \"B    \", data[0][\"rank\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainContent),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sparklines__WEBPACK_IMPORTED_MODULE_4__.Sparklines, {\n            data: data[0][\"prices\"],\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sparklines__WEBPACK_IMPORTED_MODULE_4__.SparklinesLine, {\n              color: \"white\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 34\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sparklines__WEBPACK_IMPORTED_MODULE_4__.SparklinesReferenceLine, {\n              type: \"mean\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 34\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sparklines__WEBPACK_IMPORTED_MODULE_4__.SparklinesSpots, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 34\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 6\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 8\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().side),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: [\"About \", data[0][\"name\"]]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 6\n          }, this), \"All time high: \", data[0][\"high\"], /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 38\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 43\n          }, this), \"# circulating: \", data[0][\"circulating_supply\"], /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 52\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 57\n          }, this), \"First trade:   \", data[0][\"first_trade\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 8\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 14\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 4\n    }, this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading content...\\\"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 22\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 14\n    }, this);\n  }\n}\n\n_s(detailedCrypto, \"mZuyhWoEayG5q+fyCgnn11lj9Sg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, swr__WEBPACK_IMPORTED_MODULE_3__.default];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3J5cHRvRGV0YWlsZWQvW3BpZF0uanM/YzQwOCJdLCJuYW1lcyI6WyJhcGlDQUxMIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkZXRhaWxlZENyeXB0byIsInJvdXRlciIsInVzZVJvdXRlciIsImJpbGxpb24iLCJwaWQiLCJxdWVyeSIsInVuZGVmaW5lZCIsImNhbGwiLCJ1c2VTV1IiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsIm15U3R5bGVzIiwiTWF0aCIsInJvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsT0FBTyxHQUFJLDZEQUFqQjs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFBQyxHQUFHO0FBQUEsU0FBSUMsS0FBSyxDQUFDRCxHQUFELENBQUwsQ0FBV0UsSUFBWCxDQUFnQixVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxHQUFuQixDQUFKO0FBQUEsQ0FBbkI7O0FBR2UsU0FBU0MsY0FBVCxHQUEwQjtBQUFBOztBQUNqQyxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFVBQWhCLENBRmlDLENBR3hDOztBQUh3QyxNQUloQ0MsR0FKZ0MsR0FJeEJILE1BQU0sQ0FBQ0ksS0FKaUIsQ0FJaENELEdBSmdDLEVBS2pDOztBQUNQLE1BQUlBLEdBQUcsS0FBS0UsU0FBWixFQUF1QjtBQUN0QixRQUFJQyxJQUFJLEdBQUdkLE9BQU8sR0FBR1csR0FBVixHQUFnQixpQkFBM0I7QUFDQUcsUUFBSSxJQUFJLG1CQUFSOztBQUZzQixrQkFHQ0MsNENBQU0sQ0FBQ0QsSUFBRCxFQUFPYixPQUFQLENBSFA7QUFBQSxRQUdkZSxJQUhjLFdBR2RBLElBSGM7QUFBQSxRQUdSQyxLQUhRLFdBR1JBLEtBSFE7O0FBSXRCLFFBQUcsQ0FBQ0QsSUFBSixFQUFVLG9CQUFPLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDVkUsV0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTCxJQUFJLENBQUMsQ0FBRCxDQUFuQixDQUFaO0FBQ08sd0JBQ04sOERBQUMsdURBQUQ7QUFBQSw4QkFDQztBQUFLLGlCQUFTLEVBQUVNLDBFQUFoQjtBQUFBLGdDQUNDO0FBQUssYUFBRyxFQUFFTixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVEsVUFBUjtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFFQztBQUFBLHFCQUFLQSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVEsTUFBUixDQUFMLFFBQ09BLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUSxRQUFSLENBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBT0M7QUFBSyxpQkFBUyxFQUFFTSwyRUFBaEI7QUFBQSxnQ0FDQztBQUFBLGdDQUFhTixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVEsT0FBUixDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQUdDO0FBQUEsOERBQTZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQTdCLEVBQ0VPLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVEsWUFBUixJQUF3Qk4sT0FBeEIsR0FBZ0MsR0FBM0MsSUFBZ0QsR0FEbEQsV0FDNERhLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVEsSUFBUixFQUFjLFFBQWQsSUFBd0JOLE9BQXhCLEdBQWdDLEdBQTNDLElBQWdELEdBRDVHLFdBQ3NITSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVEsTUFBUixDQUR0SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEQsZUFjVTtBQUFLLGlCQUFTLEVBQUVNLDhFQUFoQjtBQUFBLGdDQUNOO0FBQUEsaUNBQ0YsOERBQUMsd0RBQUQ7QUFBWSxnQkFBSSxFQUFFTixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVEsUUFBUixDQUFsQjtBQUFBLG9DQUM0Qiw4REFBQyw0REFBRDtBQUFnQixtQkFBSyxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRDVCLGVBRTRCLDhEQUFDLHFFQUFEO0FBQXlCLGtCQUFJLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGNUIsZUFHNEIsOERBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFINUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFETSxlQVNOO0FBQUcsbUJBQVMsRUFBRU0sdUVBQWQ7QUFBQSxrQ0FDRjtBQUFBLGlDQUFXTixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVEsTUFBUixDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERSxxQkFFY0EsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRLE1BQVIsQ0FGZCxlQUU4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUY5QixlQUVtQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZuQyxxQkFHY0EsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRLG9CQUFSLENBSGQsZUFHNEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFINUMsZUFHaUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIakQscUJBSXFCQSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVEsYUFBUixDQUpyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRE07QUFpQ1AsR0F2Q0QsTUF3Q0k7QUFBQyx3QkFBTyw4REFBQyx1REFBRDtBQUFBLDZCQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQXdEO0FBQzdEOztHQS9DdUJULGM7VUFDREUsa0QsRUFRRU0sd0MiLCJmaWxlIjoiLi9wYWdlcy9jcnlwdG9EZXRhaWxlZC9bcGlkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuLy9pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgeyBTcGFya2xpbmVzLCBTcGFya2xpbmVzUmVmZXJlbmNlTGluZSwgU3BhcmtsaW5lc0xpbmUsIFNwYXJrbGluZXNTcG90cyB9IGZyb20gJ3JlYWN0LXNwYXJrbGluZXMnXG5pbXBvcnQgbXlTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3N0eWxlcy5tb2R1bGUuY3NzJ1xuY29uc3QgYXBpQ0FMTCA9ICBcImh0dHBzOi8vcGRwLTIwMjFjcnlwdG8udmVyY2VsLmFwcC9hcGkvZ2V0Q3J5cHRvSW5mbz9wYXJhbXM9XCJcbmNvbnN0IGZldGNoZXIgPSB1cmwgPT4gZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXRhaWxlZENyeXB0bygpIHtcbiAgICAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICAgICAgY29uc3QgYmlsbGlvbiA9IDEwMDAwMDAwMDBcblx0Ly91cmwgcXVlcnk/XG5cdGNvbnN0IHsgcGlkIH0gPSByb3V0ZXIucXVlcnlcbiAgICAgICAgLy9EdXJpbmcgcHJlcmVuZGVyaW5nLCB0aGUgcm91dGVyJ3MgcXVlcnkgb2JqZWN0IHdpbGwgYmUgZW1wdHkgc2luY2Ugd2UgZG8gbm90IGhhdmUgcXVlcnkgaW5mb3JtYXRpb24gdG8gcHJvdmlkZSBkdXJpbmcgdGhpcyBwaGFzZS5cblx0aWYoIHBpZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGNhbGwgPSBhcGlDQUxMICsgcGlkICsgXCImcHJpY2VIaXN0PXRydWVcIlxuXHRcdGNhbGwgKz0gXCImcHJpY2VJbnRlcnY9MzY1ZFwiXG4gXHRcdGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1IoY2FsbCwgZmV0Y2hlcilcdFx0XG5cdFx0aWYoIWRhdGEpIHJldHVybiA8TGF5b3V0PkxvYWRpbmcgY29udGVudC4uLlwiPC9MYXlvdXQ+XG5cdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YVswXSkpXG5cdCAgICAgICAgcmV0dXJuIChcblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtteVN0eWxlcy5tYWluQmFyfSAgPlxuXHRcdFx0XHRcdDxpbWcgc3JjPXtkYXRhWzBdW1wibG9nb191cmxcIl19PjwvaW1nPlxuXHRcdFx0XHRcdDxoMT57ZGF0YVswXVtcIm5hbWVcIl19IFxuXHRcdFx0XHRcdCAgICAoJHtkYXRhWzBdW1wic3ltYm9sXCJdfSlcblx0XHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e215U3R5bGVzLnByaWNlQmFyfT5cblx0XHRcdFx0XHQ8ZGl2PlByaWNlOiB7ZGF0YVswXVtcInByaWNlXCJdfSAgXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PHByZT5NS1QgQ0FQOiAgMWQgVk9MOiAgUkFOSzo8YnIvPlxuXHRcdFx0XHRcdFx0e01hdGgucm91bmQoZGF0YVswXVtcIm1hcmtldF9jYXBcIl0gLyBiaWxsaW9uKjEwMCkvMTAwfUIgICAge01hdGgucm91bmQoZGF0YVswXVtcIjFkXCJdW1widm9sdW1lXCJdL2JpbGxpb24qMTAwKS8xMDB9QiAgICB7ZGF0YVswXVtcInJhbmtcIl19XG5cdFx0XHRcdFx0PC9wcmU+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICBcdFx0XHQgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtteVN0eWxlcy5tYWluQ29udGVudH0+XG5cdFx0XHRcdCAgIDxkaXY+XG5cdFx0XHRcdFx0PFNwYXJrbGluZXMgZGF0YT17ZGF0YVswXVtcInByaWNlc1wiXX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDxTcGFya2xpbmVzTGluZSBjb2xvcj1cIndoaXRlXCIvPlxuICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgICAgIDxTcGFya2xpbmVzUmVmZXJlbmNlTGluZSB0eXBlPVwibWVhblwiLz5cbiAgICAgICAgXHQgICAgICAgICAgICAgICAgICAgICAgICA8U3BhcmtsaW5lc1Nwb3RzLz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICBcdDwvU3BhcmtsaW5lcz5cblx0XHRcdFx0XG5cdFx0XHRcdCAgIDwvZGl2PlxuXHRcdFx0XHQgICA8cCBjbGFzc05hbWU9e215U3R5bGVzLnNpZGV9PlxuXHRcdFx0XHRcdDxoMT5BYm91dCB7ZGF0YVswXVtcIm5hbWVcIl19PC9oMT5cblx0XHRcdFx0XHRBbGwgdGltZSBoaWdoOiB7ZGF0YVswXVtcImhpZ2hcIl19PGJyLz48YnIvPlxuXHRcdFx0XHRcdCMgY2lyY3VsYXRpbmc6IHtkYXRhWzBdW1wiY2lyY3VsYXRpbmdfc3VwcGx5XCJdfTxici8+PGJyLz5cblx0XHRcdFx0ICAgICAgICBGaXJzdCB0cmFkZTogICB7ZGF0YVswXVtcImZpcnN0X3RyYWRlXCJdfVxuXHRcdFx0XHQgICA8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KVxuXHR9XG5cdGVsc2V7cmV0dXJuIDxMYXlvdXQ+PGRpdj5Mb2FkaW5nIGNvbnRlbnQuLi5cIjwvZGl2PjwvTGF5b3V0PiB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/cryptoDetailed/[pid].js\n");

/***/ })

});