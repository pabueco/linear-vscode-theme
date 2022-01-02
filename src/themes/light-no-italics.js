const { Theme } = require('../theme')
const themeLight = require('./light')

const theme = new Theme()
  .extends(themeLight)
  .setName('Light (No italics)')
  .setOptions({
    italics: false
  })

module.exports = theme