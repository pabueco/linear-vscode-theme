const { TinyColor } = require('@ctrl/tinycolor')
const { makeTheme } = require('../utils')
const { isReadable, readability } = require('@ctrl/tinycolor');

const theme = makeTheme('#6e79d6', '#f7faff', {
  invert: true,
  brightnessStart: 0.01,
  brightnessStep: 0.035,
  colorTransform: (color) => {
    // const c = color.clone().toHsl()
    let c = color.clone()
    
    // while (!isReadable(c, '#fff')) {
    while (readability(c, '#fff') < 3.4) {
      // c.l -= 0.01
      c = c.darken(0.5)
      c = c.saturate(0.5)
      
      // if (c.s < 0.9) {
      //   c.s += 0.01
      // }
    }

    return new TinyColor(c)
  }
}, {
  ui: {
    base: {
      "0"  : '#ffffff',
    }
  },
  tokens: {
    property: '#c638a2'
  }
})

module.exports = {
  name: 'Light',
  type: 'light',
  ...theme
}