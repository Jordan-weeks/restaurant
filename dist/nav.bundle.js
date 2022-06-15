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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildHome\": () => (/* binding */ buildHome)\n/* harmony export */ });\nconst buildHome = () => {\n  // create DOM elements\n  let content = document.getElementById(\"content\")\n  let hero = document.createElement(\"div\")\n  let heroText = document.createElement(\"div\")\n  let header1 = document.createElement(\"h1\")\n  let header2 = document.createElement(\"h1\")\n  let img = document.createElement(\"img\")\n  let homeButton = document.querySelector(\".home\")\n    \n  \n  //append DOM elements\n  content.appendChild(hero)\n  hero.appendChild(heroText)\n  heroText.append(header1,img,header2)\n  \n  //apply classes to elements\n  hero.classList.add(\"hero\")\n  heroText.classList.add(\"hero-text\")\n  homeButton.classList.add(\"nav-active\")\n  \n  // apply inner text\n  header1.innerText = \"Big Brew\"\n  header2.innerText = \"Tap house\"\n  img.src=\"../src/assets/beer.jpg\"\n  }\n  \n     \n\n\n \n\n//# sourceURL=webpack://Restaurant/./src/home.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aboutButton\": () => (/* binding */ aboutButton),\n/* harmony export */   \"build\": () => (/* binding */ build),\n/* harmony export */   \"homeButton\": () => (/* binding */ homeButton),\n/* harmony export */   \"menuButton\": () => (/* binding */ menuButton)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\n\n\nconst build = () => {\n\n\n    // create DOM elements\n    let content = document.getElementById(\"content\")\n    let nav = document.createElement(\"div\")\n    let home = document.createElement(\"div\")\n    let menu = document.createElement(\"div\")\n    let about = document.createElement(\"div\")\n    \n    \n    \n    //append DOM elements\n    content.appendChild(nav)\n    nav.appendChild(home)\n    nav.appendChild(menu)\n    nav.appendChild(about)\n    \n    //apply classes to elements\n    nav.classList.add(\"nav\")\n    home.classList.add(\"home\")\n    menu.classList.add(\"menu\")\n    about.classList.add(\"about\")\n   \n    \n    \n    // apply inner text\n    home.innerText = \"Home\"\n    menu.innerText = \"Menu\"\n    about.innerText = \"About\"\n    \n    \n    }\n     let aboutButton = document.querySelector(\".about\")\n    let homeButton = document.querySelector(\".home\")\n    let menuButton = document.querySelector(\".menu\")\n    \n    \n\n//# sourceURL=webpack://Restaurant/./src/nav.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/nav.js");
/******/ 	
/******/ })()
;