if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist')
} else {
  require('babel-register')
  module.exports = require('./src')
}
