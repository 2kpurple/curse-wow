const curse = require('../index')
console.log(curse)

curse.getAddons().then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})
