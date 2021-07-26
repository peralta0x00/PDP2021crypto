/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/cryptoDetailed/[pid]";
exports.ids = ["pages/cryptoDetailed/[pid]"];
exports.modules = {

/***/ "./pages/cryptoDetailed/[pid].js":
/*!***************************************!*\
  !*** ./pages/cryptoDetailed/[pid].js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ detailedCrypto; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_sparklines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-sparklines */ \"react-sparklines\");\n/* harmony import */ var react_sparklines__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_sparklines__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/styles.module.css */ \"./styles/styles.module.css\");\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/kevinperalta/Documents/SUMMERPROJ/PDP2021crypto/pages/cryptoDetailed/[pid].js\";\n //import dynamic from 'next/dynamic'\n\n\n\n\n\nconst apiCALL = \"https://pdp-2021crypto.vercel.app/api/getCryptoInfo?params=\";\n\nconst fetcher = url => fetch(url).then(res => res.json());\n\nfunction detailedCrypto() {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const billion = 1000000000; //url query?\n\n  const {\n    pid\n  } = router.query; //During prerendering, the router's query object will be empty since we do not have query information to provide during this phase.\n\n  if (pid !== undefined) {\n    var call = apiCALL + pid + \"&priceHist=true\";\n    call += \"&priceInterv=365d\";\n    const {\n      data,\n      error\n    } = swr__WEBPACK_IMPORTED_MODULE_3___default()(call, fetcher);\n    if (!data) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: \"Loading content...\\\"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 20\n    }, this);\n    console.log(JSON.stringify(data[0]));\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainBar),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: data[0][\"logo_url\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          children: [data[0][\"name\"], \"($\", data[0][\"symbol\"], \")\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().priceBar),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [\"Price: \", data[0][\"price\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n          children: [\"MKT CAP:  1d VOL:  RANK:\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 35\n          }, this), Math.round(data[0][\"market_cap\"] / billion * 100) / 100, \"B    \", Math.round(data[0][\"1d\"][\"volume\"] / billion * 100) / 100, \"B    \", data[0][\"rank\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainContent),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sparklines__WEBPACK_IMPORTED_MODULE_4__.Sparklines, {\n            data: data[0][\"prices\"],\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sparklines__WEBPACK_IMPORTED_MODULE_4__.SparklinesLine, {\n              color: \"white\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 34\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sparklines__WEBPACK_IMPORTED_MODULE_4__.SparklinesReferenceLine, {\n              type: \"mean\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 34\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sparklines__WEBPACK_IMPORTED_MODULE_4__.SparklinesSpots, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 34\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 6\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().help),\n            children: \"365d performance\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 6\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 8\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().side),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: [\"About \", data[0][\"name\"]]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 6\n          }, this), \"All time high: \", data[0][\"high\"], /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 38\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 43\n          }, this), \"# circulating: \", data[0][\"circulating_supply\"], /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 52\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 57\n          }, this), \"First trade:   \", data[0][\"first_trade\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 8\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 14\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 4\n    }, this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading content...\\\"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 22\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 14\n    }, this);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9jcnlwdG9EZXRhaWxlZC9bcGlkXS5qcz9jNDA4Il0sIm5hbWVzIjpbImFwaUNBTEwiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRldGFpbGVkQ3J5cHRvIiwicm91dGVyIiwidXNlUm91dGVyIiwiYmlsbGlvbiIsInBpZCIsInF1ZXJ5IiwidW5kZWZpbmVkIiwiY2FsbCIsImRhdGEiLCJlcnJvciIsInVzZVNXUiIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwibXlTdHlsZXMiLCJNYXRoIiwicm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxPQUFPLEdBQUksNkRBQWpCOztBQUNBLE1BQU1DLE9BQU8sR0FBR0MsR0FBRyxJQUFJQyxLQUFLLENBQUNELEdBQUQsQ0FBTCxDQUFXRSxJQUFYLENBQWdCQyxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUF2QixDQUF2Qjs7QUFHZSxTQUFTQyxjQUFULEdBQTBCO0FBQ2pDLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxRQUFNQyxPQUFPLEdBQUcsVUFBaEIsQ0FGaUMsQ0FHeEM7O0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVVILE1BQU0sQ0FBQ0ksS0FBdkIsQ0FKd0MsQ0FLakM7O0FBQ1AsTUFBSUQsR0FBRyxLQUFLRSxTQUFaLEVBQXVCO0FBQ3RCLFFBQUlDLElBQUksR0FBR2QsT0FBTyxHQUFHVyxHQUFWLEdBQWdCLGlCQUEzQjtBQUNBRyxRQUFJLElBQUksbUJBQVI7QUFDQyxVQUFNO0FBQUNDLFVBQUQ7QUFBT0M7QUFBUCxRQUFnQkMsMENBQU0sQ0FBQ0gsSUFBRCxFQUFPYixPQUFQLENBQTVCO0FBQ0QsUUFBRyxDQUFDYyxJQUFKLEVBQVUsb0JBQU8sOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7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RDtBQUFBLDZCQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQXdEO0FBQzdEIiwiZmlsZSI6Ii4vcGFnZXMvY3J5cHRvRGV0YWlsZWQvW3BpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbi8vaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuaW1wb3J0IHsgU3BhcmtsaW5lcywgU3BhcmtsaW5lc1JlZmVyZW5jZUxpbmUsIFNwYXJrbGluZXNMaW5lLCBTcGFya2xpbmVzU3BvdHMgfSBmcm9tICdyZWFjdC1zcGFya2xpbmVzJ1xuaW1wb3J0IG15U3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9zdHlsZXMubW9kdWxlLmNzcydcbmNvbnN0IGFwaUNBTEwgPSAgXCJodHRwczovL3BkcC0yMDIxY3J5cHRvLnZlcmNlbC5hcHAvYXBpL2dldENyeXB0b0luZm8/cGFyYW1zPVwiXG5jb25zdCBmZXRjaGVyID0gdXJsID0+IGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV0YWlsZWRDcnlwdG8oKSB7XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgICAgIGNvbnN0IGJpbGxpb24gPSAxMDAwMDAwMDAwXG5cdC8vdXJsIHF1ZXJ5P1xuXHRjb25zdCB7IHBpZCB9ID0gcm91dGVyLnF1ZXJ5XG4gICAgICAgIC8vRHVyaW5nIHByZXJlbmRlcmluZywgdGhlIHJvdXRlcidzIHF1ZXJ5IG9iamVjdCB3aWxsIGJlIGVtcHR5IHNpbmNlIHdlIGRvIG5vdCBoYXZlIHF1ZXJ5IGluZm9ybWF0aW9uIHRvIHByb3ZpZGUgZHVyaW5nIHRoaXMgcGhhc2UuXG5cdGlmKCBwaWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBjYWxsID0gYXBpQ0FMTCArIHBpZCArIFwiJnByaWNlSGlzdD10cnVlXCJcblx0XHRjYWxsICs9IFwiJnByaWNlSW50ZXJ2PTM2NWRcIlxuIFx0XHRjb25zdCB7ZGF0YSwgZXJyb3J9ID0gdXNlU1dSKGNhbGwsIGZldGNoZXIpXHRcdFxuXHRcdGlmKCFkYXRhKSByZXR1cm4gPExheW91dD5Mb2FkaW5nIGNvbnRlbnQuLi5cIjwvTGF5b3V0PlxuXHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGFbMF0pKVxuXHQgICAgICAgIHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17bXlTdHlsZXMubWFpbkJhcn0gID5cblx0XHRcdFx0XHQ8aW1nIHNyYz17ZGF0YVswXVtcImxvZ29fdXJsXCJdfT48L2ltZz5cblx0XHRcdFx0XHQ8aDE+e2RhdGFbMF1bXCJuYW1lXCJdfSBcblx0XHRcdFx0XHQgICAgKCR7ZGF0YVswXVtcInN5bWJvbFwiXX0pXG5cdFx0XHRcdFx0PC9oMT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtteVN0eWxlcy5wcmljZUJhcn0+XG5cdFx0XHRcdFx0PGRpdj5QcmljZToge2RhdGFbMF1bXCJwcmljZVwiXX0gIFxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxwcmU+TUtUIENBUDogIDFkIFZPTDogIFJBTks6PGJyLz5cblx0XHRcdFx0XHRcdHtNYXRoLnJvdW5kKGRhdGFbMF1bXCJtYXJrZXRfY2FwXCJdIC8gYmlsbGlvbioxMDApLzEwMH1CICAgIHtNYXRoLnJvdW5kKGRhdGFbMF1bXCIxZFwiXVtcInZvbHVtZVwiXS9iaWxsaW9uKjEwMCkvMTAwfUIgICAge2RhdGFbMF1bXCJyYW5rXCJdfVxuXHRcdFx0XHRcdDwvcHJlPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgXHRcdFx0ICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bXlTdHlsZXMubWFpbkNvbnRlbnR9PlxuXHRcdFx0XHQgICA8ZGl2PlxuXHRcdFx0XHRcdDxTcGFya2xpbmVzIGRhdGE9e2RhdGFbMF1bXCJwcmljZXNcIl19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICA8U3BhcmtsaW5lc0xpbmUgY29sb3I9XCJ3aGl0ZVwiLz5cbiAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgICAgICA8U3BhcmtsaW5lc1JlZmVyZW5jZUxpbmUgdHlwZT1cIm1lYW5cIi8+XG4gICAgICAgIFx0ICAgICAgICAgICAgICAgICAgICAgICAgPFNwYXJrbGluZXNTcG90cy8+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgXHQ8L1NwYXJrbGluZXM+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtteVN0eWxlcy5oZWxwfT4zNjVkIHBlcmZvcm1hbmNlPC9wPlxuXHRcdFx0XHQgICA8L2Rpdj5cblx0XHRcdFx0ICAgPHAgY2xhc3NOYW1lPXtteVN0eWxlcy5zaWRlfT5cblx0XHRcdFx0XHQ8aDE+QWJvdXQge2RhdGFbMF1bXCJuYW1lXCJdfTwvaDE+XG5cdFx0XHRcdFx0QWxsIHRpbWUgaGlnaDoge2RhdGFbMF1bXCJoaWdoXCJdfTxici8+PGJyLz5cblx0XHRcdFx0XHQjIGNpcmN1bGF0aW5nOiB7ZGF0YVswXVtcImNpcmN1bGF0aW5nX3N1cHBseVwiXX08YnIvPjxici8+XG5cdFx0XHRcdCAgICAgICAgRmlyc3QgdHJhZGU6ICAge2RhdGFbMF1bXCJmaXJzdF90cmFkZVwiXX1cblx0XHRcdFx0ICAgPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdClcblx0fVxuXHRlbHNle3JldHVybiA8TGF5b3V0PjxkaXY+TG9hZGluZyBjb250ZW50Li4uXCI8L2Rpdj48L0xheW91dD4gfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/cryptoDetailed/[pid].js\n");

