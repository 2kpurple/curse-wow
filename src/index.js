import parser from './parse'
import * as http from './utils/http'
import { CURSE_HOST } from './curse-const'

class Curse {
  async page(index = 1) {
    const resp = await http.get(CURSE_HOST + '/wow/addons?page=' + index)
    return parser.parseCursePage(resp)
  }

  async search(name) {
    const resp = await http.get(CURSE_HOST + '/wow/addons/search?search=' + name)
    return parser.parseCursePage(resp)
  }
}

module.exports = Curse
