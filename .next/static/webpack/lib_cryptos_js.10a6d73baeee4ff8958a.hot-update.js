/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("lib_cryptos_js",{

/***/ "./lib/cryptos.js":
/*!************************!*\
  !*** ./lib/cryptos.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ getCurrentCryptos; },\n/* harmony export */   \"getCryptosInfo\": function() { return /* binding */ getCryptosInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/styles.module.css */ \"./styles/styles.module.css\");\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/kevinperalta/Documents/SUMMERPROJ/PDP2021crypto/lib/cryptos.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar fetcher = function fetcher(url) {\n  return fetch(url).then(function (res) {\n    return res.json();\n  });\n};\n\nfunction getCurrentCryptos() {\n  var _this = this;\n\n  if (localStorage.getItem('myCryptos') === null) {\n    localStorage.setItem('myCryptos', JSON.stringify({\n      \"cryptos\": [\"btc\", \"eth\", \"bat\", \"usdt\", \"doge\", \"xrp\"]\n    }));\n  } //now surely there's cryptos?\n\n\n  var pairs = JSON.parse(localStorage.getItem(\"myCryptos\"))[\"cryptos\"];\n  var allCryptosData = {};\n  allCryptosData = getCryptosInfo(pairs); //is this the best way to approach this?\n\n  if (allCryptosData === null) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: \"\\\"loading...\\\"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }, this);\n  }\n\n  console.log(allCryptosData);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().mainGrid),\n    children: pairs.map(function (aCrypto, index) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().tile),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          align: \"top\",\n          className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().srcImage),\n          src: allCryptosData[index][\"logo_url\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 6\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n          href: \"cryptoDetailed/\" + aCrypto,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: aCrypto\n          }, aCrypto, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 5\n          }, _this)\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [\"Price: \", allCryptosData[index][\"price\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 7\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [\" Volume:\", allCryptosData[index][\"1d\"][\"volume\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 7\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 4\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 2\n  }, this);\n}\nfunction getCryptosInfo(query) {\n  _s();\n\n  var call = \"http://localhost:3000/api/getCryptoInfo?params=\";\n\n  for (var index in query) {\n    if (+index + +1 !== query.length) call += query[index] + \",\";\n    if (+index + +1 === query.length) call += query[index];\n  }\n\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_1__.default)(call, fetcher),\n      data = _useSWR.data,\n      error = _useSWR.error;\n\n  if (!data) {\n    return null;\n  }\n\n  return data;\n}\n\n_s(getCryptosInfo, \"PLUSh3GLacfZJClYQJks7Deieck=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_1__.default];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NyeXB0b3MuanM/ZTVkYSJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImdldEN1cnJlbnRDcnlwdG9zIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicGFpcnMiLCJwYXJzZSIsImFsbENyeXB0b3NEYXRhIiwiZ2V0Q3J5cHRvc0luZm8iLCJjb25zb2xlIiwibG9nIiwibXlTdHlsZXMiLCJtYXAiLCJhQ3J5cHRvIiwiaW5kZXgiLCJxdWVyeSIsImNhbGwiLCJsZW5ndGgiLCJ1c2VTV1IiLCJkYXRhIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQUMsR0FBRztBQUFBLFNBQUlDLEtBQUssQ0FBQ0QsR0FBRCxDQUFMLENBQVdFLElBQVgsQ0FBZ0IsVUFBQUMsR0FBRztBQUFBLFdBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsR0FBbkIsQ0FBSjtBQUFBLENBQW5COztBQUVlLFNBQVNDLGlCQUFULEdBQTZCO0FBQUE7O0FBQ3pDLE1BQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixXQUFyQixNQUFzQyxJQUF6QyxFQUErQztBQUMxQ0QsZ0JBQVksQ0FBQ0UsT0FBYixDQUFxQixXQUFyQixFQUNBQyxJQUFJLENBQUNDLFNBQUwsQ0FBZ0I7QUFBQyxpQkFBVyxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUN6QixNQUR5QixFQUNqQixNQURpQixFQUNULEtBRFM7QUFBWixLQUFoQixDQURBO0FBR0osR0FMd0MsQ0FNekM7OztBQUNBLE1BQUlDLEtBQUssR0FBR0YsSUFBSSxDQUFDRyxLQUFMLENBQVdOLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixXQUFyQixDQUFYLEVBQThDLFNBQTlDLENBQVo7QUFDQSxNQUFJTSxjQUFjLEdBQUcsRUFBckI7QUFDQUEsZ0JBQWMsR0FBR0MsY0FBYyxDQUFDSCxLQUFELENBQS9CLENBVHlDLENBVXpDOztBQUNBLE1BQUdFLGNBQWMsS0FBSyxJQUF0QixFQUEyQjtBQUM3Qix3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0c7O0FBQ0RFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxjQUFaO0FBQ0Esc0JBQ0Y7QUFBSyxhQUFTLEVBQUlJLDJFQUFsQjtBQUFBLGNBQ0VOLEtBQUssQ0FBQ08sR0FBTixDQUFVLFVBQUNDLE9BQUQsRUFBU0MsS0FBVDtBQUFBLDBCQUNWO0FBQUssaUJBQVMsRUFBSUgsdUVBQWxCO0FBQUEsZ0NBQ0U7QUFBSyxlQUFLLEVBQUMsS0FBWDtBQUFpQixtQkFBUyxFQUFJQSwyRUFBOUI7QUFBZ0QsYUFBRyxFQUFJSixjQUFjLENBQUNPLEtBQUQsQ0FBZCxDQUFzQixVQUF0QjtBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUssOERBQUMsa0RBQUQ7QUFBaUIsY0FBSSxFQUFJLG9CQUFvQkQsT0FBN0M7QUFBQSxpQ0FDSjtBQUFBLHNCQUFvQkE7QUFBcEIsYUFBUUEsT0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREksV0FBV0MsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZMLGVBS0c7QUFBQSxnQ0FBYVAsY0FBYyxDQUFDTyxLQUFELENBQWQsQ0FBc0IsT0FBdEIsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEgsZUFNRztBQUFBLGlDQUFjUCxjQUFjLENBQUNPLEtBQUQsQ0FBZCxDQUFzQixJQUF0QixFQUE0QixRQUE1QixDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVTtBQUFBLEtBQVY7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREU7QUFjRjtBQUVNLFNBQVNOLGNBQVQsQ0FBd0JPLEtBQXhCLEVBQ1A7QUFBQTs7QUFDSSxNQUFJQyxJQUFJLEdBQUcsaURBQVg7O0FBQ0EsT0FBSSxJQUFJRixLQUFSLElBQWlCQyxLQUFqQixFQUNBO0FBQ0YsUUFBRyxDQUFDRCxLQUFELEdBQVMsQ0FBQyxDQUFWLEtBQWdCQyxLQUFLLENBQUNFLE1BQXpCLEVBQWlDRCxJQUFJLElBQUlELEtBQUssQ0FBQ0QsS0FBRCxDQUFMLEdBQWUsR0FBdkI7QUFDM0IsUUFBRyxDQUFDQSxLQUFELEdBQVMsQ0FBQyxDQUFWLEtBQWdCQyxLQUFLLENBQUNFLE1BQXpCLEVBQWlDRCxJQUFJLElBQUlELEtBQUssQ0FBQ0QsS0FBRCxDQUFiO0FBQ3BDOztBQU5MLGdCQVEwQkksNENBQU0sQ0FBQ0YsSUFBRCxFQUFPdkIsT0FBUCxDQVJoQztBQUFBLE1BUVcwQixJQVJYLFdBUVdBLElBUlg7QUFBQSxNQVFpQkMsS0FSakIsV0FRaUJBLEtBUmpCOztBQVNJLE1BQUcsQ0FBQ0QsSUFBSixFQUFVO0FBQ1AsV0FBTyxJQUFQO0FBQ0Y7O0FBRUQsU0FBT0EsSUFBUDtBQUNIOztHQWZlWCxjO1VBU1VVLHdDIiwiZmlsZSI6Ii4vbGliL2NyeXB0b3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSLCB7bXV0YXRlfSBmcm9tICdzd3InXG5pbXBvcnQgbXlTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3N0eWxlcy5tb2R1bGUuY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuXG5jb25zdCBmZXRjaGVyID0gdXJsID0+IGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEN1cnJlbnRDcnlwdG9zKCkge1xuICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215Q3J5cHRvcycpID09PSBudWxsKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteUNyeXB0b3MnLCBcblx0XHRcdCAgICAgSlNPTi5zdHJpbmdpZnkoIHtcImNyeXB0b3NcIjogW1wiYnRjXCIsIFwiZXRoXCIsIFwiYmF0XCIsXG5cdFx0XHRcdFx0ICAgICAgXCJ1c2R0XCIsIFwiZG9nZVwiLCBcInhycFwiXX0pKVxuICAgfVxuICAgLy9ub3cgc3VyZWx5IHRoZXJlJ3MgY3J5cHRvcz9cbiAgIHZhciBwYWlycyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJteUNyeXB0b3NcIikpW1wiY3J5cHRvc1wiXVxuICAgdmFyIGFsbENyeXB0b3NEYXRhID0ge31cbiAgIGFsbENyeXB0b3NEYXRhID0gZ2V0Q3J5cHRvc0luZm8ocGFpcnMpXG4gICAvL2lzIHRoaXMgdGhlIGJlc3Qgd2F5IHRvIGFwcHJvYWNoIHRoaXM/XG4gICBpZihhbGxDcnlwdG9zRGF0YSA9PT0gbnVsbCl7XG5cdHJldHVybiA8cD5cImxvYWRpbmcuLi5cIjwvcD5cbiAgIH1cbiAgIGNvbnNvbGUubG9nKGFsbENyeXB0b3NEYXRhKVxuICAgcmV0dXJuIChcblx0PGRpdiBjbGFzc05hbWUgPSB7bXlTdHlsZXMubWFpbkdyaWR9PlxuXHRcdHtwYWlycy5tYXAoKGFDcnlwdG8saW5kZXgpID0+IChcblx0XHRcdDxkaXYgY2xhc3NOYW1lID0ge215U3R5bGVzLnRpbGV9PlxuXHRcdFx0ICA8aW1nIGFsaWduPVwidG9wXCIgY2xhc3NOYW1lID0ge215U3R5bGVzLnNyY0ltYWdlfXNyYyA9IHthbGxDcnlwdG9zRGF0YVtpbmRleF1bXCJsb2dvX3VybFwiXX0+PC9pbWc+XG4gIFx0XHRcdCAgIDxMaW5rIGtleT17aW5kZXh9aHJlZiA9IHtcImNyeXB0b0RldGFpbGVkL1wiICsgYUNyeXB0b30+XG5cdFx0XHRcdDxhIGtleT17YUNyeXB0b30gID57YUNyeXB0b308L2E+XG5cdFx0XHQgICA8L0xpbms+XG5cdFx0XHQgICA8ZGl2PlByaWNlOiB7YWxsQ3J5cHRvc0RhdGFbaW5kZXhdW1wicHJpY2VcIl19PC9kaXY+XG5cdFx0XHQgICA8ZGl2PiBWb2x1bWU6e2FsbENyeXB0b3NEYXRhW2luZGV4XVtcIjFkXCJdW1widm9sdW1lXCJdfTwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KSl9XHRcblx0PC9kaXY+XHRcdFx0XG4gICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDcnlwdG9zSW5mbyhxdWVyeSlcbnsgICAgXG4gICAgdmFyIGNhbGwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ2V0Q3J5cHRvSW5mbz9wYXJhbXM9XCJcbiAgICBmb3IodmFyIGluZGV4IGluIHF1ZXJ5KVxuICAgIHtcbiBcdGlmKCtpbmRleCArICsxICE9PSBxdWVyeS5sZW5ndGgpIGNhbGwgKz0gcXVlcnlbaW5kZXhdICsgXCIsXCI7XG4gICAgICAgIGlmKCtpbmRleCArICsxID09PSBxdWVyeS5sZW5ndGgpIGNhbGwgKz0gcXVlcnlbaW5kZXhdXG4gICAgfVxuXG4gICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUihjYWxsLCBmZXRjaGVyKVxuICAgIGlmKCFkYXRhKSB7IFxuICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIFxuICAgIHJldHVybiBkYXRhXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/cryptos.js\n");

/***/ })

});