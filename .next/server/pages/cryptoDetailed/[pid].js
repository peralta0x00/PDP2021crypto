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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DetailedCrypto; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recharts */ \"recharts\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/styles.module.css */ \"./styles/styles.module.css\");\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Users/kevinperalta/Documents/SUMMERPROJ/PDP2021crypto/pages/cryptoDetailed/[pid].js\";\n\n\n\n\n\n\nfunction DetailedCrypto() {\n  const fetcher = url => fetch(url).then(res => res.json());\n\n  const getData = endpoint => {\n    const {\n      data\n    } = swr__WEBPACK_IMPORTED_MODULE_3___default()(endpoint, fetcher);\n    return data;\n  };\n\n  const getCryptoCall = \"https://pdp-2021crypto.vercel.app/api/getCryptoInfo?params=\";\n  const getTACall = \"https://pdp-2021crypto.vercel.app/api/getTAIndicators?params=\";\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const billion = 1000000000;\n  const {\n    pid\n  } = router.query;\n\n  if (pid !== undefined) {\n    const data = getData(getCryptoCall + pid + \"&priceHist=true\" + \"&priceInterv=365d\");\n    const taDATA = getData(getTACall + pid);\n    if (!data || !taDATA) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: \"Loading content...\\\"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 31\n    }, this);\n    console.log(taDATA);\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().mainBar),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: data[0][\"logo_url\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: [data[0][\"name\"], \"($\", data[0][\"symbol\"], \")\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().priceBar),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [\"Price: \", data[0][\"price\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n          children: [\"MKT CAP:  1d VOL:  RANK:\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 35\n          }, this), Math.round(data[0][\"market_cap\"] / billion * 100) / 100, \"B    \", Math.round(data[0][\"1d\"][\"volume\"] / billion * 100) / 100, \"B    \", data[0][\"rank\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().mainContent),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"365d performance\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 8\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.ResponsiveContainer, {\n            width: \"100%\",\n            height: 300,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.LineChart, {\n              data: data[0][\"prices\"],\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.Line, {\n                type: \"monotone\",\n                dataKey: \"prc\",\n                stroke: \"white\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 47,\n                columnNumber: 9\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.XAxis, {\n                stroke: \"white\",\n                dataKey: \"stmp\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 48,\n                columnNumber: 9\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.YAxis, {\n                stroke: \"white\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 49,\n                columnNumber: 9\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 50,\n                columnNumber: 9\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 8\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 8\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 7\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().side),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: [\"About \", data[0][\"name\"]]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 8\n          }, this), \"All time high: \", data[0][\"high\"], /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 40\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 45\n          }, this), \"# circulating: \", data[0][\"circulating_supply\"], /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 54\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 59\n          }, this), \"First trade:   \", data[0][\"first_trade\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 7\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 14\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 4\n    }, this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading content...\\\"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 22\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 14\n    }, this);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9jcnlwdG9EZXRhaWxlZC9bcGlkXS5qcz9jNDA4Il0sIm5hbWVzIjpbIkRldGFpbGVkQ3J5cHRvIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJnZXREYXRhIiwiZW5kcG9pbnQiLCJkYXRhIiwidXNlU1dSIiwiZ2V0Q3J5cHRvQ2FsbCIsImdldFRBQ2FsbCIsInJvdXRlciIsInVzZVJvdXRlciIsImJpbGxpb24iLCJwaWQiLCJxdWVyeSIsInVuZGVmaW5lZCIsInRhREFUQSIsImNvbnNvbGUiLCJsb2ciLCJteVN0eWxlcyIsIk1hdGgiLCJyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLGNBQVQsR0FBMEI7QUFDeEMsUUFBTUMsT0FBTyxHQUFHQyxHQUFHLElBQUlDLEtBQUssQ0FBQ0QsR0FBRCxDQUFMLENBQVdFLElBQVgsQ0FBZ0JDLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQXZCLENBQXZCOztBQUNDLFFBQU1DLE9BQU8sR0FBSUMsUUFBRCxJQUFjO0FBQ3ZCLFVBQU07QUFBQ0M7QUFBRCxRQUFTQywwQ0FBTSxDQUFDRixRQUFELEVBQVdQLE9BQVgsQ0FBckI7QUFDQSxXQUFPUSxJQUFQO0FBQ1AsR0FIQTs7QUFJRCxRQUFNRSxhQUFhLEdBQUksNkRBQXZCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHLCtEQUFsQjtBQUNBLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDTyxRQUFNQyxPQUFPLEdBQUcsVUFBaEI7QUFFUCxRQUFNO0FBQUVDO0FBQUYsTUFBVUgsTUFBTSxDQUFDSSxLQUF2Qjs7QUFFQSxNQUFJRCxHQUFHLEtBQUtFLFNBQVosRUFBdUI7QUFDdEIsVUFBTVQsSUFBSSxHQUFHRixPQUFPLENBQUNJLGFBQWEsR0FBR0ssR0FBaEIsR0FBc0IsaUJBQXRC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QTtBQUFBO0FBQUE7QUFBQSxrQkFIdEMscUJBSWlCQSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVEsb0JBQVIsQ0FKakIsZUFJK0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKL0MsZUFJb0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKcEQscUJBS3dCQSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVEsYUFBUixDQUx4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWk87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFzQ0EsR0EzQ0QsTUE0Q0k7QUFBQyx3QkFBTyw4REFBQyx1REFBRDtBQUFBLDZCQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQXdEO0FBQzdEIiwiZmlsZSI6Ii4vcGFnZXMvY3J5cHRvRGV0YWlsZWQvW3BpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCB7TGluZUNoYXJ0LCBMaW5lLCBYQXhpcywgWUF4aXMsIENhcnRlc2lhbkdyaWQsIFRvb2x0aXAsIFJlc3BvbnNpdmVDb250YWluZXJ9IGZyb20gJ3JlY2hhcnRzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG15U3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9zdHlsZXMubW9kdWxlLmNzcydcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWxlZENyeXB0bygpIHtcblx0Y29uc3QgZmV0Y2hlciA9IHVybCA9PiBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuXHRcdGNvbnN0IGdldERhdGEgPSAoZW5kcG9pbnQpID0+IHtcbiAgICAgICAgXHRjb25zdCB7ZGF0YX0gPSB1c2VTV1IoZW5kcG9pbnQsIGZldGNoZXIpXG4gICAgICAgIFx0cmV0dXJuIGRhdGFcblx0fVxuXHRjb25zdCBnZXRDcnlwdG9DYWxsID0gIFwiaHR0cHM6Ly9wZHAtMjAyMWNyeXB0by52ZXJjZWwuYXBwL2FwaS9nZXRDcnlwdG9JbmZvP3BhcmFtcz1cIlxuXHRjb25zdCBnZXRUQUNhbGwgPSBcImh0dHBzOi8vcGRwLTIwMjFjcnlwdG8udmVyY2VsLmFwcC9hcGkvZ2V0VEFJbmRpY2F0b3JzP3BhcmFtcz1cIlxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgICAgICBjb25zdCBiaWxsaW9uID0gMTAwMDAwMDAwMFxuXG5cdGNvbnN0IHsgcGlkIH0gPSByb3V0ZXIucXVlcnlcblxuXHRpZiggcGlkICE9PSB1bmRlZmluZWQpIHtcblx0XHRjb25zdCBkYXRhID0gZ2V0RGF0YShnZXRDcnlwdG9DYWxsICsgcGlkICsgXCImcHJpY2VIaXN0PXRydWVcIiArIFwiJnByaWNlSW50ZXJ2PTM2NWRcIilcblx0XHRjb25zdCB0YURBVEEgPSBnZXREYXRhKGdldFRBQ2FsbCArIHBpZCkgXG5cdFx0aWYoIWRhdGEgfHwgIXRhREFUQSkgcmV0dXJuIDxMYXlvdXQ+TG9hZGluZyBjb250ZW50Li4uXCI8L0xheW91dD5cblx0XHRjb25zb2xlLmxvZyh0YURBVEEpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtteVN0eWxlcy5tYWluQmFyfT5cblx0XHRcdFx0XHQ8aW1nIHNyYz17ZGF0YVswXVtcImxvZ29fdXJsXCJdfT48L2ltZz5cblx0XHRcdFx0XHQ8cD57ZGF0YVswXVtcIm5hbWVcIl19IFxuXHRcdFx0XHRcdCAgICAoJHtkYXRhWzBdW1wic3ltYm9sXCJdfSlcblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17bXlTdHlsZXMucHJpY2VCYXJ9PlxuXHRcdFx0XHRcdDxkaXY+UHJpY2U6IHtkYXRhWzBdW1wicHJpY2VcIl19ICBcblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8cHJlPk1LVCBDQVA6ICAxZCBWT0w6ICBSQU5LOjxici8+XG5cdFx0XHRcdFx0XHR7TWF0aC5yb3VuZChkYXRhWzBdW1wibWFya2V0X2NhcFwiXSAvIGJpbGxpb24qMTAwKS8xMDB9QiAgICB7TWF0aC5yb3VuZChkYXRhWzBdW1wiMWRcIl1bXCJ2b2x1bWVcIl0vYmlsbGlvbioxMDApLzEwMH1CICAgIHtkYXRhWzBdW1wicmFua1wiXX1cblx0XHRcdFx0XHQ8L3ByZT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gIFx0XHRcdCAgICAgICAgPGRpdiBjbGFzc05hbWU9e215U3R5bGVzLm1haW5Db250ZW50fT5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxwPjM2NWQgcGVyZm9ybWFuY2U8L3A+XG5cdFx0XHRcdFx0XHRcdDxSZXNwb25zaXZlQ29udGFpbmVyIHdpZHRoPScxMDAlJyBoZWlnaHQ9ezMwMH0+XG5cdFx0XHRcdFx0XHRcdDxMaW5lQ2hhcnQgIGRhdGE9e2RhdGFbMF1bXCJwcmljZXNcIl19PlxuXHRcdFx0XHRcdFx0XHRcdDxMaW5lIHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9XCJwcmNcIiBzdHJva2U9XCJ3aGl0ZVwiLz5cblx0XHRcdFx0XHRcdFx0XHQ8WEF4aXMgc3Ryb2tlPVwid2hpdGVcIiBkYXRhS2V5PVwic3RtcFwiICAvPlxuXHRcdFx0XHRcdFx0XHRcdDxZQXhpcyBzdHJva2UgPSBcIndoaXRlXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDxUb29sdGlwIC8+XG5cdFx0XHRcdFx0XHRcdDwvTGluZUNoYXJ0PlxuXHRcdFx0XHRcdFx0XHQ8L1Jlc3BvbnNpdmVDb250YWluZXI+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtteVN0eWxlcy5zaWRlfT5cblx0XHRcdFx0XHRcdFx0PGgxPkFib3V0IHtkYXRhWzBdW1wibmFtZVwiXX08L2gxPlxuXG5cdFx0XHRcdFx0XHRcdEFsbCB0aW1lIGhpZ2g6IHtkYXRhWzBdW1wiaGlnaFwiXX08YnIvPjxici8+XG5cdFx0XHRcdFx0XHRcdCMgY2lyY3VsYXRpbmc6IHtkYXRhWzBdW1wiY2lyY3VsYXRpbmdfc3VwcGx5XCJdfTxici8+PGJyLz5cblx0XHRcdFx0XHQgICAgICAgIFx0Rmlyc3QgdHJhZGU6ICAge2RhdGFbMF1bXCJmaXJzdF90cmFkZVwiXX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcblx0XHRcdDwvTGF5b3V0PlxuXHRcdClcblx0fVxuXHRlbHNle3JldHVybiA8TGF5b3V0PjxkaXY+TG9hZGluZyBjb250ZW50Li4uXCI8L2Rpdj48L0xheW91dD4gfVxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/cryptoDetailed/[pid].js\n");

