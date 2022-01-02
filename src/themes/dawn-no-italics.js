const { Theme } = require('../theme')
const themeDawn = require('./dawn')

const theme = new Theme()
  .extends(themeDawn)
  .setName('Dawn (No italics)')
  .setOptions({
    italics: false
  })

module.exports = theme