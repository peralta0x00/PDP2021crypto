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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DetailedCrypto; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recharts */ \"recharts\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/styles.module.css */ \"./styles/styles.module.css\");\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Users/kevinperalta/Documents/SUMMERPROJ/PDP2021crypto/pages/cryptoDetailed/[pid].js\";\n\n\n\n\n\n\nfunction DetailedCrypto() {\n  const fetcher = url => fetch(url).then(res => res.json());\n\n  const getData = endpoint => {\n    const {\n      data\n    } = swr__WEBPACK_IMPORTED_MODULE_3___default()(endpoint, fetcher);\n    return data;\n  };\n\n  const getCryptoCall = \"https://pdp-2021crypto.vercel.app/api/getCryptoInfo?params=\";\n  const billion = 1000000000;\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const {\n    pid\n  } = router.query;\n\n  if (pid !== undefined) {\n    const data = getData(getCryptoCall + pid + \"&priceHist=true\" + \"&priceInterv=365d\");\n    if (!data) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: \"Loading content...\\\"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 20\n    }, this);\n    console.log(data);\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().mainBar),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: data[0][\"logo_url\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: [\"\\xA0\", data[0][\"name\"], \"($\", data[0][\"symbol\"], \")\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().priceBar),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [\"Price: \", data[0][\"price\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n          children: [\"MKT CAP:  1d VOL:  RANK:\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 35\n          }, this), Math.round(data[0][\"market_cap\"] / billion * 100) / 100, \"B    \", data[0][\"1d\"][\"volume\"], \"B    \", data[0][\"rank\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().mainContent),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"365d performance\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 8\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.ResponsiveContainer, {\n            width: \"100%\",\n            height: 300,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.LineChart, {\n              data: data[0][\"prices\"],\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.Line, {\n                type: \"monotone\",\n                dataKey: \"prc\",\n                stroke: \"white\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 44,\n                columnNumber: 9\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.XAxis, {\n                stroke: \"#999999\",\n                dataKey: \"stmp\",\n                angle: -45\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 9\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.YAxis, {\n                stroke: \"#999999\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 9\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 8\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 8\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 7\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().side),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: [\"About \", data[0][\"name\"]]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 8\n          }, this), \"All time high: \", data[0][\"high\"], /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 40\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 45\n          }, this), \"# circulating: \", data[0][\"circulating_supply\"], /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 54\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 59\n          }, this), \"First trade:   \", data[0][\"first_trade\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 7\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 14\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 4\n    }, this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading content...\\\"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 22\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 14\n    }, this);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9jcnlwdG9EZXRhaWxlZC9bcGlkXS5qcz9jNDA4Il0sIm5hbWVzIjpbIkRldGFpbGVkQ3J5cHRvIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJnZXREYXRhIiwiZW5kcG9pbnQiLCJkYXRhIiwidXNlU1dSIiwiZ2V0Q3J5cHRvQ2FsbCIsImJpbGxpb24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwaWQiLCJxdWVyeSIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJteVN0eWxlcyIsIk1hdGgiLCJyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGNBQVQsR0FBMEI7QUFDeEMsUUFBTUMsT0FBTyxHQUFHQyxHQUFHLElBQUlDLEtBQUssQ0FBQ0QsR0FBRCxDQUFMLENBQVdFLElBQVgsQ0FBZ0JDLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQXZCLENBQXZCOztBQUNDLFFBQU1DLE9BQU8sR0FBSUMsUUFBRCxJQUFjO0FBQ3ZCLFVBQU07QUFBQ0M7QUFBRCxRQUFTQywwQ0FBTSxDQUFDRixRQUFELEVBQVdQLE9BQVgsQ0FBckI7QUFDQSxXQUFPUSxJQUFQO0FBQ1AsR0FIQTs7QUFJRCxRQUFNRSxhQUFhLEdBQUksNkRBQXZCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHLFVBQWhCO0FBRUEsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFVRixNQUFNLENBQUNHLEtBQXZCOztBQUVBLE1BQUlELEdBQUcsS0FBS0UsU0FBWixFQUF1QjtBQUN0QixVQUFNUixJQUFJLEdBQUdGLE9BQU8sQ0FBQ0ksYUFBYSxHQUFHSSxHQUFoQixHQUFzQixpQkFBdEIsR0FBMEMsbUJBQTNDLENBQXBCO0FBQ0EsUUFBRyxDQUFDTixJQUFKLEVBQVUsb0JB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QUFBO0FBQUE7QUFBQSxnQkFYTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERDtBQW9DQSxHQXhDRCxNQXlDSTtBQUFDLHdCQUFPLDhEQUFDLHVEQUFEO0FBQUEsNkJBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFBd0Q7QUFDN0QiLCJmaWxlIjoiLi9wYWdlcy9jcnlwdG9EZXRhaWxlZC9bcGlkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuaW1wb3J0IHtMaW5lQ2hhcnQsIExpbmUsIFhBeGlzLCBZQXhpcywgQ2FydGVzaWFuR3JpZCwgVG9vbHRpcCwgUmVzcG9uc2l2ZUNvbnRhaW5lcn0gZnJvbSAncmVjaGFydHMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbXlTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3N0eWxlcy5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWxlZENyeXB0bygpIHtcblx0Y29uc3QgZmV0Y2hlciA9IHVybCA9PiBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuXHRcdGNvbnN0IGdldERhdGEgPSAoZW5kcG9pbnQpID0+IHtcbiAgICAgICAgXHRjb25zdCB7ZGF0YX0gPSB1c2VTV1IoZW5kcG9pbnQsIGZldGNoZXIpXG4gICAgICAgIFx0cmV0dXJuIGRhdGFcblx0fVxuXHRjb25zdCBnZXRDcnlwdG9DYWxsID0gIFwiaHR0cHM6Ly9wZHAtMjAyMWNyeXB0by52ZXJjZWwuYXBwL2FwaS9nZXRDcnlwdG9JbmZvP3BhcmFtcz1cIlxuXHRjb25zdCBiaWxsaW9uID0gMTAwMDAwMDAwMFx0XG5cblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblx0Y29uc3QgeyBwaWQgfSA9IHJvdXRlci5xdWVyeVxuXG5cdGlmKCBwaWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdGNvbnN0IGRhdGEgPSBnZXREYXRhKGdldENyeXB0b0NhbGwgKyBwaWQgKyBcIiZwcmljZUhpc3Q9dHJ1ZVwiICsgXCImcHJpY2VJbnRlcnY9MzY1ZFwiKVxuXHRcdGlmKCFkYXRhKSByZXR1cm4gPExheW91dD5Mb2FkaW5nIGNvbnRlbnQuLi5cIjwvTGF5b3V0PlxuXHRcdGNvbnNvbGUubG9nKGRhdGEpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtteVN0eWxlcy5tYWluQmFyfT5cblx0XHRcdFx0XHQ8aW1nIHNyYz17ZGF0YVswXVtcImxvZ29fdXJsXCJdfT48L2ltZz5cblx0XHRcdFx0XHQ8cD4mbmJzcDt7ZGF0YVswXVtcIm5hbWVcIl19IFxuXHRcdFx0XHRcdCAgICAoJHtkYXRhWzBdW1wic3ltYm9sXCJdfSlcblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17bXlTdHlsZXMucHJpY2VCYXJ9PlxuXHRcdFx0XHRcdDxkaXY+UHJpY2U6IHtkYXRhWzBdW1wicHJpY2VcIl19ICBcblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8cHJlPk1LVCBDQVA6ICAxZCBWT0w6ICBSQU5LOjxici8+XG5cdFx0XHRcdFx0XHR7TWF0aC5yb3VuZChkYXRhWzBdW1wibWFya2V0X2NhcFwiXSAvIGJpbGxpb24qMTAwKS8xMDB9QiAgICB7ZGF0YVswXVtcIjFkXCJdW1widm9sdW1lXCJdfUIgICAge2RhdGFbMF1bXCJyYW5rXCJdfVxuXHRcdFx0XHRcdDwvcHJlPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgXHRcdFx0ICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bXlTdHlsZXMubWFpbkNvbnRlbnR9PlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PHA+MzY1ZCBwZXJmb3JtYW5jZTwvcD5cblx0XHRcdFx0XHRcdFx0PFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9JzEwMCUnIGhlaWdodD17MzAwfT5cblx0XHRcdFx0XHRcdFx0PExpbmVDaGFydCAgZGF0YT17ZGF0YVswXVtcInByaWNlc1wiXX0+XG5cdFx0XHRcdFx0XHRcdFx0PExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cInByY1wiIHN0cm9rZT1cIndoaXRlXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDxYQXhpcyBzdHJva2U9XCIjOTk5OTk5XCIgZGF0YUtleT1cInN0bXBcImFuZ2xlPXstNDV9IC8+XG5cdFx0XHRcdFx0XHRcdFx0PFlBeGlzIHN0cm9rZSA9IFwiIzk5OTk5OVwiLz5cblx0XHRcdFx0XHRcdFx0PC9MaW5lQ2hhcnQ+XG5cdFx0XHRcdFx0XHRcdDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e215U3R5bGVzLnNpZGV9PlxuXHRcdFx0XHRcdFx0XHQ8aDE+QWJvdXQge2RhdGFbMF1bXCJuYW1lXCJdfTwvaDE+XG5cblx0XHRcdFx0XHRcdFx0QWxsIHRpbWUgaGlnaDoge2RhdGFbMF1bXCJoaWdoXCJdfTxici8+PGJyLz5cblx0XHRcdFx0XHRcdFx0IyBjaXJjdWxhdGluZzoge2RhdGFbMF1bXCJjaXJjdWxhdGluZ19zdXBwbHlcIl19PGJyLz48YnIvPlxuXHRcdFx0XHRcdCAgICAgICAgXHRGaXJzdCB0cmFkZTogICB7ZGF0YVswXVtcImZpcnN0X3RyYWRlXCJdfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQpXG5cdH1cblx0ZWxzZXtyZXR1cm4gPExheW91dD48ZGl2PkxvYWRpbmcgY29udGVudC4uLlwiPC9kaXY+PC9MYXlvdXQ+IH1cbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/cryptoDetailed/[pid].js\n");

