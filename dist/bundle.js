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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body{\\r\\n    font-family: \\\"gameFontBold\\\";\\r\\n}\\r\\n\\r\\n#logo{\\r\\n    text-align:center; \\r\\n    border: 10px solid;\\r\\n    border-image-slice: 1;\\r\\n    border-width: 5px;\\r\\n    border-image-source: linear-gradient(to left, #092d79, #ed3df9);\\r\\n}\\r\\n\\r\\n.gridCell{\\r\\n    height:10%;\\r\\n    width:10%;\\r\\n    background-color:white;\\r\\n    border: 10px solid;\\r\\n    border-image-slice: 1;\\r\\n    border-width: 1px;\\r\\n    border-image-source: linear-gradient(to left, #092d79, #ed3df9);\\r\\n    float: left;\\r\\n    \\r\\n}\\r\\n.gridCell:hover{\\r\\n    background-color:#ed3df9;\\r\\n\\r\\n}\\r\\n.gridCell img {\\r\\n   width:50px;\\r\\n   height: 50px;\\r\\n}\\r\\n.gameGrid{\\r\\n    height:600px;\\r\\n    width:600px;\\r\\n}\\r\\n\\r\\n.obstacle{\\r\\n    background-color:rgba(42,11,31,0.3);\\r\\n}\\r\\n.obstacle:hover{\\r\\n    background-color:rgba(42,11,31,0.3);\\r\\n}\\r\\n\\r\\n.highlight{\\r\\n    background-color:rgba(213,58,157,0.3);\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/styles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/css/styles.css?");

/***/ }),

/***/ "./src/images/dagger.png":
/*!*******************************!*\
  !*** ./src/images/dagger.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/dagger.png\");\n\n//# sourceURL=webpack:///./src/images/dagger.png?");

/***/ }),

/***/ "./src/images/grenade.png":
/*!********************************!*\
  !*** ./src/images/grenade.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/grenade.png\");\n\n//# sourceURL=webpack:///./src/images/grenade.png?");

/***/ }),

/***/ "./src/images/pistol.png":
/*!*******************************!*\
  !*** ./src/images/pistol.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/pistol.png\");\n\n//# sourceURL=webpack:///./src/images/pistol.png?");

/***/ }),

/***/ "./src/images/rocket.png":
/*!*******************************!*\
  !*** ./src/images/rocket.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/rocket.png\");\n\n//# sourceURL=webpack:///./src/images/rocket.png?");

/***/ }),

