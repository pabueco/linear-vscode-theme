const { Theme } = require('../theme')
const themeMidnight = require('./midnight')

const theme = new Theme()
  .extends(themeMidnight)
  .setName('Midnight (No italics)')
  .setOptions({
    italics: false
  })

module.exports = theme