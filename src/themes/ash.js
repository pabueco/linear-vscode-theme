const { TinyColor } = require('@ctrl/tinycolor')
const { Theme } = require('../theme')
const { readability } = require('@ctrl/tinycolor');

const theme = new Theme('#475ba1', '#EDEEF3', {
  invert: true,
  brightnessStart: 0.05,
  brightnessStep: 0.035,
  opacityModifier: 0.65,
  colorTransform: (color) => {
    let c = color.clone()
    
    while (readability(c, '#fff') < 3.55) {
      c = c.darken(0.5)
      c = c.saturate(0.5)
    }

    return new TinyColor(c)
  }
})

module.exports = {
  name: 'Light',
  type: 'light',
  ...theme.make({
    ui: {
      base: {
        "0"  : '#FBFBFB',
      }
    },
    tokens: {
      property: '#c638a2'
    },
    components: {
      panel: '#EDEEF3',
      border: theme.makeShade(2.5).toHexString()
    }
  })
}