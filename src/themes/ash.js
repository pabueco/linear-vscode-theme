const { TinyColor } = require('@ctrl/tinycolor')
const { Theme } = require('../theme')
const { readability } = require('@ctrl/tinycolor');
const themeLight = require('./light')

const theme = new Theme()
  .extends(themeLight)
  .setName('Ash')
  .setType('light')
  .setColors('#475ba1', '#EDEEF3')

theme.overrideColors({
  components: {
    panel: theme.makeShade(1.25).toHexString(),
    border: theme.makeShade(2.5).toHexString()
  }
})

module.exports = theme