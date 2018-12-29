if (process.env.NODE_ENV === 'development') {
  require('babel-register')
  module.exports = require('./src').default
} else {
  const Curse = require('./dist')
  module.exports = Curse
}
