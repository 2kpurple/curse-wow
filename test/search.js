const Curse = require('../index')

Curse.searchAddons('bartender').then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})