/***/ }),

/***/ "./styles/styles.module.css":
/*!**********************************!*\
  !*** ./styles/styles.module.css ***!
  \**********************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"homePage\": \"styles_homePage___gMtk\",\n\t\"mainGrid\": \"styles_mainGrid__1HDYl\",\n\t\"tile\": \"styles_tile__2-Tnh\",\n\t\"search\": \"styles_search__3qgQj\",\n\t\"srcImage\": \"styles_srcImage__3mKRB\",\n\t\"side\": \"styles_side__CVvZs\",\n\t\"mainContent\": \"styles_mainContent__2xkR9\",\n\t\"priceBar\": \"styles_priceBar__1lDRn\",\n\t\"mainBar\": \"styles_mainBar__1pTdS\",\n\t\"aboutPage\": \"styles_aboutPage__1Dfd-\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9zdHlsZXMvc3R5bGVzLm1vZHVsZS5jc3M/ZTFjNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy9zdHlsZXMubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhvbWVQYWdlXCI6IFwic3R5bGVzX2hvbWVQYWdlX19fZ010a1wiLFxuXHRcIm1haW5HcmlkXCI6IFwic3R5bGVzX21haW5HcmlkX18xSERZbFwiLFxuXHRcInRpbGVcIjogXCJzdHlsZXNfdGlsZV9fMi1UbmhcIixcblx0XCJzZWFyY2hcIjogXCJzdHlsZXNfc2VhcmNoX18zcWdRalwiLFxuXHRcInNyY0ltYWdlXCI6IFwic3R5bGVzX3NyY0ltYWdlX18zbUtSQlwiLFxuXHRcInNpZGVcIjogXCJzdHlsZXNfc2lkZV9fQ1Z2WnNcIixcblx0XCJtYWluQ29udGVudFwiOiBcInN0eWxlc19tYWluQ29udGVudF9fMnhrUjlcIixcblx0XCJwcmljZUJhclwiOiBcInN0eWxlc19wcmljZUJhcl9fMWxEUm5cIixcblx0XCJtYWluQmFyXCI6IFwic3R5bGVzX21haW5CYXJfXzFwVGRTXCIsXG5cdFwiYWJvdXRQYWdlXCI6IFwic3R5bGVzX2Fib3V0UGFnZV9fMURmZC1cIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/styles.module.css\n");

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("recharts");;

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