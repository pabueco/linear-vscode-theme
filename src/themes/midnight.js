const { Theme } = require('../theme')

const theme = new Theme()
  .setName('Midnight')
  .setColors('#d25e65', '#0F0F10')
  .modifyColorGeneration({
    saturation: 0.03,
    brightnessStart: 0.06
  })

module.exports = theme