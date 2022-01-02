const { Theme } = require('../theme')
const themeDarkVariant = require('./dark-variant')

const theme = new Theme()
  .extends(themeDarkVariant)
  .setName('Dark Variant (No italics)')
  .setOptions({
    italics: false
  })

module.exports = theme