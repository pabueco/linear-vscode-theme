const { Theme } = require('../theme')
const themeRider = require('./dark-rider')

const theme = new Theme()
  .extends(themeRider)
  .setName('Dark Rider (No italics)')
  .setOptions({
    italics: false
  })

module.exports = theme