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

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   deleteCard: () => (/* binding */ deleteCard)\n/* harmony export */ });\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/components/modal.js\");\n\nvar cardTemplate = document.querySelector('#card-template').content;\nfunction createCard(dataCard, deleteCard) {\n  var cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);\n  var cardImage = cardElement.querySelector('.card__image');\n  cardImage.src = dataCard.link;\n  cardImage.alt = dataCard.name;\n  var cardTitle = cardElement.querySelector('.card__title');\n  cardTitle.textContent = dataCard.name;\n  var likeButton = cardElement.querySelector('.card__like-button');\n  likeButton.addEventListener('click', function () {\n    LikeHandler(likeButton);\n  });\n  cardImage.addEventListener('click', function () {\n    openCard(cardElement);\n  });\n  var cardDeleteButton = cardElement.querySelector('.card__delete-button');\n  cardDeleteButton.addEventListener('click', function () {\n    deleteCard(cardElement);\n  });\n  return cardElement;\n}\nfunction deleteCard(cardElement) {\n  cardElement.remove();\n}\nfunction LikeHandler(cardElement) {\n  cardElement.classList.toggle('card__like-button_is-active');\n}\nfunction openCard(cardElement) {\n  var imageTypePopup = document.querySelector('.popup_type_image');\n  var popupTitle = document.querySelector('.popup__caption');\n  var popupImage = document.querySelector('.popup__image');\n  var cardImage = cardElement.querySelector('.card__image');\n  var cardTitle = cardElement.querySelector('.card__title');\n  popupTitle.textContent = cardTitle.textContent;\n  popupImage.src = cardImage.src;\n  (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)(imageTypePopup);\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/card.js?");

/***/ }),

/***/ "./src/components/cards.js":
/*!*********************************!*\
  !*** ./src/components/cards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialCards: () => (/* binding */ initialCards)\n/* harmony export */ });\nvar initialCards = [{\n  name: \"Вудди\",\n  link: \"https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\"\n}, {\n  name: \"Котик\",\n  link: \"https://images.unsplash.com/photo-1582789991349-8f8e6eb15308?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\"\n}, {\n  name: \"Пика-пика\",\n  link: \"https://images.unsplash.com/photo-1627693685101-687bf0eb1222?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\"\n}, {\n  name: \"Дружелюбный сосед\",\n  link: \"https://images.unsplash.com/photo-1521714161819-15534968fc5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\"\n}, {\n  name: \"Я - бэтмен\",\n  link: \"https://images.unsplash.com/photo-1610568781018-995405522539?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\"\n}, {\n  name: \"KONNICHIWA\",\n  link: \"https://images.unsplash.com/photo-1590796583326-afd3bb20d22d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\"\n}];\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/cards.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewCard: () => (/* binding */ addNewCard),\n/* harmony export */   changeProfileInfo: () => (/* binding */ changeProfileInfo),\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ \"./src/components/card.js\");\n\nfunction openModal(popup) {\n  popup.classList.toggle('popup_is-animated');\n  popup.classList.add('popup_is-opened');\n  document.addEventListener('click', handlerOverlayClick);\n  document.addEventListener('keydown', handleEscKeyPress);\n}\nfunction closeModal(popup) {\n  popup.classList.remove('popup_is-opened');\n  document.removeEventListener('keydown', handleEscKeyPress);\n  document.removeEventListener('click', handlerOverlayClick);\n}\nfunction handleEscKeyPress(event) {\n  var openedPopup = document.querySelector('.popup_is-opened');\n  if (event.key === 'Escape') {\n    if (openedPopup) {\n      closeModal(openedPopup);\n    }\n  }\n}\nfunction handlerOverlayClick(event) {\n  var openedPopup = document.querySelector('.popup_is-opened');\n  if (event.target === openedPopup) {\n    openedPopup.classList.remove('popup_is-opened');\n  }\n}\nfunction changeProfileInfo(formElement, popup) {\n  var nameInput = formElement.elements.name;\n  var jobInput = formElement.elements.description;\n  function handleFormSubmit(evt) {\n    evt.preventDefault();\n    var nameValue = nameInput.value;\n    var jobValue = jobInput.value;\n    var nameDisplay = document.querySelector('.profile__title');\n    var jobDisplay = document.querySelector('.profile__description');\n    nameDisplay.textContent = nameValue;\n    jobDisplay.textContent = jobValue;\n    closeModal(popup);\n  }\n  formElement.addEventListener('submit', handleFormSubmit);\n}\nfunction addNewCard(formElement, popup) {\n  var placeNameInput = formElement.elements['place-name'];\n  var urlInput = formElement.elements.link;\n  function handleFormSubmit(evt) {\n    evt.preventDefault();\n    var dataCard = {\n      name: placeNameInput.value,\n      link: urlInput.value\n    };\n    var card = (0,_card__WEBPACK_IMPORTED_MODULE_0__.createCard)(dataCard, _card__WEBPACK_IMPORTED_MODULE_0__.deleteCard);\n    var cardList = document.querySelector('.places__list');\n    cardList.prepend(card);\n    placeNameInput.value = '';\n    urlInput.value = '';\n    closeModal(popup);\n  }\n  formElement.addEventListener('submit', handleFormSubmit);\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/modal.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _components_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cards */ \"./src/components/cards.js\");\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/card */ \"./src/components/card.js\");\n/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal */ \"./src/components/modal.js\");\n\n\n\n\nvar cardList = document.querySelector('.places__list');\n_components_cards__WEBPACK_IMPORTED_MODULE_1__.initialCards.forEach(function (dataCard) {\n  var card = (0,_components_card__WEBPACK_IMPORTED_MODULE_2__.createCard)(dataCard, _components_card__WEBPACK_IMPORTED_MODULE_2__.deleteCard);\n  cardList.append(card);\n});\n\n// Добавялем слуштелей событий на кнопки\nvar editProfileButton = document.querySelector('.profile__edit-button');\nvar editProfilePopup = document.querySelector('.popup_type_edit');\nvar addNewCardButton = document.querySelector('.profile__add-button');\nvar addNewCardPopup = document.querySelector('.popup_type_new-card');\nvar editCloseButton = editProfilePopup.querySelector('.popup__close');\nvar addNewCloseButton = addNewCardPopup.querySelector('.popup__close');\neditProfileButton.addEventListener('click', function () {\n  return (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)(editProfilePopup);\n});\naddNewCardButton.addEventListener('click', function () {\n  return (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)(addNewCardPopup);\n});\neditCloseButton.addEventListener('click', function () {\n  return (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.closeModal)(editProfilePopup);\n});\naddNewCloseButton.addEventListener('click', function () {\n  return (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.closeModal)(addNewCardPopup);\n});\nvar editProfileForm = document.forms['edit-profile'];\n(0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.changeProfileInfo)(editProfileForm, editProfilePopup);\nvar addNewCardForm = document.forms['new-place'];\n(0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.addNewCard)(addNewCardForm, addNewCardPopup);\n\n//# sourceURL=webpack://mesto-project-ff/./src/index.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/pages/index.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;