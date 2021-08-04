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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DetailedCrypto; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_sparklines__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-sparklines */ \"react-sparklines\");\n/* harmony import */ var react_sparklines__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_sparklines__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/styles.module.css */ \"./styles/styles.module.css\");\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Users/kevinperalta/Documents/SUMMERPROJ/PDP2021crypto/pages/cryptoDetailed/[pid].js\";\n\n\n\n\n\n\nconst getCryptoCall = \"https://pdp-2021crypto.vercel.app/api/getCryptoInfo?params=\";\nconst getTACall = \"https://pdp-2021crypto.vercel.app/api/getTAIndicators?params=\";\n\nconst fetcher = url => fetch(url).then(res => res.json());\n\nconst getData = endpoint => {\n  const {\n    data\n  } = swr__WEBPACK_IMPORTED_MODULE_3___default()(endpoint, fetcher);\n  console.log(\"giving data\");\n  console.log(data);\n  return data;\n};\n\nfunction DetailedCrypto() {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const billion = 1000000000; //url query?\n\n  const {\n    pid\n  } = router.query; //During prerendering, the router's query object will be empty since we do not have query information to provide during this phase.\n\n  if (pid !== undefined) {\n    const data = getData(getCryptoCall + pid + \"&priceHist=true\" + \"&priceInterv=365d\");\n    const taDATA = getData(getTACall + pid);\n    if (!data || !taDATA) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: \"Loading content...\\\"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 31\n    }, this);\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().mainBar),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: data[0][\"logo_url\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          children: [data[0][\"name\"], \"($\", data[0][\"symbol\"], \")\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().priceBar),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [\"Price: \", data[0][\"price\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n          children: [\"MKT CAP:  1d VOL:  RANK:\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 35\n          }, this), Math.round(data[0][\"market_cap\"] / billion * 100) / 100, \"B    \", Math.round(data[0][\"1d\"][\"volume\"] / billion * 100) / 100, \"B    \", data[0][\"rank\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().mainContent),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          id: \"sprk\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sparklines__WEBPACK_IMPORTED_MODULE_5__.Sparklines, {\n            data: data[0][\"prices\"],\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sparklines__WEBPACK_IMPORTED_MODULE_5__.SparklinesLine, {\n              color: \"white\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 8\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 6\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sparklines__WEBPACK_IMPORTED_MODULE_5__.Sparklines, {\n            data: taDATA[\"20dMA\"],\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sparklines__WEBPACK_IMPORTED_MODULE_5__.SparklinesLine, {\n              color: \"red\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 7\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 6\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().side),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: [\"About \", data[0][\"name\"]]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 6\n          }, this), \"All time high: \", data[0][\"high\"], /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 38\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 43\n          }, this), \"# circulating: \", data[0][\"circulating_supply\"], /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 52\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 57\n          }, this), \"First trade:   \", data[0][\"first_trade\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 8\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 14\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 4\n    }, this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading content...\\\"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 22\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 14\n    }, this);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9jcnlwdG9EZXRhaWxlZC9bcGlkXS5qcz9jNDA4Il0sIm5hbWVzIjpbImdldENyeXB0b0NhbGwiLCJnZXRUQUNhbGwiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImdldERhdGEiLCJlbmRwb2ludCIsImRhdGEiLCJ1c2VTV1IiLCJjb25zb2xlIiwibG9nIiwiRGV0YWlsZWRDcnlwdG8iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJiaWxsaW9uIiwicGlkIiwicXVlcnkiLCJ1bmRlZmluZWQiLCJ0YURBVEEiLCJteVN0eWxlcyIsIk1hdGgiLCJyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLGFBQWEsR0FBSSw2REFBdkI7QUFDQSxNQUFNQyxTQUFTLEdBQUcsK0RBQWxCOztBQUNBLE1BQU1DLE9BQU8sR0FBR0MsR0FBRyxJQUFJQyxLQUFLLENBQUNELEdBQUQsQ0FBTCxDQUFXRSxJQUFYLENBQWdCQyxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUF2QixDQUF2Qjs7QUFFQSxNQUFNQyxPQUFPLEdBQUlDLFFBQUQsSUFBYztBQUM3QixRQUFNO0FBQUNDO0FBQUQsTUFBU0MsMENBQU0sQ0FBQ0YsUUFBRCxFQUFXUCxPQUFYLENBQXJCO0FBQ0FVLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQUQsU0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDQSxTQUFPQSxJQUFQO0FBQ0EsQ0FMRDs7QUFPZSxTQUFTSSxjQUFULEdBQTBCO0FBQ2pDLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxRQUFNQyxPQUFPLEdBQUcsVUFBaEIsQ0FGaUMsQ0FHeEM7O0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVVILE1BQU0sQ0FBQ0ksS0FBdkIsQ0FKd0MsQ0FLakM7O0FBQ1As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LENBQUQsQ0FBSixDQUFRLGFBQVIsQ0FMckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUREO0FBb0NBLEdBeENELE1BeUNJO0FBQUMsd0JBQU8sOERBQUMsdURBQUQ7QUFBQSw2QkFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUF3RDtBQUM3RCIsImZpbGUiOiIuL3BhZ2VzL2NyeXB0b0RldGFpbGVkL1twaWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTcGFya2xpbmVzLCBTcGFya2xpbmVzTGluZX0gZnJvbSAncmVhY3Qtc3BhcmtsaW5lcydcbmltcG9ydCBteVN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvc3R5bGVzLm1vZHVsZS5jc3MnXG5jb25zdCBnZXRDcnlwdG9DYWxsID0gIFwiaHR0cHM6Ly9wZHAtMjAyMWNyeXB0by52ZXJjZWwuYXBwL2FwaS9nZXRDcnlwdG9JbmZvP3BhcmFtcz1cIlxuY29uc3QgZ2V0VEFDYWxsID0gXCJodHRwczovL3BkcC0yMDIxY3J5cHRvLnZlcmNlbC5hcHAvYXBpL2dldFRBSW5kaWNhdG9ycz9wYXJhbXM9XCJcbmNvbnN0IGZldGNoZXIgPSB1cmwgPT4gZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcblxuY29uc3QgZ2V0RGF0YSA9IChlbmRwb2ludCkgPT4ge1xuXHRjb25zdCB7ZGF0YX0gPSB1c2VTV1IoZW5kcG9pbnQsIGZldGNoZXIpXG5cdGNvbnNvbGUubG9nKFwiZ2l2aW5nIGRhdGFcIilcblx0Y29uc29sZS5sb2coZGF0YSlcblx0cmV0dXJuIGRhdGFcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV0YWlsZWRDcnlwdG8oKSB7XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgICAgIGNvbnN0IGJpbGxpb24gPSAxMDAwMDAwMDAwXG5cdC8vdXJsIHF1ZXJ5P1xuXHRjb25zdCB7IHBpZCB9ID0gcm91dGVyLnF1ZXJ5XG4gICAgICAgIC8vRHVyaW5nIHByZXJlbmRlcmluZywgdGhlIHJvdXRlcidzIHF1ZXJ5IG9iamVjdCB3aWxsIGJlIGVtcHR5IHNpbmNlIHdlIGRvIG5vdCBoYXZlIHF1ZXJ5IGluZm9ybWF0aW9uIHRvIHByb3ZpZGUgZHVyaW5nIHRoaXMgcGhhc2UuXG5cdGlmKCBwaWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdGNvbnN0IGRhdGEgPSBnZXREYXRhKGdldENyeXB0b0NhbGwgKyBwaWQgKyBcIiZwcmljZUhpc3Q9dHJ1ZVwiICsgXCImcHJpY2VJbnRlcnY9MzY1ZFwiKVxuXHRcdGNvbnN0IHRhREFUQSA9IGdldERhdGEoZ2V0VEFDYWxsICsgcGlkKSBcblx0XHRpZighZGF0YSB8fCAhdGFEQVRBKSByZXR1cm4gPExheW91dD5Mb2FkaW5nIGNvbnRlbnQuLi5cIjwvTGF5b3V0PlxuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17bXlTdHlsZXMubWFpbkJhcn0gID5cblx0XHRcdFx0XHQ8aW1nIHNyYz17ZGF0YVswXVtcImxvZ29fdXJsXCJdfT48L2ltZz5cblx0XHRcdFx0XHQ8aDE+e2RhdGFbMF1bXCJuYW1lXCJdfSBcblx0XHRcdFx0XHQgICAgKCR7ZGF0YVswXVtcInN5bWJvbFwiXX0pXG5cdFx0XHRcdFx0PC9oMT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtteVN0eWxlcy5wcmljZUJhcn0+XG5cdFx0XHRcdFx0PGRpdj5QcmljZToge2RhdGFbMF1bXCJwcmljZVwiXX0gIFxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxwcmU+TUtUIENBUDogIDFkIFZPTDogIFJBTks6PGJyLz5cblx0XHRcdFx0XHRcdHtNYXRoLnJvdW5kKGRhdGFbMF1bXCJtYXJrZXRfY2FwXCJdIC8gYmlsbGlvbioxMDApLzEwMH1CICAgIHtNYXRoLnJvdW5kKGRhdGFbMF1bXCIxZFwiXVtcInZvbHVtZVwiXS9iaWxsaW9uKjEwMCkvMTAwfUIgICAge2RhdGFbMF1bXCJyYW5rXCJdfVxuXHRcdFx0XHRcdDwvcHJlPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgXHRcdFx0ICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bXlTdHlsZXMubWFpbkNvbnRlbnR9PlxuXHRcdFx0XHRcdDxkaXYgaWQ9XCJzcHJrXCI+XG5cdFx0XHRcdFx0PFNwYXJrbGluZXMgZGF0YT17ZGF0YVswXVtcInByaWNlc1wiXX0+XG5cdFx0XHRcdFx0XHQgPFNwYXJrbGluZXNMaW5lIGNvbG9yID1cIndoaXRlXCIvPlxuICAgICAgICAgICAgICAgXHQgXHRcdFx0PC9TcGFya2xpbmVzPlxuXHRcdFx0XHRcdDxTcGFya2xpbmVzIGRhdGE9e3RhREFUQVtcIjIwZE1BXCJdfT5cblx0XHRcdFx0XHRcdDxTcGFya2xpbmVzTGluZSBjb2xvciA9XCJyZWRcIi8+XG5cdFx0XHRcdFx0PC9TcGFya2xpbmVzPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cblx0XHRcdFx0ICAgPGRpdiBjbGFzc05hbWU9e215U3R5bGVzLnNpZGV9PlxuXHRcdFx0XHRcdDxoMT5BYm91dCB7ZGF0YVswXVtcIm5hbWVcIl19PC9oMT5cblxuXHRcdFx0XHRcdEFsbCB0aW1lIGhpZ2g6IHtkYXRhWzBdW1wiaGlnaFwiXX08YnIvPjxici8+XG5cdFx0XHRcdFx0IyBjaXJjdWxhdGluZzoge2RhdGFbMF1bXCJjaXJjdWxhdGluZ19zdXBwbHlcIl19PGJyLz48YnIvPlxuXHRcdFx0XHQgICAgICAgIEZpcnN0IHRyYWRlOiAgIHtkYXRhWzBdW1wiZmlyc3RfdHJhZGVcIl19XG5cdFx0XHRcdCAgIDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdClcblx0fVxuXHRlbHNle3JldHVybiA8TGF5b3V0PjxkaXY+TG9hZGluZyBjb250ZW50Li4uXCI8L2Rpdj48L0xheW91dD4gfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/cryptoDetailed/[pid].js\n");

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