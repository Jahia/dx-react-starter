/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"testComponent": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@jahia sync recursive ^\\.\\/.*\\.json$":
/*!*************************************************!*\
  !*** ./node_modules/@jahia sync ^\.\/.*\.json$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./apollo-dx/fragmentTypes.json": "./node_modules/@jahia/apollo-dx/fragmentTypes.json",
	"./apollo-dx/node_modules/apollo-cache-inmemory/node_modules/graphql/package.json": "./node_modules/@jahia/apollo-dx/node_modules/apollo-cache-inmemory/node_modules/graphql/package.json",
	"./apollo-dx/node_modules/apollo-cache-inmemory/node_modules/iterall/package.json": "./node_modules/@jahia/apollo-dx/node_modules/apollo-cache-inmemory/node_modules/iterall/package.json",
	"./apollo-dx/node_modules/apollo-cache-inmemory/package.json": "./node_modules/@jahia/apollo-dx/node_modules/apollo-cache-inmemory/package.json",
	"./apollo-dx/node_modules/apollo-cache-inmemory/tsconfig.json": "./node_modules/@jahia/apollo-dx/node_modules/apollo-cache-inmemory/tsconfig.json",
	"./apollo-dx/node_modules/apollo-cache-inmemory/tslint.json": "./node_modules/@jahia/apollo-dx/node_modules/apollo-cache-inmemory/tslint.json",
	"./apollo-dx/node_modules/apollo-client/package.json": "./node_modules/@jahia/apollo-dx/node_modules/apollo-client/package.json",
	"./apollo-dx/node_modules/apollo-link-http/node_modules/apollo-link-http-common/package.json": "./node_modules/@jahia/apollo-dx/node_modules/apollo-link-http/node_modules/apollo-link-http-common/package.json",
	"./apollo-dx/node_modules/apollo-link-http/node_modules/apollo-link-http-common/tsconfig.json": "./node_modules/@jahia/apollo-dx/node_modules/apollo-link-http/node_modules/apollo-link-http-common/tsconfig.json",
	"./apollo-dx/node_modules/apollo-link-http/node_modules/graphql/package.json": "./node_modules/@jahia/apollo-dx/node_modules/apollo-link-http/node_modules/graphql/package.json",
	"./apollo-dx/node_modules/apollo-link-http/node_modules/iterall/package.json": "./node_modules/@jahia/apollo-dx/node_modules/apollo-link-http/node_modules/iterall/package.json",
	"./apollo-dx/node_modules/apollo-link-http/package.json": "./node_modules/@jahia/apollo-dx/node_modules/apollo-link-http/package.json",
	"./apollo-dx/node_modules/apollo-link-http/tsconfig.json": "./node_modules/@jahia/apollo-dx/node_modules/apollo-link-http/tsconfig.json",
	"./apollo-dx/node_modules/apollo-link/node_modules/graphql/package.json": "./node_modules/@jahia/apollo-dx/node_modules/apollo-link/node_modules/graphql/package.json",
	"./apollo-dx/node_modules/apollo-link/node_modules/iterall/package.json": "./node_modules/@jahia/apollo-dx/node_modules/apollo-link/node_modules/iterall/package.json",
	"./apollo-dx/node_modules/apollo-link/package.json": "./node_modules/@jahia/apollo-dx/node_modules/apollo-link/package.json",
	"./apollo-dx/node_modules/apollo-link/tsconfig.json": "./node_modules/@jahia/apollo-dx/node_modules/apollo-link/tsconfig.json",
	"./apollo-dx/node_modules/graphql/package.json": "./node_modules/@jahia/apollo-dx/node_modules/graphql/package.json",
	"./apollo-dx/node_modules/iterall/package.json": "./node_modules/@jahia/apollo-dx/node_modules/iterall/package.json",
	"./apollo-dx/node_modules/lodash/package.json": "./node_modules/@jahia/apollo-dx/node_modules/lodash/package.json",
	"./apollo-dx/package.json": "./node_modules/@jahia/apollo-dx/package.json",
	"./i18next/package.json": "./node_modules/@jahia/i18next/package.json",
	"./react-apollo/node_modules/lodash/package.json": "./node_modules/@jahia/react-apollo/node_modules/lodash/package.json",
	"./react-apollo/package.json": "./node_modules/@jahia/react-apollo/package.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/@jahia sync recursive ^\\.\\/.*\\.json$";

/***/ }),

/***/ "./src/main/javascript/app/DxContext.jsx":
/*!***********************************************!*\
  !*** ./src/main/javascript/app/DxContext.jsx ***!
  \***********************************************/
/*! exports provided: DxContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DxContext", function() { return DxContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var DxContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();



/***/ }),

