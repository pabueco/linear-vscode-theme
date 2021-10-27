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
  }),
}