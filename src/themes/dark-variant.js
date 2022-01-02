const { Theme } = require("../theme")

const theme = new Theme()
  .setName('Dark Variant')
  .setColors('#5e6ad2', '#1F2023')
  .modifyColorGeneration({
    saturation: 0.06,
    brightnessStart: 0.13
  })
  .overrideColors({
    tokens: {
      string: "#ffd18b",
      stringPunctuation: "#ffcb8b9d",
      constNumber: "#97D484",
      unit: "#59b13e",
    }
  })

module.exports = theme