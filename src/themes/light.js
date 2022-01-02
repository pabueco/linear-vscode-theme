const { TinyColor } = require('@ctrl/tinycolor')
const { Theme } = require('../theme')
const { readability } = require('@ctrl/tinycolor');

const theme = new Theme()
  .setName('Light')
  .setType('light')
  .setColors('#6e79d6', '#f7faff')
  .modifyColorGeneration({
    invert: true,
    brightnessStart: 0.01,
    brightnessStep: 0.035,
    opacityModifier: 1,
    colorTransform: (color) => {
      let c = color.clone()
      
      while (readability(c, '#fff') < 3.55) {
        c = c.darken(0.5)
        c = c.saturate(0.5)
      }

      return new TinyColor(c)
    }
  })
  .overrideColors({
    ui: {
      base: {
        "0"  : '#FBFBFB',
      }
    },
    tokens: {
      property: '#c638a2'
    }
  })

module.exports = theme