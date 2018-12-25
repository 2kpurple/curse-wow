const Curse = require('../index')

const curse = new Curse()
curse.search('bartender').then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})
