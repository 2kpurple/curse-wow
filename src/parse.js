import { CURSE_HOST } from './curse-const'
import cheerio from 'cheerio'
import Addons from './addons'
import Category from './category'

function parseCursePage(html) {
  const $ = cheerio.load(html)
  const result = []
  $('.project-list-item').each((index, elem) => {
    const element = $(elem)
    const icon = element.find('.list-item__avatar img').attr('src')
    const name = element.find('.list-item__title').text().trim()
    const url = CURSE_HOST + element.find('a.avatar__container').attr('href')
    const updateTime = element.find('span.date--updated abbr').attr('data-epoch')
    const desc = element.find('div.list-item__description').text().trim()
    const cateogry = element.find('.list--item--categories-container .category__item')
    const addons = new Addons(name, url, icon, updateTime, desc, parseAddonsCategory($, cateogry))
    result.push(addons)
  })
  return result
}

function parseAddonsCategory($, categoryElements) {
  const result = []
  categoryElements.each((index, elem) => {
    const name = $(elem).attr('title')
    const url = CURSE_HOST + $(elem).attr('href')
    const category = new Category(name, url)
    result.push(category)
  })
  return result
}

export default {
  parseCursePage
}
