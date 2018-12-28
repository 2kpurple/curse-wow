const Curse = require('../index')

const curse = new Curse()
curse.page(0).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})

Curse._buildCategory()
