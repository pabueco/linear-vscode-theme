const { TinyColor } = require('@ctrl/tinycolor')
const { Theme } = require('../theme')
const { readability } = require('@ctrl/tinycolor');

const theme = new Theme()
  .setName('Ash')
  .setType('light')
  .setColors('#475ba1', '#EDEEF3')
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

theme.overrideColors({
  ui: {
    base: {
      "0"  : '#FBFBFB',
    }
  },
  tokens: {
    property: '#c638a2'
  },
  components: {
    panel: theme.makeShade(1.25).toHexString(),
    border: theme.makeShade(2.5).toHexString()
  }
})

module.exports = theme