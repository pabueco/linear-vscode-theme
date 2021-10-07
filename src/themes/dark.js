const { makeTheme } = require('../utils')

const theme = makeTheme('#5e6ad2', '#1F2023', {
  saturation: 0.06,
  brightnessStart: 0.13
})

module.exports = {
  name: 'Dark',
  type: 'dark',
  ...theme
}