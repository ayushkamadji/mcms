module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./system.config.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ sync recursive ^.*\\/config$":
/*!***************************!*\
  !*** . sync ^.*\/config$ ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./apps/blog/config\": \"./apps/blog/config.js\",\n\t\"./apps/blog/web/dashboard/config\": \"./apps/blog/web/dashboard/config.js\",\n\t\"./apps/hello/config\": \"./apps/hello/config.js\",\n\t\"./apps/hello/web/dashboard/config\": \"./apps/hello/web/dashboard/config.js\",\n\t\"./lib/core/access/config\": \"./lib/core/access/config.js\",\n\t\"./lib/core/access/web/dashboard/config\": \"./lib/core/access/web/dashboard/config.js\",\n\t\"@babel/core/lib/config\": \"@babel/core/lib/config\",\n\t\"core-js/build/config\": \"core-js/build/config\",\n\t\"dotenv/config\": \"dotenv/config\",\n\t\"fbjs/node_modules/core-js/build/config\": \"fbjs/node_modules/core-js/build/config\",\n\t\"feature-policy/lib/config\": \"feature-policy/lib/config\",\n\t\"helmet-csp/lib/config\": \"helmet-csp/lib/config\",\n\t\"nodemon/lib/config\": \"nodemon/lib/config\",\n\t\"npm/lib/config\": \"npm/lib/config\",\n\t\"npm/node_modules/dotenv/config\": \"npm/node_modules/dotenv/config\",\n\t\"npm/node_modules/libnpm/config\": \"npm/node_modules/libnpm/config\",\n\t\"npm/node_modules/npm-registry-fetch/config\": \"npm/node_modules/npm-registry-fetch/config\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./ sync recursive ^.*\\\\/config$\";\n\n//# sourceURL=webpack:///._sync_^.*\\/config$?");

/***/ }),

/***/ "./apps/blog/config.js":
/*!*****************************!*\
  !*** ./apps/blog/config.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n  dashboard: __webpack_require__(/*! ./web/dashboard/config */ \"./apps/blog/web/dashboard/config.js\")\n};\n\n//# sourceURL=webpack:///./apps/blog/config.js?");

/***/ }),

/***/ "./apps/blog/web/dashboard/config.js":
/*!*******************************************!*\
  !*** ./apps/blog/web/dashboard/config.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var BLOG = {\n  POSTS: {\n    PATH: function PATH() {\n      return \"/blog/posts\";\n    }\n  }\n};\nmodule.exports = {\n  component: __webpack_require__(/*! ./index */ \"./apps/blog/web/dashboard/index.js\").default,\n  menu: __webpack_require__(/*! ./menu */ \"./apps/blog/web/dashboard/menu.js\").default,\n  api: {\n    POST: {\n      BLOG: BLOG\n    }\n  }\n};\n\n//# sourceURL=webpack:///./apps/blog/web/dashboard/config.js?");

/***/ }),

/***/ "./apps/blog/web/dashboard/index.js":
/*!******************************************!*\
  !*** ./apps/blog/web/dashboard/index.js ***!
  \******************************************/
/*! exports provided: BlogDash, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BlogDash\", function() { return BlogDash; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar BlogDash =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(BlogDash, _Component);\n\n  function BlogDash(props) {\n    var _this;\n\n    _classCallCheck(this, BlogDash);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(BlogDash).call(this, props));\n    _this.state = {\n      posts: []\n    };\n    return _this;\n  }\n\n  _createClass(BlogDash, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var baseAPI = this.props.baseAPI; // baseAPI is an axios client with base url configured \n      // https://github.com/axios/axios#instance-methods\n\n      baseAPI.request({\n        method: \"GET\",\n        url: \"/blog/posts\"\n      }).then(function (response) {\n        return response.data;\n      }).then(function (data) {\n        return _this2.setState({\n          posts: data\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var posts = this.state.posts;\n\n      if (posts) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Blog Dashboard\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          style: {\n            display: \"flex\"\n          }\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Title\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Body\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Image\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Created At\")), posts.map(function (post) {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n            key: post.id,\n            style: {\n              display: \"flex\"\n            }\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, post.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, post.body), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, post.image_url), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, post.created_at));\n        }));\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Blog dash no post\");\n    }\n  }]);\n\n  return BlogDash;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogDash);\n\n//# sourceURL=webpack:///./apps/blog/web/dashboard/index.js?");

/***/ }),

