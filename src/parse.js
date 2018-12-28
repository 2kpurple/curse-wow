import { CURSE_HOST } from './curse-const'
import cheerio from 'cheerio'

function parseCursePage(html) {
  if (!html) {
    return []
  }

  const $ = cheerio.load(html)
  const result = []
  $('.project-list-item').each((index, elem) => {
    const element = $(elem)
    const icon = element.find('.list-item__avatar img').attr('src')
    const name = element.find('.list-item__title').text().trim()
    const url = CURSE_HOST + element.find('a.avatar__container').attr('href')
    const updateTime = element.find('span.date--updated abbr').attr('data-epoch')
    const desc = element.find('div.list-item__description').text().trim()
    result.push({
      icon,
      name,
      url,
      updateTime,
      desc
    })
  })
  return result
}

function parseCurseCategory(html) {
  if (!html) {
    return []
  }

  const $ = cheerio.load(html)
  const result = {}
  $('.tier-holder .category__item').each((index, elem) => {
    const element = $(elem)
    const name = element.find('.category__title').text()
    const url = element.find('a').attr('href')
    result[name] = {
      name,
      url
    }
  })
  return result
}

export default {
  parseCursePage,
  parseCurseCategory
}
