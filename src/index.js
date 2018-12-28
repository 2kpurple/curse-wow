import parser from './parse'
import * as http from './utils/http'
import categories from '../res/category.json'
import _ from 'lodash'
import {
  CURSE_HOST,
  CURSE_WOW_HOST
} from './curse-const'

async function getAddons(index, wowVersion, sort) {
  const result = await _reqCurse('',
    _getRequestOption(index, wowVersion, sort))
  return result
}

async function searchAddons(name) {
  const result = await _reqCurse('search', {
    search: name
  })
  return result
}

function getCategoriesList() {
  return categories
}

async function getAddonsByCategory(category, index, wowVersion, sort) {
  const info = categories[category]
  if (!info) {
    return []
  }

  const resp = await http.get(CURSE_HOST + categories[category].url,
    _getRequestOption(index, wowVersion, sort))
  const result = parser.parseCursePage(resp)
  return result
}

async function updateCategory() {
  const resp = await http.get(CURSE_WOW_HOST)
  const result = parser.parseCurseCategory(resp)
  return result
}

async function _reqCurse(path, params) {
  const resp = await http.get(CURSE_WOW_HOST + path, params)
  return parser.parseCursePage(resp)
}

function _getRequestOption(index, gameVersion, sort) {
  const option = {
    index: index || 1
  }

  if (gameVersion) {
    _.defaults(option, gameVersion)
  }
  if (sort) {
    _.defaults(option, sort)
  }

  return option
}

export default {
  getAddons,
  searchAddons,
  getAddonsByCategory,
  getCategoriesList,
  updateCategory
}
