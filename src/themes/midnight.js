const { Theme } = require('../theme')

const theme = new Theme('#d25e65', '#0F0F10', {
  saturation: 0.03,
  brightnessStart: 0.06
})

module.exports = {
  name: 'Midnight',
  type: 'dark',
  ...theme.make()
}