/***/ "./apps/blog/web/dashboard/menu.js":
/*!*****************************************!*\
  !*** ./apps/blog/web/dashboard/menu.js ***!
  \*****************************************/
/*! exports provided: BlogMenu, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BlogMenu\", function() { return BlogMenu; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar BlogMenu =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(BlogMenu, _Component);\n\n  function BlogMenu() {\n    _classCallCheck(this, BlogMenu);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(BlogMenu).apply(this, arguments));\n  }\n\n  _createClass(BlogMenu, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/blog\",\n        style: styles.wrapper\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n        style: styles.menuTitle\n      }, \"Blog\"));\n    }\n  }]);\n\n  return BlogMenu;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\nvar styles = {\n  wrapper: {\n    paddingLeft: \"8px\"\n  },\n  menuTitle: {\n    color: \"#e4e4e4\"\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogMenu);\n\n//# sourceURL=webpack:///./apps/blog/web/dashboard/menu.js?");

/***/ }),

/***/ "./apps/hello/config.js":
/*!******************************!*\
  !*** ./apps/hello/config.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n  dashboard: __webpack_require__(/*! ./web/dashboard/config */ \"./apps/hello/web/dashboard/config.js\")\n};\n\n//# sourceURL=webpack:///./apps/hello/config.js?");

/***/ }),

/***/ "./apps/hello/web/dashboard/config.js":
/*!********************************************!*\
  !*** ./apps/hello/web/dashboard/config.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n  component: __webpack_require__(/*! ./index */ \"./apps/hello/web/dashboard/index.js\").default,\n  menu: __webpack_require__(/*! ./menu */ \"./apps/hello/web/dashboard/menu.js\").default\n};\n\n//# sourceURL=webpack:///./apps/hello/web/dashboard/config.js?");

/***/ }),

/***/ "./apps/hello/web/dashboard/index.js":
/*!*******************************************!*\
  !*** ./apps/hello/web/dashboard/index.js ***!
  \*******************************************/
/*! exports provided: HelloDash, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HelloDash\", function() { return HelloDash; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar HelloDash =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(HelloDash, _Component);\n\n  function HelloDash() {\n    _classCallCheck(this, HelloDash);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(HelloDash).apply(this, arguments));\n  }\n\n  _createClass(HelloDash, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"From Hello\");\n    }\n  }]);\n\n  return HelloDash;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (HelloDash);\n\n//# sourceURL=webpack:///./apps/hello/web/dashboard/index.js?");

/***/ }),

/***/ "./apps/hello/web/dashboard/menu.js":
/*!******************************************!*\
  !*** ./apps/hello/web/dashboard/menu.js ***!
  \******************************************/
/*! exports provided: menu, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menu\", function() { return menu; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar menu =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(menu, _Component);\n\n  function menu() {\n    _classCallCheck(this, menu);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(menu).apply(this, arguments));\n  }\n\n  _createClass(menu, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/hello\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \" Hello \")));\n    }\n  }]);\n\n  return menu;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\n\n//# sourceURL=webpack:///./apps/hello/web/dashboard/menu.js?");

/***/ }),

/***/ "./lib/core/access/config.js":
/*!***********************************!*\
  !*** ./lib/core/access/config.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n  dashboard: __webpack_require__(/*! ./web/dashboard/config */ \"./lib/core/access/web/dashboard/config.js\")\n};\n\n//# sourceURL=webpack:///./lib/core/access/config.js?");

/***/ }),

