const APP = require('./script')

function init() {
  const searchInputElem = document.getElementById('search-key')
  const btnSearchElem = document.getElementById('btn-search')
  const filterElem = document.getElementById('filter-option')
  const sortElem = document.getElementById('sort-order')

  APP.getData(APP.jsonUrl, APP.filter)

  searchInputElem.addEventListener('change', APP.onChangeSearchKey)
  btnSearchElem.addEventListener('click', APP.onChangeSearchKey)
  filterElem.addEventListener('change', APP.changeFilter)
  sortElem.addEventListener('change', APP.changeSortOrder)
}

init()