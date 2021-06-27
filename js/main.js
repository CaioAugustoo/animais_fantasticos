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

/***/ "./js/constants.js":
/*!*************************!*\
  !*** ./js/constants.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ACTIVE_CLASSNAME\": () => (/* binding */ ACTIVE_CLASSNAME),\n/* harmony export */   \"DATA_OUTSIDE\": () => (/* binding */ DATA_OUTSIDE),\n/* harmony export */   \"SMOOTH_SCROLL_OPTIONS\": () => (/* binding */ SMOOTH_SCROLL_OPTIONS)\n/* harmony export */ });\nconst ACTIVE_CLASSNAME = \"active\";\r\nconst DATA_OUTSIDE = \"data-outside\";\r\nconst SMOOTH_SCROLL_OPTIONS = { block: \"start\", behavior: \"smooth\" };\r\n\n\n//# sourceURL=webpack://animais_fantasticos/./js/constants.js?");

/***/ }),

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Accordion\": () => (/* binding */ Accordion)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ \"./js/constants.js\");\n\r\n\r\nclass Accordion {\r\n  constructor(selector) {\r\n    this.list = document.querySelectorAll(selector);\r\n\r\n    this.init();\r\n  }\r\n\r\n  activeAccordion(index) {\r\n    this.list[index].nextElementSibling.classList.toggle(_constants_js__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_CLASSNAME);\r\n  }\r\n\r\n  addLinkEvents() {\r\n    this.list.forEach((el, index) => {\r\n      el.addEventListener(\"click\", () => this.activeAccordion(index));\r\n    });\r\n  }\r\n\r\n  init() {\r\n    this.addLinkEvents();\r\n    this.activeAccordion(0);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais_fantasticos/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/animateScroll.js":
/*!*************************************!*\
  !*** ./js/modules/animateScroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ \"./js/constants.js\");\n\r\n\r\nfunction initAnimateScroll() {\r\n  const sections = document.querySelectorAll(\".section-scroll\");\r\n  const halfWindow = window.innerHeight * 0.2;\r\n\r\n  if (sections.length) {\r\n    function animeScroll() {\r\n      sections.forEach(section => {\r\n        const sectionTop = section.getBoundingClientRect().top - halfWindow;\r\n        const isSectionVisible = sectionTop - halfWindow < 0;\r\n\r\n        if (isSectionVisible) section.classList.add(_constants_js__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_CLASSNAME);\r\n        else section.classList.remove(_constants_js__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_CLASSNAME);\r\n      });\r\n    }\r\n    animeScroll();\r\n\r\n    window.addEventListener(\"scroll\", animeScroll);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initAnimateScroll);\r\n\n\n//# sourceURL=webpack://animais_fantasticos/./js/modules/animateScroll.js?");

/***/ }),

/***/ "./js/modules/dropdownMenu.js":
/*!************************************!*\
  !*** ./js/modules/dropdownMenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ \"./js/constants.js\");\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outsideClick.js */ \"./js/modules/outsideClick.js\");\n\r\n\r\n\r\nfunction initDropdownMenu() {\r\n  const subMenu = document.querySelectorAll(\"[data-dropdown]\");\r\n\r\n  function handleClick(e) {\r\n    e.preventDefault();\r\n    this.classList.add(_constants_js__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_CLASSNAME);\r\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_1__.default)(this, \"click\", () => this.classList.remove(_constants_js__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_CLASSNAME));\r\n  }\r\n\r\n  subMenu.forEach(el => {\r\n    el.addEventListener(\"touchstart\", handleClick);\r\n    el.addEventListener(\"click\", handleClick);\r\n  });\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initDropdownMenu);\r\n\n\n//# sourceURL=webpack://animais_fantasticos/./js/modules/dropdownMenu.js?");

/***/ }),