/***/ }),

/***/ "./styles/styles.module.css":
/*!**********************************!*\
  !*** ./styles/styles.module.css ***!
  \**********************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"tile\": \"styles_tile__2-Tnh\",\n\t\"mainGrid\": \"styles_mainGrid__1HDYl\",\n\t\"srcImage\": \"styles_srcImage__3mKRB\",\n\t\"side\": \"styles_side__CVvZs\",\n\t\"mainContent\": \"styles_mainContent__2xkR9\",\n\t\"priceBar\": \"styles_priceBar__1lDRn\",\n\t\"help\": \"styles_help__1QIJz\",\n\t\"mainBar\": \"styles_mainBar__1pTdS\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9zdHlsZXMvc3R5bGVzLm1vZHVsZS5jc3M/ZTFjNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL3N0eWxlcy5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGlsZVwiOiBcInN0eWxlc190aWxlX18yLVRuaFwiLFxuXHRcIm1haW5HcmlkXCI6IFwic3R5bGVzX21haW5HcmlkX18xSERZbFwiLFxuXHRcInNyY0ltYWdlXCI6IFwic3R5bGVzX3NyY0ltYWdlX18zbUtSQlwiLFxuXHRcInNpZGVcIjogXCJzdHlsZXNfc2lkZV9fQ1Z2WnNcIixcblx0XCJtYWluQ29udGVudFwiOiBcInN0eWxlc19tYWluQ29udGVudF9fMnhrUjlcIixcblx0XCJwcmljZUJhclwiOiBcInN0eWxlc19wcmljZUJhcl9fMWxEUm5cIixcblx0XCJoZWxwXCI6IFwic3R5bGVzX2hlbHBfXzFRSUp6XCIsXG5cdFwibWFpbkJhclwiOiBcInN0eWxlc19tYWluQmFyX18xcFRkU1wiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/styles.module.css\n");

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-sparklines":
/*!***********************************!*\
  !*** external "react-sparklines" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-sparklines");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_layout_js"], function() { return __webpack_exec__("./pages/cryptoDetailed/[pid].js"); });
module.exports = __webpack_exports__;

})();