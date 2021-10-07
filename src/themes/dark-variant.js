const { makeTheme } = require("../utils")

const theme = makeTheme('#5e6ad2', '#1F2023', {
  saturation: 0.06,
  brightnessStart: 0.13
}, {
  tokens: {
    string: "#ffd18b",
    stringPunctuation: "#ffcb8b9d",
    constNumber: "#97D484",
    unit: "#59b13e",
  }
})

module.exports = {
  name: 'Dark Variant',
  type: 'dark',
  ...theme,
}