/***/ "./src/main/javascript/app/gqlQueries.js":
/*!***********************************************!*\
  !*** ./src/main/javascript/app/gqlQueries.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
var _templateObject = _taggedTemplateLiteral(['query Sites($path: String!){\n        jcr {\n            nodeByPath(path: $path) {\n              displayName  \n              name\n              path\n              children {\n                nodes {\n                  displayName\n                  name\n                }\n              }\n            }\n          }\n    }'], ['query Sites($path: String!){\n        jcr {\n            nodeByPath(path: $path) {\n              displayName  \n              name\n              path\n              children {\n                nodes {\n                  displayName\n                  name\n                }\n              }\n            }\n          }\n    }']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var gqlQueries = {
  SITE_QUERY: graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject)
};

/* harmony default export */ __webpack_exports__["default"] = (gqlQueries);

/***/ }),

/***/ "./src/main/javascript/app/test/app.jsx":
/*!**********************************************!*\
  !*** ./src/main/javascript/app/test/app.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jahia_apollo_dx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jahia/apollo-dx */ "./node_modules/@jahia/apollo-dx/index.es.js");
/* harmony import */ var _jahia_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jahia/i18next */ "./node_modules/@jahia/i18next/index.es.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/index.js");
/* harmony import */ var _DxContext_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DxContext.jsx */ "./src/main/javascript/app/DxContext.jsx");
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test */ "./src/main/javascript/app/test/test.jsx");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var TestComp = function (_React$Component) {
    _inherits(TestComp, _React$Component);

    function TestComp() {
        _classCallCheck(this, TestComp);

        return _possibleConstructorReturn(this, (TestComp.__proto__ || Object.getPrototypeOf(TestComp)).apply(this, arguments));
    }

    _createClass(TestComp, [{
        key: 'render',
        value: function render() {
            var dxContext = this.props.dxContext;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_apollo__WEBPACK_IMPORTED_MODULE_4__["ApolloProvider"],
                { client: Object(_jahia_apollo_dx__WEBPACK_IMPORTED_MODULE_1__["client"])({ contextPath: dxContext.contextPath }) },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_i18next__WEBPACK_IMPORTED_MODULE_3__["I18nextProvider"],
                    { i18n: Object(_jahia_i18next__WEBPACK_IMPORTED_MODULE_2__["getI18n"])({
                            lng: dxContext.uilang,
                            contextPath: dxContext.contextPath,
                            ns: ['dx-react-starter'],
                            defaultNS: 'dx-react-starter'
                        }) },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _DxContext_jsx__WEBPACK_IMPORTED_MODULE_5__["DxContext"].Provider,
                        { value: dxContext },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_test__WEBPACK_IMPORTED_MODULE_6__["default"], { dxContext: dxContext })
                    )
                )
            );
        }
    }]);

    return TestComp;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TestComp);

/***/ }),

/***/ "./src/main/javascript/app/test/main.jsx":
/*!***********************************************!*\
  !*** ./src/main/javascript/app/test/main.jsx ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.jsx */ "./src/main/javascript/app/test/app.jsx");




window.testComponentReactRender = function (target, id, dxContext) {
    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], { id: id, dxContext: dxContext }), document.getElementById(target));
};

/***/ }),

/***/ "./src/main/javascript/app/test/test.jsx":
/*!***********************************************!*\
  !*** ./src/main/javascript/app/test/test.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gqlQueries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gqlQueries */ "./src/main/javascript/app/gqlQueries.js");
/* harmony import */ var react_apollo_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo/index */ "./node_modules/react-apollo/index.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Test = function (_React$Component) {
    _inherits(Test, _React$Component);

    function Test(props) {
        _classCallCheck(this, Test);

        return _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).call(this, props));
    }

    _createClass(Test, [{
        key: "render",
        value: function render() {
            if (this.props.fetchSites.error) {
                return this.props.fetchSites.error.message;
            }

            var sites = this.props.fetchSites.jcr ? this.props.fetchSites.jcr.nodeByPath.children.nodes : [];

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "h4",
                    null,
                    "Available sites"
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "ul",
                    null,
                    sites.map(function (site) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            { key: site.name },
                            site.displayName
                        );
                    })
                )
            );
        }
    }]);

    return Test;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var SiteQuery = Object(react_apollo_index__WEBPACK_IMPORTED_MODULE_2__["graphql"])(_gqlQueries__WEBPACK_IMPORTED_MODULE_1__["default"].SITE_QUERY, {
    name: 'fetchSites',
    options: function options(props) {
        return {
            variables: {
                path: "/sites"
            },
            fetchPolicy: 'network-only'
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo_index__WEBPACK_IMPORTED_MODULE_2__["withApollo"])(SiteQuery(Test)));

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/main/javascript/app/test/main.jsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alexanderkarmanov/Documents/Jahia/dx-react-starter/src/main/javascript/app/test/main.jsx */"./src/main/javascript/app/test/main.jsx");


/***/ })

/******/ });
//# sourceMappingURL=testComponent.js.map