const { Theme } = require("../theme")

const theme = new Theme()
  .setName('Dark Rider')
  .setColors('#5e6ad2', '#1F2023')
  .modifyColorGeneration({
    saturation: 0.15,
    brightnessStart: 0.15
  })
  .overrideColors({
    ui: {
      cursor: {
        default: "#00c4ff",
      },
      terminal: {
        ansiGreen: "#5cc49f",
        ansiBrightGreen: "#76e2b9",
        ansiMagenta: "#b995f8",
        ansiYellow: "#ffc66d",
        ansiCyan: "#50d1eb",
      }
    },
    tokens: {
      entityClassType: "#b995f8",
      string: "#ffc66d",
      stringPunctuation: "#ffc66d9d",
      // constNumber: "#e199be",
      constNumber: "#fe95cb",
      unit: "#c86d9b",
      functionMethodCall: "#6dd2ac",
      functionMethodDefinition: "#76e2b9",
      keywordStorage: "#6897bb",
      keywordDefinition: "#6897bb",
      keywordControlOther: "#6897bb",
      keywordOperator: "#6da2cb",
      keywordOperatorLogicalComparison: "#6da2cb",
      punctuation: "#a9b7c6",
      variable: "#d8e6f5",
      property: "#d8e6f5",
      tag: "#86dada",
      attribute: "#e86888",
    }
  })

module.exports = theme