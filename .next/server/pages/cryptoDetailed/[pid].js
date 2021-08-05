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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DetailedCrypto; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recharts */ \"recharts\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_sparklines__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-sparklines */ \"react-sparklines\");\n/* harmony import */ var react_sparklines__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_sparklines__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/styles.module.css */ \"./styles/styles.module.css\");\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _jsxFileName = \"/Users/kevinperalta/Documents/SUMMERPROJ/PDP2021crypto/pages/cryptoDetailed/[pid].js\";\n\n\n\n\n\n\n\nconst getCryptoCall = \"https://pdp-2021crypto.vercel.app/api/getCryptoInfo?params=\";\nconst getTACall = \"https://pdp-2021crypto.vercel.app/api/getTAIndicators?params=\";\n\nconst fetcher = url => fetch(url).then(res => res.json());\n\nconst getData = endpoint => {\n  const {\n    data\n  } = swr__WEBPACK_IMPORTED_MODULE_3___default()(endpoint, fetcher);\n  return data;\n};\n\nfunction DetailedCrypto() {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const billion = 1000000000; //url query?\n\n  const {\n    pid\n  } = router.query; //During prerendering, the router's query object will be empty since we do not have query information to provide during this phase.\n\n  if (pid !== undefined) {\n    const data = getData(getCryptoCall + pid + \"&priceHist=true\" + \"&priceInterv=365d\");\n    const taDATA = getData(getTACall + pid);\n    if (!data || !taDATA) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: \"Loading content...\\\"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 31\n    }, this);\n    console.log(data[0][\"prices\"]);\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_7___default().mainBar),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: data[0][\"logo_url\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: [data[0][\"name\"], \"($\", data[0][\"symbol\"], \")\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_7___default().priceBar),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [\"Price: \", data[0][\"price\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n          children: [\"MKT CAP:  1d VOL:  RANK:\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 35\n          }, this), Math.round(data[0][\"market_cap\"] / billion * 100) / 100, \"B    \", Math.round(data[0][\"1d\"][\"volume\"] / billion * 100) / 100, \"B    \", data[0][\"rank\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_7___default().mainContent),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_7___default().mainContent),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.ResponsiveContainer, {\n            width: \"100%\",\n            height: 300,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.LineChart, {\n              data: data[0][\"prices\"],\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.Line, {\n                type: \"monotone\",\n                dataKey: \"prc\",\n                stroke: \"white\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 49,\n                columnNumber: 7\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.XAxis, {\n                stroke: \"white\",\n                dataKey: \"stmp\",\n                interval: 5\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 50,\n                columnNumber: 7\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.YAxis, {\n                stroke: \"white\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 51,\n                columnNumber: 7\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 6\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 6\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"365d performance\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 6\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"30d MA\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 6\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_7___default().side),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: [\"About \", data[0][\"name\"]]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 6\n          }, this), \"All time high: \", data[0][\"high\"], /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 38\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 43\n          }, this), \"# circulating: \", data[0][\"circulating_supply\"], /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 52\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 57\n          }, this), \"First trade:   \", data[0][\"first_trade\"]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 8\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 14\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 4\n    }, this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading content...\\\"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 22\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 14\n    }, this);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9jcnlwdG9EZXRhaWxlZC9bcGlkXS5qcz9jNDA4Il0sIm5hbWVzIjpbImdldENyeXB0b0NhbGwiLCJnZXRUQUNhbGwiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImdldERhdGEiLCJlbmRwb2ludCIsImRhdGEiLCJ1c2VTV1IiLCJEZXRhaWxlZENyeXB0byIsInJvdXRlciIsInVzZVJvdXRlciIsImJpbGxpb24iLCJwaWQiLCJxdWVyeSIsInVuZGVmaW5lZCIsInRhREFUQSIsImNvbnNvbGUiLCJsb2ciLCJteVN0eWxlcyIsIk1hdGgiLCJyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxhQUFhLEdBQUksNkRBQXZCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLCtEQUFsQjs7QUFDQSxNQUFNQyxPQUFPLEdBQUdDLEdBQUcsSUFBSUMsS0FBSyxDQUFDRCxHQUFELENBQUwsQ0FBV0UsSUFBWCxDQUFnQkMsR0FBRyxJQUFJQSxHQUFHLENBQUNDLElBQUosRUFBdkIsQ0FBdkI7O0FBSUEsTUFBTUMsT0FBTyxHQUFJQyxRQUFELElBQWM7QUFDN0IsUUFBTTtBQUFDQztBQUFELE1BQVNDLDBDQUFNLENBQUNGLFFBQUQsRUFBV1AsT0FBWCxDQUFyQjtBQUNBLFNBQU9RLElBQVA7QUFDQSxDQUhEOztBQUtlLFNBQVNFLGNBQVQsR0FBMEI7QUFDakMsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLFFBQU1DLE9BQU8sR0FBRyxVQUFoQixDQUZpQyxDQUd4Qzs7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBVUgsTUFBTSxDQUFDSSxLQUF2QixDQUp3QyxDQUtqQzs7QUFDUCxNQUFJRCxHQUFHLEtBQUtFLFNBQVosRUFBdUI7QUFDdEIsVUFBTVIsSUFBSSxHQUFHRixPQUFPLENB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QTtBQUFBO0FBQUE7QUFBQSxrQkFERSxxQkFHY0EsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRLE1BQVIsQ0FIZCxlQUc4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUg5QixlQUdtQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhuQyxxQkFJY0EsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRLG9CQUFSLENBSmQsZUFJNEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKNUMsZUFJaUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKakQscUJBS3FCQSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVEsYUFBUixDQUxyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFxQ0EsR0ExQ0QsTUEyQ0k7QUFBQyx3QkFBTyw4REFBQyx1REFBRDtBQUFBLDZCQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQXdEO0FBQzdEIiwiZmlsZSI6Ii4vcGFnZXMvY3J5cHRvRGV0YWlsZWQvW3BpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCB7TGluZUNoYXJ0LCBMaW5lLCBYQXhpcywgWUF4aXMsIENhcnRlc2lhbkdyaWQsIFRvb2x0aXAsIFJlc3BvbnNpdmVDb250YWluZXJ9IGZyb20gJ3JlY2hhcnRzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtTcGFya2xpbmVzUmVmZXJlbmNlTGluZSwgU3BhcmtsaW5lcywgU3BhcmtsaW5lc0xpbmV9IGZyb20gJ3JlYWN0LXNwYXJrbGluZXMnXG5pbXBvcnQgbXlTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3N0eWxlcy5tb2R1bGUuY3NzJ1xuY29uc3QgZ2V0Q3J5cHRvQ2FsbCA9ICBcImh0dHBzOi8vcGRwLTIwMjFjcnlwdG8udmVyY2VsLmFwcC9hcGkvZ2V0Q3J5cHRvSW5mbz9wYXJhbXM9XCJcbmNvbnN0IGdldFRBQ2FsbCA9IFwiaHR0cHM6Ly9wZHAtMjAyMWNyeXB0by52ZXJjZWwuYXBwL2FwaS9nZXRUQUluZGljYXRvcnM/cGFyYW1zPVwiXG5jb25zdCBmZXRjaGVyID0gdXJsID0+IGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG5cblxuXG5jb25zdCBnZXREYXRhID0gKGVuZHBvaW50KSA9PiB7XG5cdGNvbnN0IHtkYXRhfSA9IHVzZVNXUihlbmRwb2ludCwgZmV0Y2hlcilcblx0cmV0dXJuIGRhdGFcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV0YWlsZWRDcnlwdG8oKSB7XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgICAgIGNvbnN0IGJpbGxpb24gPSAxMDAwMDAwMDAwXG5cdC8vdXJsIHF1ZXJ5P1xuXHRjb25zdCB7IHBpZCB9ID0gcm91dGVyLnF1ZXJ5XG4gICAgICAgIC8vRHVyaW5nIHByZXJlbmRlcmluZywgdGhlIHJvdXRlcidzIHF1ZXJ5IG9iamVjdCB3aWxsIGJlIGVtcHR5IHNpbmNlIHdlIGRvIG5vdCBoYXZlIHF1ZXJ5IGluZm9ybWF0aW9uIHRvIHByb3ZpZGUgZHVyaW5nIHRoaXMgcGhhc2UuXG5cdGlmKCBwaWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdGNvbnN0IGRhdGEgPSBnZXREYXRhKGdldENyeXB0b0NhbGwgKyBwaWQgKyBcIiZwcmljZUhpc3Q9dHJ1ZVwiICsgXCImcHJpY2VJbnRlcnY9MzY1ZFwiKVxuXHRcdGNvbnN0IHRhREFUQSA9IGdldERhdGEoZ2V0VEFDYWxsICsgcGlkKSBcblx0XHRpZighZGF0YSB8fCAhdGFEQVRBKSByZXR1cm4gPExheW91dD5Mb2FkaW5nIGNvbnRlbnQuLi5cIjwvTGF5b3V0PlxuXHRcdGNvbnNvbGUubG9nKGRhdGFbMF1bXCJwcmljZXNcIl0pXG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtteVN0eWxlcy5tYWluQmFyfT5cblx0XHRcdFx0XHQ8aW1nIHNyYz17ZGF0YVswXVtcImxvZ29fdXJsXCJdfT48L2ltZz5cblx0XHRcdFx0XHQ8cD57ZGF0YVswXVtcIm5hbWVcIl19IFxuXHRcdFx0XHRcdCAgICAoJHtkYXRhWzBdW1wic3ltYm9sXCJdfSlcblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17bXlTdHlsZXMucHJpY2VCYXJ9PlxuXHRcdFx0XHRcdDxkaXY+UHJpY2U6IHtkYXRhWzBdW1wicHJpY2VcIl19ICBcblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8cHJlPk1LVCBDQVA6ICAxZCBWT0w6ICBSQU5LOjxici8+XG5cdFx0XHRcdFx0XHR7TWF0aC5yb3VuZChkYXRhWzBdW1wibWFya2V0X2NhcFwiXSAvIGJpbGxpb24qMTAwKS8xMDB9QiAgICB7TWF0aC5yb3VuZChkYXRhWzBdW1wiMWRcIl1bXCJ2b2x1bWVcIl0vYmlsbGlvbioxMDApLzEwMH1CICAgIHtkYXRhWzBdW1wicmFua1wiXX1cblx0XHRcdFx0XHQ8L3ByZT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gIFx0XHRcdCAgICAgICAgPGRpdiBjbGFzc05hbWU9e215U3R5bGVzLm1haW5Db250ZW50fT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IHtteVN0eWxlcy5tYWluQ29udGVudH0+XG5cdFx0XHRcdFx0PFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9JzEwMCUnIGhlaWdodD17MzAwfT5cblx0XHRcdFx0XHQ8TGluZUNoYXJ0ICBkYXRhPXtkYXRhWzBdW1wicHJpY2VzXCJdfT5cblx0XHRcdFx0XHRcdDxMaW5lIHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9XCJwcmNcIiBzdHJva2U9XCJ3aGl0ZVwiLz5cblx0XHRcdFx0XHRcdDxYQXhpcyBzdHJva2U9XCJ3aGl0ZVwiIGRhdGFLZXk9XCJzdG1wXCIgaW50ZXJ2YWw9ezV9IC8+XG5cdFx0XHRcdFx0XHQ8WUF4aXMgc3Ryb2tlID0gXCJ3aGl0ZVwiLz5cblx0XHRcdFx0XHQ8L0xpbmVDaGFydD5cblx0XHRcdFx0XHQ8L1Jlc3BvbnNpdmVDb250YWluZXI+XG5cdFx0XHRcdFx0PHA+MzY1ZCBwZXJmb3JtYW5jZTwvcD5cblx0XHRcdFx0XHQ8cD4zMGQgTUE8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCAgIDxkaXYgY2xhc3NOYW1lPXtteVN0eWxlcy5zaWRlfT5cblx0XHRcdFx0XHQ8aDE+QWJvdXQge2RhdGFbMF1bXCJuYW1lXCJdfTwvaDE+XG5cblx0XHRcdFx0XHRBbGwgdGltZSBoaWdoOiB7ZGF0YVswXVtcImhpZ2hcIl19PGJyLz48YnIvPlxuXHRcdFx0XHRcdCMgY2lyY3VsYXRpbmc6IHtkYXRhWzBdW1wiY2lyY3VsYXRpbmdfc3VwcGx5XCJdfTxici8+PGJyLz5cblx0XHRcdFx0ICAgICAgICBGaXJzdCB0cmFkZTogICB7ZGF0YVswXVtcImZpcnN0X3RyYWRlXCJdfVxuXHRcdFx0XHQgICA8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQpXG5cdH1cblx0ZWxzZXtyZXR1cm4gPExheW91dD48ZGl2PkxvYWRpbmcgY29udGVudC4uLlwiPC9kaXY+PC9MYXlvdXQ+IH1cbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/cryptoDetailed/[pid].js\n");

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