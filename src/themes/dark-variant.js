const { Theme } = require("../theme")

const theme = new Theme('#5e6ad2', '#1F2023', {
  saturation: 0.06,
  brightnessStart: 0.13
})

module.exports = {
  name: 'Dark Variant',
  type: 'dark',
  ...theme.make({
    tokens: {
      string: "#ffd18b",
      stringPunctuation: "#ffcb8b9d",
      constNumber: "#97D484",
      unit: "#59b13e",
    }
  }),
}