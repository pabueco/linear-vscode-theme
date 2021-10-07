const { makeTheme } = require('../utils')

const theme = makeTheme('#7d57c1', '#292D3E', {
  saturation: 0.20,
  brightnessStart: 0.20
})

module.exports = {
  name: 'Pale',
  type: 'dark',
  ...theme
}