const { Theme } = require('../theme')

const theme = new Theme('#5e6ad2', '#1F2023', {
  saturation: 0.06,
  brightnessStart: 0.13
})

module.exports = {
  name: 'Dark',
  type: 'dark',
  ...theme.make()
}