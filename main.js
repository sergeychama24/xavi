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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   deleteCard: () => (/* binding */ deleteCard),\n/* harmony export */   likeCard: () => (/* binding */ likeCard),\n/* harmony export */   openCard: () => (/* binding */ openCard)\n/* harmony export */ });\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/components/modal.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\nvar cardTemplate = document.querySelector('#card-template').content;\nfunction createCard(dataCard, deleteCard, likeCard, openCard) {\n  var cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);\n  var cardImage = cardElement.querySelector('.card__image');\n  cardImage.src = dataCard.link;\n  cardImage.alt = dataCard.name;\n  var cardTitle = cardElement.querySelector('.card__title');\n  cardTitle.textContent = dataCard.name;\n  var likeButton = cardElement.querySelector('.card__like-button');\n  likeButton.addEventListener('click', function () {\n    likeCard(likeButton);\n  });\n  cardImage.addEventListener('click', function () {\n    openCard(cardElement);\n  });\n  var cardDeleteButton = cardElement.querySelector('.card__delete-button');\n  cardDeleteButton.addEventListener('click', function () {\n    deleteCard(cardElement);\n  });\n  return cardElement;\n}\nfunction deleteCard(cardElement) {\n  cardElement.remove();\n}\nfunction likeCard(likeButton) {\n  likeButton.classList.toggle('card__like-button_is-active');\n}\nfunction openCard(cardElement) {\n  var cardImage = cardElement.querySelector('.card__image');\n  var cardTitle = cardElement.querySelector('.card__title');\n  _index__WEBPACK_IMPORTED_MODULE_1__.imagePopupTitle.textContent = cardTitle.textContent;\n  _index__WEBPACK_IMPORTED_MODULE_1__.imagePopupImage.src = cardImage.src;\n  _index__WEBPACK_IMPORTED_MODULE_1__.imagePopupImage.alt = cardImage.alt;\n  (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)(_index__WEBPACK_IMPORTED_MODULE_1__.showImagePopup);\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/card.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewCard: () => (/* binding */ addNewCard),\n/* harmony export */   changeProfileInfo: () => (/* binding */ changeProfileInfo),\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ \"./src/components/card.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\nfunction openModal(popup) {\n  popup.classList.toggle('popup_is-animated');\n  setTimeout(function () {\n    popup.classList.add(\"popup_is-opened\");\n  }, 1);\n  document.addEventListener('click', handlerOverlayClick);\n  document.addEventListener('keydown', handleEscKeyPress);\n}\nfunction closeModal(popup) {\n  popup.classList.remove(\"popup_is-opened\");\n  setTimeout(function () {\n    popup.classList.toggle(\"popup_is-animated\");\n  }, 400);\n  document.removeEventListener('keydown', handleEscKeyPress);\n  document.removeEventListener('click', handlerOverlayClick);\n}\nfunction handleEscKeyPress(event) {\n  if (event.key === 'Escape') {\n    var openedPopup = document.querySelector('.popup_is-opened');\n    if (openedPopup) {\n      closeModal(openedPopup);\n    }\n  }\n}\nfunction handlerOverlayClick(event) {\n  if (event.target.classList.contains(\"popup_is-opened\")) {\n    closeModal(event.target);\n  }\n}\nfunction changeProfileInfo(editProfileForm, editProfilePopup) {\n  var nameInput = editProfileForm.elements.name;\n  var jobInput = editProfileForm.elements.description;\n  nameInput.value = _index__WEBPACK_IMPORTED_MODULE_1__.profileTitle.textContent;\n  jobInput.value = _index__WEBPACK_IMPORTED_MODULE_1__.profileDescription.textContent;\n  function handleProfileSubmit(evt) {\n    evt.preventDefault();\n    var nameValue = nameInput.value;\n    var jobValue = jobInput.value;\n    _index__WEBPACK_IMPORTED_MODULE_1__.profileTitle.textContent = nameValue;\n    _index__WEBPACK_IMPORTED_MODULE_1__.profileDescription.textContent = jobValue;\n    closeModal(editProfilePopup);\n  }\n  editProfileForm.addEventListener('submit', handleProfileSubmit);\n}\nfunction addNewCard(addNewCardForm, popup) {\n  var placeNameInput = addNewCardForm.elements['place-name'];\n  var urlInput = addNewCardForm.elements.link;\n  function handleAddNewCard(evt) {\n    evt.preventDefault();\n    var dataCard = {\n      name: placeNameInput.value,\n      link: urlInput.value\n    };\n    var card = (0,_card__WEBPACK_IMPORTED_MODULE_0__.createCard)(dataCard, _card__WEBPACK_IMPORTED_MODULE_0__.deleteCard, _card__WEBPACK_IMPORTED_MODULE_0__.likeCard, _card__WEBPACK_IMPORTED_MODULE_0__.openCard);\n    _index__WEBPACK_IMPORTED_MODULE_1__.cardList.prepend(card);\n    evt.target.reset();\n    closeModal(popup);\n  }\n  addNewCardForm.addEventListener('submit', handleAddNewCard);\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/modal.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cardList: () => (/* binding */ cardList),\n/* harmony export */   editProfileForm: () => (/* binding */ editProfileForm),\n/* harmony export */   imagePopupImage: () => (/* binding */ imagePopupImage),\n/* harmony export */   imagePopupTitle: () => (/* binding */ imagePopupTitle),\n/* harmony export */   profileDescription: () => (/* binding */ profileDescription),\n/* harmony export */   profileTitle: () => (/* binding */ profileTitle),\n/* harmony export */   showImagePopup: () => (/* binding */ showImagePopup)\n/* harmony export */ });\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _components_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cards */ \"./src/components/cards.js\");\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/card */ \"./src/components/card.js\");\n/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal */ \"./src/components/modal.js\");\n\n\n\n\nvar cardList = document.querySelector('.places__list');\nvar profileTitle = document.querySelector('.profile__title');\nvar profileDescription = document.querySelector('.profile__description');\nvar editProfileForm = document.forms['edit-profile'];\nvar editProfilePopup = document.querySelector('.popup_type_edit');\nvar editProfileButton = document.querySelector('.profile__edit-button');\nvar addNewCardForm = document.forms['new-place'];\nvar addNewCardButton = document.querySelector('.profile__add-button');\nvar addNewCardPopup = document.querySelector('.popup_type_new-card');\nvar showImagePopup = document.querySelector('.popup_type_image');\nvar imagePopupTitle = document.querySelector('.popup__caption');\nvar imagePopupImage = document.querySelector('.popup__image');\nvar closeButtons = document.querySelectorAll('.popup__close');\n_components_cards__WEBPACK_IMPORTED_MODULE_1__.initialCards.forEach(function (dataCard) {\n  var newCard = (0,_components_card__WEBPACK_IMPORTED_MODULE_2__.createCard)(dataCard, _components_card__WEBPACK_IMPORTED_MODULE_2__.deleteCard, _components_card__WEBPACK_IMPORTED_MODULE_2__.likeCard, _components_card__WEBPACK_IMPORTED_MODULE_2__.openCard);\n  cardList.append(newCard);\n});\neditProfileButton.addEventListener('click', function () {\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)(editProfilePopup);\n});\naddNewCardButton.addEventListener('click', function () {\n  return (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)(addNewCardPopup);\n});\ncloseButtons.forEach(function (button) {\n  var popup = button.closest('.popup');\n  button.addEventListener('click', function () {\n    return (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.closeModal)(popup);\n  });\n});\n(0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.changeProfileInfo)(editProfileForm, editProfilePopup);\n(0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.addNewCard)(addNewCardForm, addNewCardPopup);\n\n//# sourceURL=webpack://mesto-project-ff/./src/index.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;