/***/ "./lib/core/access/web/dashboard/config.js":
/*!*************************************************!*\
  !*** ./lib/core/access/web/dashboard/config.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n  component: __webpack_require__(/*! ./index */ \"./lib/core/access/web/dashboard/index.js\").default,\n  menu: __webpack_require__(/*! ./menu */ \"./lib/core/access/web/dashboard/menu.js\").default\n};\n\n//# sourceURL=webpack:///./lib/core/access/web/dashboard/config.js?");

/***/ }),

/***/ "./lib/core/access/web/dashboard/index.js":
/*!************************************************!*\
  !*** ./lib/core/access/web/dashboard/index.js ***!
  \************************************************/
/*! exports provided: UserDash, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserDash\", function() { return UserDash; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar UserDash =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(UserDash, _Component);\n\n  function UserDash(props) {\n    var _this;\n\n    _classCallCheck(this, UserDash);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserDash).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_this), \"componentDidMount\", function () {\n      var baseAPI = _this.props.baseAPI;\n      baseAPI.request({\n        method: \"POST\",\n        url: \"/login\",\n        data: {\n          email: \"b@email.org\",\n          password: \"12345\"\n        }\n      }).then(function (response) {\n        return response.data;\n      }).then(_this.getProfile);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"getProfile\", function (user) {\n      var baseAPI = _this.props.baseAPI;\n      baseAPI.request({\n        method: \"GET\",\n        url: \"/users/2/profile\"\n      }).then(function (response) {\n        return response.data;\n      }).then(function (profile) {\n        return _this.setState({\n          user: _objectSpread({}, user, {\n            profile: profile\n          })\n        });\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"onInputChange\", function (e) {\n      var target = e.target;\n\n      _this.setState(_defineProperty({}, target.name, target.value));\n    });\n\n    _this.state = {\n      user: {},\n      update: {\n        email: \"\"\n      },\n      email: \"\"\n    };\n    return _this;\n  }\n\n  _createClass(UserDash, [{\n    key: \"render\",\n    value: function render() {\n      if (!this.state.user || !this.state.user.profile) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Loading\");\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Site Owner\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"user\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        htmlFor: \"email\"\n      }, \"Email\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        name: \"email\",\n        value: this.state.user.email\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        htmlFor: \"password\"\n      }, \"Password\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        name: \"password\",\n        value: \"\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"profile\",\n        style: {\n          paddingTop: \"10px\",\n          display: \"flex\",\n          flexDirection: \"column\"\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        htmlFor: \"first_name\"\n      }, \"First Name\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        name: \"first_name\",\n        value: this.state.user.profile.first_name\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        htmlFor: \"last_name\"\n      }, \"Last Name\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        name: \"last_name\",\n        value: this.state.user.profile.last_name\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        htmlFor: \"id_number\"\n      }, \"ID Number\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        name: \"id_number\",\n        value: this.state.user.profile.id_number\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        htmlFor: \"address\"\n      }, \"Address\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        name: \"address\",\n        value: this.state.user.profile.address\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        htmlFor: \"city\"\n      }, \"City\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        name: \"city\",\n        value: this.state.user.profile.city\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        htmlFor: \"province\"\n      }, \"Province\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        name: \"province\",\n        value: this.state.user.profile.province\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        htmlFor: \"post_code\"\n      }, \"Post Code\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        name: \"post_code\",\n        value: this.state.user.profile.post_code\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        htmlFor: \"country\"\n      }, \"Country\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        name: \"country\",\n        value: this.state.user.profile.country\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        htmlFor: \"phone\"\n      }, \"Phone\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        name: \"phone\",\n        value: this.state.user.profile.phone\n      }))));\n    }\n  }]);\n\n  return UserDash;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserDash);\n\n//# sourceURL=webpack:///./lib/core/access/web/dashboard/index.js?");

/***/ }),

/***/ "./lib/core/access/web/dashboard/menu.js":
/*!***********************************************!*\
  !*** ./lib/core/access/web/dashboard/menu.js ***!
  \***********************************************/
