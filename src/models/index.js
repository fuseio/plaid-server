require('./Account')
require('./User')
require('./Payment')

module.exports = (mongoose) => {
  mongoose = mongoose || require('mongoose')
  return mongoose
}