/***/ "./src/js/Coordinates.js":
/*!*******************************!*\
  !*** ./src/js/Coordinates.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Coordinates = {\n  available: [],\n  weapon: [],\n  obstacle: [],\n  player: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Coordinates);\n\n//# sourceURL=webpack:///./src/js/Coordinates.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid.js */ \"./src/js/grid.js\");\n/* harmony import */ var _weapon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weapon.js */ \"./src/js/weapon.js\");\n\n\nvar parentGrid = document.getElementById(\"gameGrid\");\nvar grid1 = new _grid_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10, 10);\ngrid1.generateGrid();\ngrid1.setPlayersPlace();\ngrid1.setWeaponsPlace();\ngrid1.setObstaclePlace();\ninitializeDamage();\nvar players = [document.getElementById(\"gridCell\" + grid1.coords.player[0][0] + \"-\" + grid1.coords.player[0][1]), document.getElementById(\"gridCell\" + grid1.coords.player[1][0] + \"-\" + grid1.coords.player[1][1])];\nvar turn = getRandomInt(0, 2);\nconsole.log(\"turn\", turn + 1); //Accessing the buttons to be used in fight sequence i.e in startFight() method\n\nvar player1Attack = document.getElementById(\"player1-attack\");\nvar player1Defend = document.getElementById(\"player1-defend\");\nvar player2Attack = document.getElementById(\"player2-attack\");\nvar player2Defend = document.getElementById(\"player2-defend\"); //Hiding the buttons\n\nhideAllButtons(); //Automatically show the player positions on generation\n\nfunction startGame(turn) {\n  //highlight the possible moves first\n  grid1.playersArray[turn].highlightMoves(turn, grid1.coords); //if the highlighted cell is clicked, move the current player there\n\n  parentGrid.onclick = function (e) {\n    //Removing image from current position\n    if (e.target && e.target.matches(\"div.highlight\")) {\n      while (players[turn].firstChild) {\n        players[turn].removeChild(players[turn].firstChild);\n      }\n\n      var highlightedCells = document.querySelectorAll(\".highlight\");\n      highlightedCells.forEach(function (elem) {\n        elem.classList.remove(\"highlight\");\n      }); //Changing the coordinates to the new position\n\n      var highlighted = e.target.id;\n      grid1.coords.player[turn][0] = parseInt(highlighted.slice(8, 9));\n      grid1.coords.player[turn][1] = parseInt(highlighted.slice(10));\n      players = [document.getElementById(\"gridCell\" + grid1.coords.player[0][0] + \"-\" + grid1.coords.player[0][1]), document.getElementById(\"gridCell\" + grid1.coords.player[1][0] + \"-\" + grid1.coords.player[1][1])]; //Moving the player to the new position, by moving its image\n\n      var moveHere = document.getElementById(highlighted);\n      var img = document.createElement(\"img\");\n      img.src = grid1.playersArray[turn].imageUrl;\n      moveHere.appendChild(img); //Checking if the current position has any weapon on it, then update the weapon and damage\n\n      if (grid1.coords.available[grid1.coords.player[turn][0]][grid1.coords.player[turn][1]][2] instanceof _weapon_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n        var weapon = grid1.coords.available[grid1.coords.player[turn][0]][grid1.coords.player[turn][1]][2];\n        players[turn].removeChild(players[turn].childNodes[0]);\n        grid1.playersArray[turn].updateWeaponAndDamage(grid1.playersArray[turn].name, weapon);\n      }\n\n      if (grid1.coords.player[0][0] === grid1.coords.player[1][0] || grid1.coords.player[0][1] === grid1.coords.player[1][1]) {\n        console.log(\"Players are in same row or column\");\n        startFight(turn);\n        return;\n      }\n\n      changeTurn(turn);\n    }\n  };\n}\n\nfunction startFight(turn) {\n  //Hiding all Buttons \n  hideAllButtons(); //Checking which player has the turn, if player 1 moved last, then fight will start from player 2 and vice versa\n\n  if (turn === 0) {\n    showButton(player2Attack);\n    showButton(player2Defend);\n\n    player2Attack.onclick = function () {\n      console.log(\"Player 2 Attacked\");\n      var wpn = grid1.playersArray[1].currentWeapon;\n\n      if (wpn === \"stone\") {\n        grid1.playersArray[0].health = grid1.playersArray[0].health - 5;\n\n        if (grid1.playersArray[0].health <= 0) {\n          console.log(\"Player 2 Won!\");\n        }\n      } else if (wpn === \"dagger\") {\n        grid1.playersArray[0].health = grid1.playersArray[0].health - 10;\n\n        if (grid1.playersArray[0].health <= 0) {\n          console.log(\"Player 2 Won!\");\n        }\n      } else if (wpn === \"pistol\") {\n        grid1.playersArray[0].health = grid1.playersArray[0].health - 15;\n\n        if (grid1.playersArray[0].health <= 0) {\n          console.log(\"Player 2 Won!\");\n        }\n      } else if (wpn === \"rocket\") {\n        grid1.playersArray[0].health = grid1.playersArray[0].health - 35;\n\n        if (grid1.playersArray[0].health <= 0) {\n          console.log(\"Player 2 Won!\");\n        }\n      } else if (wpn === \"grenade\") {\n        grid1.playersArray[0].health = grid1.playersArray[0].health - 20;\n\n        if (grid1.playersArray[0].health <= 0) {\n          console.log(\"Player 2 Won!\");\n        }\n      }\n\n      startFight(1);\n    };\n\n    player2Defend.onclick = function () {\n      console.log(\"Player 2 Defended\");\n      startFight(1);\n    };\n  } else if (turn === 1) {\n    showButton(player1Attack);\n    showButton(player1Defend);\n\n    player1Attack.onclick = function () {\n      console.log(\"Player 1 Attacked\");\n      var wpn = grid1.playersArray[0].currentWeapon;\n\n      if (wpn === \"stone\") {\n        grid1.playersArray[1].health = grid1.playersArray[1].health - 5;\n\n        if (grid1.playersArray[1].health <= 0) {\n          console.log(\"Player 1 Won!\");\n        } //safasf\n\n      } else if (wpn === \"dagger\") {\n        grid1.playersArray[1].health = grid1.playersArray[1].health - 10;\n\n        if (grid1.playersArray[1].health <= 0) {\n          console.log(\"Player 1 Won!\");\n        }\n      } else if (wpn === \"pistol\") {\n        grid1.playersArray[1].health = grid1.playersArray[1].health - 15;\n\n        if (grid1.playersArray[1].health <= 0) {\n          console.log(\"Player 1 Won!\");\n        }\n      } else if (wpn === \"rocket\") {\n        grid1.playersArray[1].health = grid1.playersArray[1].health - 35;\n\n        if (grid1.playersArray[1].health <= 0) {\n          console.log(\"Player 1 Won!\");\n        }\n      } else if (wpn === \"grenade\") {\n        grid1.playersArray[1].health = grid1.playersArray[1].health - 20;\n\n        if (grid1.playersArray[1].health <= 0) {\n          console.log(\"Player 1 Won!\");\n        }\n      }\n\n      startFight(0);\n    };\n\n    player1Defend.onclick = function () {\n      console.log(\"Player 1 Defended\");\n      startFight(0);\n    };\n  }\n}\n\nfunction changeTurn(turn) {\n  if (turn === 0) {\n    startGame(1);\n  } else {\n    startGame(0);\n  }\n}\n\nfunction getRandomInt(min, max) {\n  min = Math.ceil(min);\n  max = Math.floor(max);\n  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive\n}\n\nfunction initializeDamage() {\n  var playerDamage1 = document.getElementById(\"player1-damage\");\n  var playerDamage2 = document.getElementById(\"player2-damage\");\n  playerDamage1.innerText = 5;\n  playerDamage2.innerText = 5;\n}\n\nfunction hideAllButtons() {\n  player1Attack.style.display = \"none\";\n  player1Defend.style.display = \"none\";\n  player2Attack.style.display = \"none\";\n  player2Defend.style.display = \"none\";\n}\n\nfunction hideButton(x) {\n  x.style.display = \"none\";\n}\n\nfunction showButton(x) {\n  x.style.display = \"inline\";\n}\n\nstartGame(turn);\n\n//# sourceURL=webpack:///./src/js/game.js?");

