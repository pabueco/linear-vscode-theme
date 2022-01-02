const { Theme } = require('../theme')

const theme = new Theme()
  .setName('Dark')
  .setColors('#5e6ad2', '#1F2023')
  .modifyColorGeneration({
    saturation: 0.06,
    brightnessStart: 0.13
  })

module.exports = theme