import * as path from 'path'

const CURSE_HOST = 'https://www.curseforge.com'
const CURSE_WOW_HOST = CURSE_HOST + '/wow/addons/'
const CATEGORY_FILE_PATH = path.join(__dirname, '..', 'res', 'category.json')

module.exports = {
  CURSE_HOST,
  CURSE_WOW_HOST,
  CATEGORY_FILE_PATH
}