/***/ "./js/modules/menuMobile.js":
/*!**********************************!*\
  !*** ./js/modules/menuMobile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ \"./js/constants.js\");\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outsideClick.js */ \"./js/modules/outsideClick.js\");\n\r\n\r\n\r\nfunction initMenuMobile() {\r\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\r\n  const menuList = document.querySelector('[data-menu=\"list\"]');\r\n\r\n  if (menuButton) {\r\n    function openMenu() {\r\n      menuList.classList.add(_constants_js__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_CLASSNAME);\r\n      menuButton.classList.add(_constants_js__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_CLASSNAME);\r\n\r\n      (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_1__.default)(menuList, \"click\", () => {\r\n        menuList.classList.remove(_constants_js__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_CLASSNAME);\r\n        menuButton.classList.remove(_constants_js__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_CLASSNAME);\r\n      });\r\n    }\r\n\r\n    menuButton.addEventListener(\"click\", openMenu);\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initMenuMobile);\r\n\n\n//# sourceURL=webpack://animais_fantasticos/./js/modules/menuMobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ \"./js/constants.js\");\n\r\n\r\nfunction initModal() {\r\n  const openModalButton = document.querySelector('[data-modal=\"open\"]');\r\n  const closeModalButton = document.querySelector('[data-modal=\"close\"]');\r\n  const modalContainer = document.querySelector('[data-modal=\"container\"]');\r\n\r\n  if (openModalButton && closeModalButton && modalContainer) {\r\n    function openModal(e) {\r\n      e.preventDefault();\r\n      modalContainer.classList.add(_constants_js__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_CLASSNAME);\r\n    }\r\n\r\n    function closeModal() {\r\n      modalContainer.classList.remove(_constants_js__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_CLASSNAME);\r\n    }\r\n\r\n    function outsideClick(e) {\r\n      if (e.target === this) closeModal();\r\n    }\r\n\r\n    openModalButton.addEventListener(\"click\", openModal);\r\n    closeModalButton.addEventListener(\"click\", closeModal);\r\n    modalContainer.addEventListener(\"click\", outsideClick);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initModal);\r\n\n\n//# sourceURL=webpack://animais_fantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideClick.js":
/*!************************************!*\
  !*** ./js/modules/outsideClick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ \"./js/constants.js\");\n\r\n\r\nfunction outsideClick(element, e, callback) {\r\n  const html = document.documentElement;\r\n\r\n  if (element.hasAttribute(_constants_js__WEBPACK_IMPORTED_MODULE_0__.DATA_OUTSIDE)) return;\r\n  setTimeout(() => {\r\n    html.addEventListener(e, handleOutsideClick);\r\n  });\r\n  element.setAttribute(_constants_js__WEBPACK_IMPORTED_MODULE_0__.DATA_OUTSIDE, \"\");\r\n\r\n  function handleOutsideClick(e) {\r\n    if (!element.contains(e.target)) {\r\n      element.removeAttribute(_constants_js__WEBPACK_IMPORTED_MODULE_0__.DATA_OUTSIDE);\r\n      html.removeEventListener(e, handleOutsideClick);\r\n      callback();\r\n    }\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (outsideClick);\r\n\n\n//# sourceURL=webpack://animais_fantasticos/./js/modules/outsideClick.js?");

/***/ }),

/***/ "./js/modules/smoothScroll.js":
/*!************************************!*\
  !*** ./js/modules/smoothScroll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SmoothScroll\": () => (/* binding */ SmoothScroll)\n/* harmony export */ });\nclass SmoothScroll {\r\n  constructor(links, options) {\r\n    this.internalLinks = document.querySelectorAll(links);\r\n    this.options = options;\r\n\r\n    this.init();\r\n  }\r\n\r\n  scrollToElement(e) {\r\n    e.preventDefault();\r\n    const href = e.currentTarget.getAttribute(\"href\");\r\n    const selectedSection = document.querySelector(href);\r\n    selectedSection.scrollIntoView(this.options);\r\n  }\r\n\r\n  addLinkEvents() {\r\n    this.internalLinks.forEach(link =>\r\n      link.addEventListener(\"click\", this.scrollToElement)\r\n    );\r\n  }\r\n\r\n  bindEvents() {\r\n    this.addLinkEvents = this.addLinkEvents.bind(this);\r\n  }\r\n\r\n  init() {\r\n    this.bindEvents();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais_fantasticos/./js/modules/smoothScroll.js?");

/***/ }),

