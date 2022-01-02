const { Theme } = require('../theme')
const themePale = require('./pale')

const theme = new Theme()
  .extends(themePale)
  .setName('Pale (No italics)')
  .setOptions({
    italics: false
  })

module.exports = theme