/***/ }),

/***/ "./src/js/grid.js":
/*!************************!*\
  !*** ./src/js/grid.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Grid; });\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ \"./src/js/player.js\");\n/* harmony import */ var _weapon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weapon.js */ \"./src/js/weapon.js\");\n/* harmony import */ var _Coordinates_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Coordinates.js */ \"./src/js/Coordinates.js\");\n/* harmony import */ var _images_pistol_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/pistol.png */ \"./src/images/pistol.png\");\n/* harmony import */ var _images_dagger_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/dagger.png */ \"./src/images/dagger.png\");\n/* harmony import */ var _images_rocket_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/rocket.png */ \"./src/images/rocket.png\");\n/* harmony import */ var _images_grenade_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/grenade.png */ \"./src/images/grenade.png\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\nvar Grid = /*#__PURE__*/function () {\n  function Grid() {\n    var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;\n    var cols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;\n\n    _classCallCheck(this, Grid);\n\n    _defineProperty(this, \"coords\", _Coordinates_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n    _defineProperty(this, \"rows\", void 0);\n\n    _defineProperty(this, \"cols\", void 0);\n\n    _defineProperty(this, \"cellType\", void 0);\n\n    _defineProperty(this, \"weaponsArray\", [new _weapon_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"pistol\", _images_pistol_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]), new _weapon_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"dagger\", _images_dagger_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]), new _weapon_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"rocket\", _images_rocket_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]), new _weapon_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"grenade\", _images_grenade_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"])]);\n\n    _defineProperty(this, \"playersArray\", [new _player_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Player 1\", 100, \"src/images/player1.png\"), new _player_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Player 2\", 100, \"src/images/player2.png\")]);\n\n    this.rows = rows;\n    this.cols = cols;\n  }\n\n  _createClass(Grid, [{\n    key: \"generateGrid\",\n    value: function generateGrid() {\n      var gameGrid = document.getElementById(\"gameGrid\");\n\n      for (var i = 0; i < this.rows; i++) {\n        this.coords.available.push([]);\n\n        for (var j = 0; j < this.cols; j++) {\n          var gridCell = document.createElement(\"div\");\n          gridCell.setAttribute(\"class\", \"gridCell\");\n          gridCell.setAttribute(\"id\", \"gridCell\" + i + \"-\" + j);\n          gameGrid.appendChild(gridCell);\n          this.coords.available[i].push([j, true]);\n        }\n      } // console.log(this.coords.available);\n\n    }\n  }, {\n    key: \"setPlayersPlace\",\n    value: function setPlayersPlace() {\n      var randomRow = Math.floor(Math.random() * 10);\n      var randomCol = Math.floor(Math.random() * 10);\n      var gridCell = document.getElementById(\"gridCell\" + randomRow + \"-\" + randomCol);\n      var img = document.createElement(\"img\");\n      img.src = this.playersArray[0].imageUrl;\n      gridCell.appendChild(img);\n      this.coords.player.push([randomRow, randomCol]);\n      this.coords.available[randomRow][randomCol][1] = false;\n      this.coords.available[randomRow][randomCol][2] = \"player\";\n      var bool = true;\n\n      while (bool) {\n        var randomRow2 = Math.floor(Math.random() * 10);\n\n        if (randomRow2 !== randomRow) {\n          var randomCol2 = Math.floor(Math.random() * 10);\n\n          if (randomCol2 !== randomCol) {\n            var _gridCell = document.getElementById(\"gridCell\" + randomRow2 + \"-\" + randomCol2);\n\n            var _img = document.createElement(\"img\");\n\n            _img.src = this.playersArray[1].imageUrl;\n\n            _gridCell.appendChild(_img);\n\n            this.coords.player.push([randomRow2, randomCol2]);\n            this.coords.available[randomRow2][randomCol2][1] = false;\n            this.coords.available[randomRow][randomCol][2] = \"player\";\n            bool = false;\n          }\n        }\n      }\n\n      console.log(this.coords.player);\n    }\n  }, {\n    key: \"setWeaponsPlace\",\n    value: function setWeaponsPlace() {\n      var i = 1;\n\n      while (i <= 4) {\n        var randomRow = Math.floor(Math.random() * 10);\n        var randomCol = Math.floor(Math.random() * 10);\n\n        if (this.coords.available[randomRow][randomCol][1] === true) {\n          this.coords.available[randomRow][randomCol][1] = false;\n          var weapon = this.generateRandomPos(this.weaponsArray);\n          this.coords.available[randomRow][randomCol][2] = weapon;\n          var img = document.createElement(\"img\");\n          img.src = weapon.imageSrc; // let text = weapon.name;\n\n          var gridCell = document.getElementById(\"gridCell\" + randomRow + \"-\" + randomCol);\n          gridCell.appendChild(img);\n          i++;\n        }\n      }\n\n      console.log(this.coords.weapon);\n    } //Iterating over the Weapons array to check if a weapon is already there so we dont add obstacle on top of weapon\n\n  }, {\n    key: \"setObstaclePlace\",\n    value: function setObstaclePlace() {\n      var i = 1;\n\n      while (i <= 10) {\n        var randomRow = Math.floor(Math.random() * 10);\n        var randomCol = Math.floor(Math.random() * 10);\n\n        if (this.coords.available[randomRow][randomCol][1] === true) {\n          this.coords.available[randomRow][randomCol][1] = false;\n          this.coords.available[randomRow][randomCol][2] = \"obstacle\";\n          this.coords.obstacle.push([randomRow, randomCol]);\n          var gridCell = document.getElementById(\"gridCell\" + randomRow + \"-\" + randomCol);\n          gridCell.classList.add(\"obstacle\");\n          i++;\n        }\n      }\n\n      console.log(this.coords.available);\n    }\n  }, {\n    key: \"generateRandomPos\",\n    value: function generateRandomPos(arr) {\n      var randomIndex = Math.floor(Math.random() * arr.length);\n      var randomItem = arr[randomIndex];\n      return randomItem;\n    }\n  }]);\n\n  return Grid;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/grid.js?");

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Player = /*#__PURE__*/function () {\n  // playerCoords;\n  function Player(name) {\n    var health = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;\n    var image = arguments.length > 2 ? arguments[2] : undefined;\n    var weapon = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \"stone\";\n\n    _classCallCheck(this, Player);\n\n    _defineProperty(this, \"name\", void 0);\n\n    _defineProperty(this, \"health\", void 0);\n\n    _defineProperty(this, \"currentWeapon\", void 0);\n\n    _defineProperty(this, \"imageUrl\", void 0);\n\n    this.name = name;\n    this.health = health;\n    this.imageUrl = image;\n    this.currentWeapon = weapon;\n    this.initiliazeHealth();\n    this.initializeWeapon();\n  }\n\n  _createClass(Player, [{\n    key: \"highlightMoves\",\n    value: function highlightMoves(playerNum, coords) {\n      var steps = 1;\n      var player_x = coords.player[playerNum][0];\n      var player_y = coords.player[playerNum][1];\n      var obstacleDetected = true; // start Highlighting movements along the row\n      //Forward\n\n      while (steps <= 3 && obstacleDetected) {\n        if (player_y + steps <= 9) {\n          if (coords.available[player_x][player_y + steps][2] !== \"obstacle\") {\n            var highlight = document.getElementById(\"gridCell\" + player_x + \"-\" + (player_y + steps)); // coords.highlighted.push([player_x,(player_y + steps)])\n\n            if (highlight !== null) highlight.classList.add(\"highlight\");\n          } else {\n            obstacleDetected = false;\n          }\n        }\n\n        steps++;\n      } //backward\n\n\n      steps = 1;\n      obstacleDetected = true;\n\n      while (steps <= 3 && obstacleDetected) {\n        if (player_y - steps >= 0) {\n          if (coords.available[player_x][player_y - steps][2] !== \"obstacle\") {\n            var _highlight = document.getElementById(\"gridCell\" + player_x + \"-\" + (player_y - steps)); // coords.highlighted.push([player_x,(player_y - steps)])\n\n\n            if (_highlight !== null) _highlight.classList.add(\"highlight\");\n          } else {\n            obstacleDetected = false;\n          }\n        }\n\n        steps++;\n      } //End highlighting along row\n      //Start Highlighting along the y-axis (columns)\n\n\n      steps = 1;\n      obstacleDetected = true;\n\n      while (steps <= 3 && obstacleDetected) {\n        if (player_x - steps >= 0) {\n          if (coords.available[player_x - steps][player_y][2] !== \"obstacle\") {\n            var _highlight2 = document.getElementById(\"gridCell\" + (player_x - steps) + \"-\" + player_y); // coords.highlighted.push([(player_x-steps),player_y])\n\n\n            if (_highlight2 !== null) _highlight2.classList.add(\"highlight\");\n          } else {\n            obstacleDetected = false;\n          }\n        }\n\n        steps++;\n      }\n\n      steps = 1;\n      obstacleDetected = true;\n\n      while (steps <= 3 && obstacleDetected) {\n        if (player_x + steps <= 9) {\n          if (coords.available[player_x + steps][player_y][2] !== \"obstacle\") {\n            var _highlight3 = document.getElementById(\"gridCell\" + (player_x + steps) + \"-\" + player_y); // coords.highlighted.push([(player_x+steps),player_y])\n\n\n            if (_highlight3 !== null) _highlight3.classList.add(\"highlight\");\n          } else {\n            obstacleDetected = false;\n          }\n        }\n\n        steps++;\n      }\n    }\n  }, {\n    key: \"initiliazeHealth\",\n    value: function initiliazeHealth() {\n      var playerHealth1 = document.getElementById(\"player1-health\");\n      var playerHealth2 = document.getElementById(\"player2-health\");\n      playerHealth1.innerText = this.health + \"%\";\n      playerHealth2.innerText = this.health + \"%\";\n    }\n  }, {\n    key: \"initializeWeapon\",\n    value: function initializeWeapon() {\n      var playerWeapon1 = document.getElementById(\"player1-weapon\");\n      var playerWeapon2 = document.getElementById(\"player2-weapon\");\n      playerWeapon1.innerText = this.currentWeapon;\n      playerWeapon2.innerText = this.currentWeapon;\n    }\n  }, {\n    key: \"updateWeaponAndDamage\",\n    value: function updateWeaponAndDamage(playerName, weapon) {\n      var playerWeapon;\n\n      if (playerName === \"Player 1\") {\n        playerWeapon = document.getElementById(\"player1-weapon\");\n      } else if (playerName === \"Player 2\") {\n        playerWeapon = document.getElementById(\"player2-weapon\");\n      }\n\n      console.log(weapon);\n      this.currentWeapon = weapon.name; // let img = document.createElement(\"img\");\n      // img.src = \"http://localhost:8080/src/images/\"+weapon+\".png\";\n      // playerWeapon.appendChild(img);\n\n      playerWeapon.innerText = weapon.name;\n      var playerDamage;\n\n      if (playerName === \"Player 1\") {\n        playerDamage = document.getElementById(\"player1-damage\");\n      } else if (playerName === \"Player 2\") {\n        playerDamage = document.getElementById(\"player2-damage\");\n      }\n\n      playerDamage.innerText = weapon.damage;\n    }\n  }, {\n    key: \"updateHealth\",\n    value: function updateHealth() {}\n  }]);\n\n  return Player;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/player.js?");

/***/ }),

/***/ "./src/js/weapon.js":
/*!**************************!*\
  !*** ./src/js/weapon.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Weapon; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Weapon = function Weapon(name, imageSrc) {\n  _classCallCheck(this, Weapon);\n\n  _defineProperty(this, \"name\", [\"dagger\", \"pistol\", \"rocket\", \"grenade\"]);\n\n  _defineProperty(this, \"damage\", void 0);\n\n  _defineProperty(this, \"imageSrc\", void 0);\n\n  if (name === \"dagger\") {\n    this.name = name;\n    this.damage = 10;\n    this.imageSrc = imageSrc;\n  }\n\n  if (name === \"pistol\") {\n    this.name = name;\n    this.damage = 15;\n    this.imageSrc = imageSrc;\n  }\n\n  if (name === \"rocket\") {\n    this.name = name;\n    this.damage = 35;\n    this.imageSrc = imageSrc;\n  }\n\n  if (name === \"grenade\") {\n    this.name = name;\n    this.damage = 20;\n    this.imageSrc = imageSrc;\n  }\n};\n\n\n\n//# sourceURL=webpack:///./src/js/weapon.js?");

/***/ })

/******/ });