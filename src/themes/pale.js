const { Theme } = require('../theme')

const theme = new Theme()
  .setName('Pale')
  .setColors('#7d57c1', '#292D3E')
  .modifyColorGeneration({
    saturation: 0.20,
    brightnessStart: 0.20
  })

module.exports = theme