/*! exports provided: UserMenu, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserMenu\", function() { return UserMenu; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar UserMenu =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(UserMenu, _Component);\n\n  function UserMenu() {\n    _classCallCheck(this, UserMenu);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(UserMenu).apply(this, arguments));\n  }\n\n  _createClass(UserMenu, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/users\",\n        style: styles.wrapper\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n        style: styles.menuTitle\n      }, \"User\"));\n    }\n  }]);\n\n  return UserMenu;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\nvar styles = {\n  wrapper: {\n    paddingLeft: \"8px\"\n  },\n  menuTitle: {\n    color: \"#e4e4e4\"\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserMenu);\n\n//# sourceURL=webpack:///./lib/core/access/web/dashboard/menu.js?");

/***/ }),

/***/ "./system.config.js":
/*!**************************!*\
  !*** ./system.config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar appsDir = \"./apps\";\nvar appNames = [\"blog\"];\n\nvar users = __webpack_require__(/*! ./lib/core/access/config */ \"./lib/core/access/config.js\");\n\nvar apps = appNames.reduce(function (acc, appName) {\n  return Object.assign(acc, _defineProperty({}, appName, __webpack_require__(\"./ sync recursive ^.*\\\\/config$\")(\"\".concat(appsDir, \"/\").concat(appName, \"/config\"))));\n}, {\n  users: users\n});\nmodule.exports = {\n  apps: apps\n};\n\n//# sourceURL=webpack:///./system.config.js?");

/***/ }),

/***/ "@babel/core/lib/config":
/*!*****************************************!*\
  !*** external "@babel/core/lib/config" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/core/lib/config\");\n\n//# sourceURL=webpack:///external_%22@babel/core/lib/config%22?");

/***/ }),

/***/ "core-js/build/config":
/*!***************************************!*\
  !*** external "core-js/build/config" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/build/config\");\n\n//# sourceURL=webpack:///external_%22core-js/build/config%22?");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv/config\");\n\n//# sourceURL=webpack:///external_%22dotenv/config%22?");

/***/ }),

/***/ "fbjs/node_modules/core-js/build/config":
/*!*********************************************************!*\
  !*** external "fbjs/node_modules/core-js/build/config" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fbjs/node_modules/core-js/build/config\");\n\n//# sourceURL=webpack:///external_%22fbjs/node_modules/core-js/build/config%22?");

/***/ }),

/***/ "feature-policy/lib/config":
/*!********************************************!*\
  !*** external "feature-policy/lib/config" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"feature-policy/lib/config\");\n\n//# sourceURL=webpack:///external_%22feature-policy/lib/config%22?");

/***/ }),

/***/ "helmet-csp/lib/config":
/*!****************************************!*\
  !*** external "helmet-csp/lib/config" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet-csp/lib/config\");\n\n//# sourceURL=webpack:///external_%22helmet-csp/lib/config%22?");

/***/ }),

/***/ "nodemon/lib/config":
/*!*************************************!*\
  !*** external "nodemon/lib/config" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nodemon/lib/config\");\n\n//# sourceURL=webpack:///external_%22nodemon/lib/config%22?");

/***/ }),

/***/ "npm/lib/config":
/*!*********************************!*\
  !*** external "npm/lib/config" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"npm/lib/config\");\n\n//# sourceURL=webpack:///external_%22npm/lib/config%22?");

/***/ }),

/***/ "npm/node_modules/dotenv/config":
/*!*************************************************!*\
  !*** external "npm/node_modules/dotenv/config" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"npm/node_modules/dotenv/config\");\n\n//# sourceURL=webpack:///external_%22npm/node_modules/dotenv/config%22?");

/***/ }),

/***/ "npm/node_modules/libnpm/config":
/*!*************************************************!*\
  !*** external "npm/node_modules/libnpm/config" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"npm/node_modules/libnpm/config\");\n\n//# sourceURL=webpack:///external_%22npm/node_modules/libnpm/config%22?");

/***/ }),

/***/ "npm/node_modules/npm-registry-fetch/config":
/*!*************************************************************!*\
  !*** external "npm/node_modules/npm-registry-fetch/config" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"npm/node_modules/npm-registry-fetch/config\");\n\n//# sourceURL=webpack:///external_%22npm/node_modules/npm-registry-fetch/config%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });