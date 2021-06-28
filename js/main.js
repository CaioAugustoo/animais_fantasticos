/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://animais_fantasticos/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\n//# sourceURL=webpack://animais_fantasticos/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./js/constants.js":
/*!*************************!*\
  !*** ./js/constants.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ACTIVE_CLASSNAME\": () => (/* binding */ ACTIVE_CLASSNAME),\n/* harmony export */   \"DATA_OUTSIDE\": () => (/* binding */ DATA_OUTSIDE),\n/* harmony export */   \"SMOOTH_SCROLL_OPTIONS\": () => (/* binding */ SMOOTH_SCROLL_OPTIONS)\n/* harmony export */ });\nvar ACTIVE_CLASSNAME = \"active\";\nvar DATA_OUTSIDE = \"data-outside\";\nvar SMOOTH_SCROLL_OPTIONS = {\n  block: \"start\",\n  behavior: \"smooth\"\n};\n\n//# sourceURL=webpack://animais_fantasticos/./js/constants.js?");

/***/ }),

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Accordion\": () => (/* binding */ Accordion)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.js */ \"./js/constants.js\");\n\n\n\nvar Accordion = /*#__PURE__*/function () {\n  function Accordion(selector) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Accordion);\n\n    this.list = document.querySelectorAll(selector);\n    this.init();\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Accordion, [{\n    key: \"activeAccordion\",\n    value: function activeAccordion(index) {\n      this.list[index].nextElementSibling.classList.toggle(_constants_js__WEBPACK_IMPORTED_MODULE_2__.ACTIVE_CLASSNAME);\n    }\n  }, {\n    key: \"addLinkEvents\",\n    value: function addLinkEvents() {\n      var _this = this;\n\n      this.list.forEach(function (el, index) {\n        el.addEventListener(\"click\", function () {\n          return _this.activeAccordion(index);\n        });\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.addLinkEvents();\n      this.activeAccordion(0);\n    }\n  }]);\n\n  return Accordion;\n}();\n\n//# sourceURL=webpack://animais_fantasticos/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/animateScroll.js":
/*!*************************************!*\
  !*** ./js/modules/animateScroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ \"./js/constants.js\");\n\n\nfunction initAnimateScroll() {\n  var sections = document.querySelectorAll(\".section-scroll\");\n  var halfWindow = window.innerHeight * 0.2;\n\n  if (sections.length) {\n    var animeScroll = function animeScroll() {\n      sections.forEach(function (section) {\n        var sectionTop = section.getBoundingClientRect().top - halfWindow;\n        var isSectionVisible = sectionTop - halfWindow < 0;\n        if (isSectionVisible) section.classList.add(_constants_js__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_CLASSNAME);else section.classList.remove(_constants_js__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_CLASSNAME);\n      });\n    };\n\n    animeScroll();\n    window.addEventListener(\"scroll\", animeScroll);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initAnimateScroll);\n\n//# sourceURL=webpack://animais_fantasticos/./js/modules/animateScroll.js?");

/***/ }),

/***/ "./js/modules/dropdownMenu.js":
/*!************************************!*\
  !*** ./js/modules/dropdownMenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ \"./js/constants.js\");\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outsideClick.js */ \"./js/modules/outsideClick.js\");\n\n\n\nfunction initDropdownMenu() {\n  var subMenu = document.querySelectorAll(\"[data-dropdown]\");\n\n  function handleClick(e) {\n    var _this = this;\n\n    e.preventDefault();\n    this.classList.add(_constants_js__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_CLASSNAME);\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_1__.default)(this, \"click\", function () {\n      return _this.classList.remove(_constants_js__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_CLASSNAME);\n    });\n  }\n\n  subMenu.forEach(function (el) {\n    el.addEventListener(\"touchstart\", handleClick);\n    el.addEventListener(\"click\", handleClick);\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initDropdownMenu);\n\n//# sourceURL=webpack://animais_fantasticos/./js/modules/dropdownMenu.js?");

/***/ }),

/***/ "./js/modules/menuMobile.js":
/*!**********************************!*\
  !*** ./js/modules/menuMobile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ \"./js/constants.js\");\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outsideClick.js */ \"./js/modules/outsideClick.js\");\n\n\n\nfunction initMenuMobile() {\n  var menuButton = document.querySelector('[data-menu=\"button\"]');\n  var menuList = document.querySelector('[data-menu=\"list\"]');\n\n  if (menuButton) {\n    var openMenu = function openMenu() {\n      menuList.classList.add(_constants_js__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_CLASSNAME);\n      menuButton.classList.add(_constants_js__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_CLASSNAME);\n      (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_1__.default)(menuList, \"click\", function () {\n        menuList.classList.remove(_constants_js__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_CLASSNAME);\n        menuButton.classList.remove(_constants_js__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_CLASSNAME);\n      });\n    };\n\n    menuButton.addEventListener(\"click\", openMenu);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initMenuMobile);\n\n//# sourceURL=webpack://animais_fantasticos/./js/modules/menuMobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.js */ \"./js/constants.js\");\n\n\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal(openButton, closeButton, modal) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Modal);\n\n    this.openButton = document.querySelector(openButton);\n    this.closeButton = document.querySelector(closeButton);\n    this.modal = document.querySelector(modal);\n    this.init();\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Modal, [{\n    key: \"open\",\n    value: function open(e) {\n      e.preventDefault();\n      this.modal.classList.add(_constants_js__WEBPACK_IMPORTED_MODULE_2__.ACTIVE_CLASSNAME);\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      this.modal.classList.remove(_constants_js__WEBPACK_IMPORTED_MODULE_2__.ACTIVE_CLASSNAME);\n    }\n  }, {\n    key: \"outsideClick\",\n    value: function outsideClick(e) {\n      if (e.target === this.modal) this.close();\n    }\n  }, {\n    key: \"modalEvents\",\n    value: function modalEvents() {\n      var _this = this;\n\n      this.openButton.addEventListener(\"click\", function (e) {\n        return _this.open(e);\n      });\n      this.closeButton.addEventListener(\"click\", this.close);\n      this.modal.addEventListener(\"click\", function (e) {\n        return _this.outsideClick(e);\n      });\n    }\n  }, {\n    key: \"bindEvents\",\n    value: function bindEvents() {\n      this.close = this.close.bind(this);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.bindEvents();\n      this.modalEvents();\n    }\n  }]);\n\n  return Modal;\n}();\n\n//# sourceURL=webpack://animais_fantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideClick.js":
/*!************************************!*\
  !*** ./js/modules/outsideClick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ \"./js/constants.js\");\n\n\nfunction outsideClick(element, e, callback) {\n  var html = document.documentElement;\n  if (element.hasAttribute(_constants_js__WEBPACK_IMPORTED_MODULE_0__.DATA_OUTSIDE)) return;\n  setTimeout(function () {\n    html.addEventListener(e, handleOutsideClick);\n  });\n  element.setAttribute(_constants_js__WEBPACK_IMPORTED_MODULE_0__.DATA_OUTSIDE, \"\");\n\n  function handleOutsideClick(e) {\n    if (!element.contains(e.target)) {\n      element.removeAttribute(_constants_js__WEBPACK_IMPORTED_MODULE_0__.DATA_OUTSIDE);\n      html.removeEventListener(e, handleOutsideClick);\n      callback();\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (outsideClick);\n\n//# sourceURL=webpack://animais_fantasticos/./js/modules/outsideClick.js?");

/***/ }),

/***/ "./js/modules/smoothScroll.js":
/*!************************************!*\
  !*** ./js/modules/smoothScroll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SmoothScroll\": () => (/* binding */ SmoothScroll)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar SmoothScroll = /*#__PURE__*/function () {\n  function SmoothScroll(links, options) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, SmoothScroll);\n\n    this.internalLinks = document.querySelectorAll(links);\n    this.options = options;\n    this.init();\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(SmoothScroll, [{\n    key: \"scrollToElement\",\n    value: function scrollToElement(e) {\n      e.preventDefault();\n      var href = e.currentTarget.getAttribute(\"href\");\n      var selectedSection = document.querySelector(href);\n      selectedSection.scrollIntoView(this.options);\n    }\n  }, {\n    key: \"addLinkEvents\",\n    value: function addLinkEvents() {\n      var _this = this;\n\n      this.internalLinks.forEach(function (link) {\n        return link.addEventListener(\"click\", _this.scrollToElement);\n      });\n    }\n  }, {\n    key: \"bindEvents\",\n    value: function bindEvents() {\n      this.addLinkEvents = this.addLinkEvents.bind(this);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.bindEvents();\n    }\n  }]);\n\n  return SmoothScroll;\n}();\n\n//# sourceURL=webpack://animais_fantasticos/./js/modules/smoothScroll.js?");

/***/ }),

