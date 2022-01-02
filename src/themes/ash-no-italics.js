const { Theme } = require('../theme')
const themeAsh = require('./ash')

const theme = new Theme()
  .extends(themeAsh)
  .setName('Ash (No italics)')
  .setOptions({
    italics: false
  })

module.exports = theme