/***/ "./js/modules/tabNav.js":
/*!******************************!*\
  !*** ./js/modules/tabNav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TabNav\": () => (/* binding */ TabNav)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ \"./js/constants.js\");\n\r\n\r\nclass TabNav {\r\n  constructor(menu, content) {\r\n    this.menu = document.querySelectorAll(menu);\r\n    this.content = document.querySelectorAll(content);\r\n\r\n    this.init();\r\n  }\r\n\r\n  activeTab(index) {\r\n    this.content.forEach(el => el.classList.remove(_constants_js__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_CLASSNAME));\r\n    this.content[index].classList.add(_constants_js__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_CLASSNAME);\r\n  }\r\n\r\n  addEvent() {\r\n    this.menu.forEach((el, index) =>\r\n      el.addEventListener(\"click\", () => this.activeTab(index))\r\n    );\r\n  }\r\n\r\n  init() {\r\n    this.activeTab(0);\r\n    this.addEvent();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais_fantasticos/./js/modules/tabNav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction initTooltip() {\r\n  const tooltips = document.querySelectorAll(\"[data-tooltip]\");\r\n\r\n  if (tooltips) {\r\n    function onMouseOver(e) {\r\n      const tooltipBox = createToolTipBox(this);\r\n      tooltipBox.style.top = `${e.pageY}px`;\r\n      tooltipBox.style.left = `${e.pageX}px`;\r\n\r\n      onMouseMove.tooltipBox = tooltipBox;\r\n      onMouseLeave.tooltipBox = tooltipBox;\r\n      onMouseLeave.element = this;\r\n      this.addEventListener(\"mouseleave\", onMouseLeave);\r\n      this.addEventListener(\"mousemove\", onMouseMove);\r\n    }\r\n\r\n    const onMouseLeave = {\r\n      handleEvent() {\r\n        this.tooltipBox.remove();\r\n        this.element.removeEventListener(\"mouseleave\", onMouseLeave);\r\n        this.element.removeEventListener(\"mousemove\", onMouseMove);\r\n      },\r\n    };\r\n\r\n    const onMouseMove = {\r\n      handleEvent(e) {\r\n        this.tooltipBox.style.top = `${e.pageY + 20}px`;\r\n        this.tooltipBox.style.left = `${e.pageX + 20}px`;\r\n      },\r\n    };\r\n\r\n    function createToolTipBox(element) {\r\n      const tooltipBox = document.createElement(\"div\");\r\n      const text = element.getAttribute(\"aria-label\");\r\n      tooltipBox.classList.add(\"tooltip\");\r\n      tooltipBox.innerText = text;\r\n      document.body.appendChild(tooltipBox);\r\n\r\n      return tooltipBox;\r\n    }\r\n    tooltips.forEach(el => el.addEventListener(\"mouseover\", onMouseOver));\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initTooltip);\r\n\n\n//# sourceURL=webpack://animais_fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./js/constants.js\");\n/* harmony import */ var _modules_smoothScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/smoothScroll.js */ \"./js/modules/smoothScroll.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabNav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabNav.js */ \"./js/modules/tabNav.js\");\n/* harmony import */ var _modules_animateScroll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/animateScroll.js */ \"./js/modules/animateScroll.js\");\n/* harmony import */ var _modules_dropdownMenu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dropdownMenu.js */ \"./js/modules/dropdownMenu.js\");\n/* harmony import */ var _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menuMobile.js */ \"./js/modules/menuMobile.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nnew _modules_smoothScroll_js__WEBPACK_IMPORTED_MODULE_1__.SmoothScroll('.menu a[href^=\"#\"]', _constants_js__WEBPACK_IMPORTED_MODULE_0__.SMOOTH_SCROLL_OPTIONS);\r\nnew _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__.Accordion(\".faq-lista dt\");\r\nnew _modules_tabNav_js__WEBPACK_IMPORTED_MODULE_3__.TabNav(\".animais-lista li\", \".animais-descricao section\");\r\n\r\n(0,_modules_animateScroll_js__WEBPACK_IMPORTED_MODULE_4__.default)();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_7__.default)();\r\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_8__.default)();\r\n(0,_modules_dropdownMenu_js__WEBPACK_IMPORTED_MODULE_5__.default)();\r\n(0,_modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_6__.default)();\r\n\n\n//# sourceURL=webpack://animais_fantasticos/./js/script.js?");

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