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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const APP = __webpack_require__(/*! ./script */ \"./src/script.js\")\n\nfunction init() {\n  const searchInputElem = document.getElementById('search-key')\n  const btnSearchElem = document.getElementById('btn-search')\n  const filterElem = document.getElementById('filter-option')\n  const sortElem = document.getElementById('sort-order')\n\n  APP.getData(APP.jsonUrl, APP.filter)\n\n  searchInputElem.addEventListener('change', APP.onChangeSearchKey)\n  btnSearchElem.addEventListener('click', APP.onChangeSearchKey)\n  filterElem.addEventListener('change', APP.changeFilter)\n  sortElem.addEventListener('change', APP.changeSortOrder)\n}\n\ninit()\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const jsonUrl = \"http://jsonplaceholder.typicode.com/comments\"\nconst dataPerpage = 20\nlet onPage = 1\nlet dataComment = []\nlet sortOrder = 'ascending'\nlet filter = 'postId'\n\n// getData(jsonUrl, filter)\nfunction getData (jsonUrl, field) {\n  fetch(jsonUrl)\n    .then(response => response.json())\n    .then(json => {\n      dataComment = json\n      sortingData(json, field)\n      showPagination(json)\n    })\n    .catch((err) => alert(err))\n}\n\nfunction toJson (data) {\n  return data.json()\n}\n\nfunction showPagination (totalData) {\n  let paginationElem = document.getElementById('pagination')\n  paginationElem.innerHTML = \"\"\n  let totalPage = Math.ceil(searchData(totalData).length/dataPerpage)\n\n  for (let i = 1; i <= totalPage; i++) {\n    let buttonPage = document.createElement('button')\n    buttonPage.textContent = i\n    buttonPage.onclick = changePage(i)\n    if (onPage === i) {\n      buttonPage.disabled = true\n      buttonPage.className = \"page-active\"\n    }\n    paginationElem.appendChild(buttonPage)\n  }\n}\n\nfunction changePage (page) {\n  return () => {\n    console.log('change page')\n    onPage = page\n    // getData(jsonUrl, 'name')\n    sortingData(dataComment, filter)\n    showPagination(dataComment)\n  }\n}\n\nfunction changeFilter () {\n  let selectElem = document.getElementById('filter-option')\n  // getData(jsonUrl, selectElem.value.toLowerCase())\n  filter = selectElem.value\n  sortingData(dataComment, filter)\n  showPagination(dataComment)\n}\n\nfunction changeSortOrder () {\n  let sortorderElem = document.getElementById('sort-order')\n\n  sortOrder = sortorderElem.value\n  sortingData(dataComment, filter)\n  showPagination(dataComment)\n}\n\nfunction sortingData (dataJson, filter) {\n  // let data = dataJson\n\n  let data = APP.searchData(dataJson)\n  data.sort((a, b) => {\n    let dataA = a[filter]\n    let dataB = b[filter]\n    if (dataA < dataB) {\n      return -1\n    }\n    if (dataA > dataB) {\n      return 1\n    }\n\n    return 0;\n  })\n  if (sortOrder === 'descending') {\n    data = data.reverse()\n  }\n  return APP.showData(data)\n}\n\nfunction searchData (dataJson) {\n  let dataSearch = Object.assign([], dataJson)\n  let keySearchElem = document.getElementById('search-key')\n\n  dataSearch = dataSearch.filter((data) => {\n    return data.body.toLowerCase().includes(keySearchElem.value.toLowerCase())\n  })\n\n  return dataSearch\n}\n\nfunction onChangeSearchKey () {\n  sortingData(dataComment, filter)\n  showPagination(dataComment)\n}\n\nfunction showData (dataJson) {\n  let containerElem = document.getElementById('container')\n  containerElem.innerHTML = \"\"\n\n  let maxDataShow = dataPerpage*onPage\n\n  for (let i = maxDataShow-dataPerpage; i < maxDataShow; i++) {\n    if (dataJson[i] !== undefined) {\n      let contentElem = document.createElement('div')\n      contentElem.className = \"content\"\n\n      let fieldPostIdELem = document.createElement('div')\n      let fieldIdElem = document.createElement('div')\n      let fieldNameELem = document.createElement('div')\n      let fieldEmailELem = document.createElement('div')\n      let fieldBodyELem = document.createElement('div')\n\n      let textPostID = document.createElement('span')\n      textPostID.textContent = `Post Id : ${dataJson[i].postId}`\n      fieldPostIdELem.appendChild(textPostID)\n\n      let textId = document.createElement('span')\n      textId.textContent = `Id : ${dataJson[i].id}`\n      fieldIdElem.appendChild(textId)\n\n      let textName = document.createElement('span')\n      textName.textContent = `Name : ${dataJson[i].name}`\n      fieldNameELem.appendChild(textName)\n\n      let textEmail = document.createElement('span')\n      textEmail.textContent = `Email : ${dataJson[i].email}`\n      fieldEmailELem.appendChild(textEmail)\n\n      let textBody = document.createElement('span')\n      textBody.textContent = `Body : ${dataJson[i].body}`\n      fieldBodyELem.appendChild(textBody)\n\n      contentElem.appendChild(fieldPostIdELem)\n      contentElem.appendChild(fieldIdElem)\n      contentElem.appendChild(fieldNameELem)\n      contentElem.appendChild(fieldEmailELem)\n      contentElem.appendChild(fieldBodyELem)\n\n      containerElem.appendChild(contentElem)\n    }\n  }\n}\n\n// TESTING\nconst APP = {\n  showData, \n  searchData, \n  sortingData, \n  getData, \n  jsonUrl, \n  filter, \n  onChangeSearchKey, \n  changeSortOrder, \n  changeFilter\n}\nmodule.exports = APP\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ })

/******/ });