/***/ "./js/modules/tabNav.js":
/*!******************************!*\
  !*** ./js/modules/tabNav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TabNav\": () => (/* binding */ TabNav)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.js */ \"./js/constants.js\");\n\n\n\nvar TabNav = /*#__PURE__*/function () {\n  function TabNav(menu, content) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, TabNav);\n\n    this.menu = document.querySelectorAll(menu);\n    this.content = document.querySelectorAll(content);\n    this.init();\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(TabNav, [{\n    key: \"activeTab\",\n    value: function activeTab(index) {\n      this.content.forEach(function (el) {\n        return el.classList.remove(_constants_js__WEBPACK_IMPORTED_MODULE_2__.ACTIVE_CLASSNAME);\n      });\n      this.content[index].classList.add(_constants_js__WEBPACK_IMPORTED_MODULE_2__.ACTIVE_CLASSNAME);\n    }\n  }, {\n    key: \"addEvent\",\n    value: function addEvent() {\n      var _this = this;\n\n      this.menu.forEach(function (el, index) {\n        return el.addEventListener(\"click\", function () {\n          return _this.activeTab(index);\n        });\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.activeTab(0);\n      this.addEvent();\n    }\n  }]);\n\n  return TabNav;\n}();\n\n//# sourceURL=webpack://animais_fantasticos/./js/modules/tabNav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction initTooltip() {\n  var tooltips = document.querySelectorAll(\"[data-tooltip]\");\n\n  if (tooltips) {\n    var onMouseOver = function onMouseOver(e) {\n      var tooltipBox = createToolTipBox(this);\n      tooltipBox.style.top = \"\".concat(e.pageY, \"px\");\n      tooltipBox.style.left = \"\".concat(e.pageX, \"px\");\n      onMouseMove.tooltipBox = tooltipBox;\n      onMouseLeave.tooltipBox = tooltipBox;\n      onMouseLeave.element = this;\n      this.addEventListener(\"mouseleave\", onMouseLeave);\n      this.addEventListener(\"mousemove\", onMouseMove);\n    };\n\n    var createToolTipBox = function createToolTipBox(element) {\n      var tooltipBox = document.createElement(\"div\");\n      var text = element.getAttribute(\"aria-label\");\n      tooltipBox.classList.add(\"tooltip\");\n      tooltipBox.innerText = text;\n      document.body.appendChild(tooltipBox);\n      return tooltipBox;\n    };\n\n    var onMouseLeave = {\n      handleEvent: function handleEvent() {\n        this.tooltipBox.remove();\n        this.element.removeEventListener(\"mouseleave\", onMouseLeave);\n        this.element.removeEventListener(\"mousemove\", onMouseMove);\n      }\n    };\n    var onMouseMove = {\n      handleEvent: function handleEvent(e) {\n        this.tooltipBox.style.top = \"\".concat(e.pageY + 20, \"px\");\n        this.tooltipBox.style.left = \"\".concat(e.pageX + 20, \"px\");\n      }\n    };\n    tooltips.forEach(function (el) {\n      return el.addEventListener(\"mouseover\", onMouseOver);\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initTooltip);\n\n//# sourceURL=webpack://animais_fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./js/constants.js\");\n/* harmony import */ var _modules_smoothScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/smoothScroll.js */ \"./js/modules/smoothScroll.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabNav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabNav.js */ \"./js/modules/tabNav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_animateScroll_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/animateScroll.js */ \"./js/modules/animateScroll.js\");\n/* harmony import */ var _modules_dropdownMenu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdownMenu.js */ \"./js/modules/dropdownMenu.js\");\n/* harmony import */ var _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menuMobile.js */ \"./js/modules/menuMobile.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n\n\n\n\n\n\n\n\n\nnew _modules_smoothScroll_js__WEBPACK_IMPORTED_MODULE_1__.SmoothScroll('.menu a[href^=\"#\"]', _constants_js__WEBPACK_IMPORTED_MODULE_0__.SMOOTH_SCROLL_OPTIONS);\nnew _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__.Accordion(\".faq-lista dt\");\nnew _modules_tabNav_js__WEBPACK_IMPORTED_MODULE_3__.TabNav(\".animais-lista li\", \".animais-descricao section\");\nnew _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__.Modal('[data-modal=\"open\"]', '[data-modal=\"close\"]', '[data-modal=\"container\"]');\n(0,_modules_animateScroll_js__WEBPACK_IMPORTED_MODULE_5__.default)();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_8__.default)();\n(0,_modules_dropdownMenu_js__WEBPACK_IMPORTED_MODULE_6__.default)();\n(0,_modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_7__.default)();\n\n//# sourceURL=webpack://animais_fantasticos/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;