/***/ }),

/***/ "./styles/styles.module.css":
/*!**********************************!*\
  !*** ./styles/styles.module.css ***!
  \**********************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"tile\": \"styles_tile__2-Tnh\",\n\t\"search\": \"styles_search__3qgQj\",\n\t\"homePage\": \"styles_homePage___gMtk\",\n\t\"mainGrid\": \"styles_mainGrid__1HDYl\",\n\t\"srcImage\": \"styles_srcImage__3mKRB\",\n\t\"side\": \"styles_side__CVvZs\",\n\t\"mainContent\": \"styles_mainContent__2xkR9\",\n\t\"priceBar\": \"styles_priceBar__1lDRn\",\n\t\"help\": \"styles_help__1QIJz\",\n\t\"mainBar\": \"styles_mainBar__1pTdS\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9zdHlsZXMvc3R5bGVzLm1vZHVsZS5jc3M/ZTFjNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy9zdHlsZXMubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRpbGVcIjogXCJzdHlsZXNfdGlsZV9fMi1UbmhcIixcblx0XCJzZWFyY2hcIjogXCJzdHlsZXNfc2VhcmNoX18zcWdRalwiLFxuXHRcImhvbWVQYWdlXCI6IFwic3R5bGVzX2hvbWVQYWdlX19fZ010a1wiLFxuXHRcIm1haW5HcmlkXCI6IFwic3R5bGVzX21haW5HcmlkX18xSERZbFwiLFxuXHRcInNyY0ltYWdlXCI6IFwic3R5bGVzX3NyY0ltYWdlX18zbUtSQlwiLFxuXHRcInNpZGVcIjogXCJzdHlsZXNfc2lkZV9fQ1Z2WnNcIixcblx0XCJtYWluQ29udGVudFwiOiBcInN0eWxlc19tYWluQ29udGVudF9fMnhrUjlcIixcblx0XCJwcmljZUJhclwiOiBcInN0eWxlc19wcmljZUJhcl9fMWxEUm5cIixcblx0XCJoZWxwXCI6IFwic3R5bGVzX2hlbHBfXzFRSUp6XCIsXG5cdFwibWFpbkJhclwiOiBcInN0eWxlc19tYWluQmFyX18xcFRkU1wiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/styles.module.css\n");

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