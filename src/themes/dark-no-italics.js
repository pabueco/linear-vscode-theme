const { Theme } = require('../theme')
const themeDark = require('./dark')

const theme = new Theme()
  .extends(themeDark)
  .setName('Dark (No italics)')
  .setOptions({
    italics: false
  })

module.exports = theme