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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DetailedCrypto; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recharts */ \"recharts\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/styles.module.css */ \"./styles/styles.module.css\");\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Users/kevinperalta/Documents/SUMMERPROJ/PDP2021crypto/pages/cryptoDetailed/[pid].js\";\n\n\n\n\n\n\nfunction DetailedCrypto() {\n  const fetcher = url => fetch(url).then(res => res.json());\n\n  const getData = endpoint => {\n    const {\n      data\n    } = swr__WEBPACK_IMPORTED_MODULE_3___default()(endpoint, fetcher);\n    return data;\n  };\n\n  const getCryptoCall = \"https://pdp-2021crypto.vercel.app/api/getCryptoInfo?params=\";\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const {\n    pid\n  } = router.query;\n\n  if (pid !== undefined) {\n    const data = getData(getCryptoCall + pid + \"&priceHist=true\" + \"&priceInterv=365d\");\n    if (!data) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: \"Loading content... \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 20\n    }, this);\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().mainBar),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: data[0][\"logo_url\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: [\"\\xA0\", data[0][\"name\"], \"($\", data[0][\"symbol\"], \")\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().priceBar),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [\"Price: \", data[0][\"price\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n          children: [\"MKT CAP:   365d VOL:    RANK:\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 40\n          }, this), data[0][\"market_cap\"], \"     \", data[0][\"365d\"][\"volume\"], \"      \", data[0][\"rank\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().mainContent),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.ResponsiveContainer, {\n            width: \"100%\",\n            height: 300,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.LineChart, {\n              data: data[0][\"prices\"],\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.Line, {\n                type: \"monotone\",\n                dataKey: \"prc\",\n                stroke: \"white\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 40,\n                columnNumber: 8\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.XAxis, {\n                stroke: \"#999999\",\n                dataKey: \"stmp\",\n                angle: -45\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 41,\n                columnNumber: 8\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.YAxis, {\n                dy: 3,\n                stroke: \"#999999\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 8\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 7\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"365d performance\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 8\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n              color: data[0][\"price_color\"]\n            },\n            children: [data[0][\"365d\"][\"price_change_pct\"], \"%\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 8\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().side),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: [\"About \", data[0][\"name\"]]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\"All time high: \", data[0][\"high\"]]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 50\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 55\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\"Maximum supply: \", data[0][\"max_supply\"]]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 57\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 62\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\"First trade:   \", data[0][\"first_candle\"]]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 10\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 4\n    }, this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading content...\\\"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 22\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 14\n    }, this);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9jcnlwdG9EZXRhaWxlZC9bcGlkXS5qcz9jNDA4Il0sIm5hbWVzIjpbIkRldGFpbGVkQ3J5cHRvIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJnZXREYXRhIiwiZW5kcG9pbnQiLCJkYXRhIiwidXNlU1dSIiwiZ2V0Q3J5cHRvQ2FsbCIsInJvdXRlciIsInVzZVJvdXRlciIsInBpZCIsInF1ZXJ5IiwidW5kZWZpbmVkIiwibXlTdHlsZXMiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGNBQVQsR0FBMEI7QUFDeEMsUUFBTUMsT0FBTyxHQUFHQyxHQUFHLElBQUlDLEtBQUssQ0FBQ0QsR0FBRCxDQUFMLENBQVdFLElBQVgsQ0FBZ0JDLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQXZCLENBQXZCOztBQUNDLFFBQU1DLE9BQU8sR0FBSUMsUUFBRCxJQUFjO0FBQ3ZCLFVBQU07QUFBQ0M7QUFBRCxRQUFTQywwQ0FBTSxDQUFDRixRQUFELEVBQVdQLE9BQVgsQ0FBckI7QUFDQSxXQUFPUSxJQUFQO0FBQ1AsR0FIQTs7QUFJRCxRQUFNRSxhQUFhLEdBQUksNkRBQXZCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFVRixNQUFNLENBQUNHLEtBQXZCOztBQUVBLE1BQUlELEdBQUcsS0FBS0UsU0FBWixFQUF1QjtBQUN0QixVQUFNUCxJQUFJLEdBQUdGLE9BQU8sQ0FBQ0ksYUFBYSxHQUFHRyxHQUFoQixHQUFzQixpQkFBdEIsR0FBMEMsbUJBQTNDLENBQXBCO0FBQ0EsUUFBRyxDQUFDTCxJQUFKLEVBQVUsb0JBQU8sOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNWLHdCQUND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QSxrQkFIRCxlQUdtRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhuRCxlQUd3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUh4RCxlQUlPO0FBQUEsMENBQXFCQSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVEsY0FBUixDQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUREO0FBb0NBLEdBdkNELE1Bd0NJO0FBQUMsd0JBQU8sOERBQUMsdURBQUQ7QUFBQSw2QkFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUF3RDtBQUM3RCIsImZpbGUiOiIuL3BhZ2VzL2NyeXB0b0RldGFpbGVkL1twaWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQge0xpbmVDaGFydCwgTGluZSwgWEF4aXMsIFlBeGlzLCBDYXJ0ZXNpYW5HcmlkLCBUb29sdGlwLCBSZXNwb25zaXZlQ29udGFpbmVyfSBmcm9tICdyZWNoYXJ0cydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBteVN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvc3R5bGVzLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERldGFpbGVkQ3J5cHRvKCkge1xuXHRjb25zdCBmZXRjaGVyID0gdXJsID0+IGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG5cdFx0Y29uc3QgZ2V0RGF0YSA9IChlbmRwb2ludCkgPT4ge1xuICAgICAgICBcdGNvbnN0IHtkYXRhfSA9IHVzZVNXUihlbmRwb2ludCwgZmV0Y2hlcilcbiAgICAgICAgXHRyZXR1cm4gZGF0YVxuXHR9XG5cdGNvbnN0IGdldENyeXB0b0NhbGwgPSAgXCJodHRwczovL3BkcC0yMDIxY3J5cHRvLnZlcmNlbC5hcHAvYXBpL2dldENyeXB0b0luZm8/cGFyYW1zPVwiXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cdGNvbnN0IHsgcGlkIH0gPSByb3V0ZXIucXVlcnlcblxuXHRpZiggcGlkICE9PSB1bmRlZmluZWQpIHtcblx0XHRjb25zdCBkYXRhID0gZ2V0RGF0YShnZXRDcnlwdG9DYWxsICsgcGlkICsgXCImcHJpY2VIaXN0PXRydWVcIiArIFwiJnByaWNlSW50ZXJ2PTM2NWRcIilcblx0XHRpZighZGF0YSkgcmV0dXJuIDxMYXlvdXQ+TG9hZGluZyBjb250ZW50Li4uIDwvTGF5b3V0PlxuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17bXlTdHlsZXMubWFpbkJhcn0+XG5cdFx0XHRcdFx0PGltZyBzcmM9e2RhdGFbMF1bXCJsb2dvX3VybFwiXX0+PC9pbWc+XG5cdFx0XHRcdFx0PHA+Jm5ic3A7e2RhdGFbMF1bXCJuYW1lXCJdfSBcblx0XHRcdFx0XHQgICAgKCR7ZGF0YVswXVtcInN5bWJvbFwiXX0pXG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e215U3R5bGVzLnByaWNlQmFyfT5cblx0XHRcdFx0XHQ8ZGl2PlByaWNlOiB7ZGF0YVswXVtcInByaWNlXCJdfSAgXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PHByZT5NS1QgQ0FQOiAgIDM2NWQgVk9MOiAgICBSQU5LOjxici8+XG5cdFx0XHRcdFx0XHR7ZGF0YVswXVtcIm1hcmtldF9jYXBcIl19ICAgICB7ZGF0YVswXVtcIjM2NWRcIl1bXCJ2b2x1bWVcIl19ICAgICAge2RhdGFbMF1bXCJyYW5rXCJdfVxuXHRcdFx0XHRcdDwvcHJlPiBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPXtteVN0eWxlcy5tYWluQ29udGVudH0+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxSZXNwb25zaXZlQ29udGFpbmVyIHdpZHRoPScxMDAlJyBoZWlnaHQ9ezMwMH0+XG5cdFx0XHRcdFx0XHQ8TGluZUNoYXJ0ICBkYXRhPXtkYXRhWzBdW1wicHJpY2VzXCJdfT5cblx0XHRcdFx0XHRcdFx0PExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cInByY1wiIHN0cm9rZT1cIndoaXRlXCIvPlxuXHRcdFx0XHRcdFx0XHQ8WEF4aXMgc3Ryb2tlPVwiIzk5OTk5OVwiIGRhdGFLZXk9XCJzdG1wXCIgYW5nbGU9ey00NX0gLz5cblx0XHRcdFx0XHRcdFx0PFlBeGlzIGR5PXszfSBzdHJva2UgPSBcIiM5OTk5OTlcIi8+XG5cdFx0XHRcdFx0XHRcdDwvTGluZUNoYXJ0PlxuXHRcdFx0XHRcdFx0XHQ8L1Jlc3BvbnNpdmVDb250YWluZXI+XG5cdFx0XHRcdFx0XHRcdDxkaXY+MzY1ZCBwZXJmb3JtYW5jZTwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7Y29sb3I6ZGF0YVswXVtcInByaWNlX2NvbG9yXCJdfX0+e2RhdGFbMF1bXCIzNjVkXCJdW1wicHJpY2VfY2hhbmdlX3BjdFwiXX0lPC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e215U3R5bGVzLnNpZGV9PlxuXHRcdFx0XHRcdFx0PGgxPkFib3V0IHtkYXRhWzBdW1wibmFtZVwiXX08L2gxPlxuXHRcdFx0XHRcdFx0PGRpdj5BbGwgdGltZSBoaWdoOiB7ZGF0YVswXVtcImhpZ2hcIl19PC9kaXY+PGJyLz48YnIvPlxuXHRcdFx0XHRcdFx0PGRpdj5NYXhpbXVtIHN1cHBseToge2RhdGFbMF1bXCJtYXhfc3VwcGx5XCJdfTwvZGl2Pjxici8+PGJyLz5cblx0XHRcdFx0ICAgICAgICA8ZGl2PkZpcnN0IHRyYWRlOiAgIHtkYXRhWzBdW1wiZmlyc3RfY2FuZGxlXCJdfTwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdClcblx0fVxuXHRlbHNle3JldHVybiA8TGF5b3V0PjxkaXY+TG9hZGluZyBjb250ZW50Li4uXCI8L2Rpdj48L0xheW91dD4gfVxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/cryptoDetailed/[pid].js\n");

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