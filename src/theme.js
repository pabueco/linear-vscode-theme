const { TinyColor } = require('@ctrl/tinycolor')
const mapValuesDeep = require('deepdash/mapValuesDeep')
const { merge, defaults, cloneDeep } = require('lodash')
const defaultColors = require('./default')

class Theme {

  primaryColor
  baseColor
  options

  constructor (primary, base, options = {}) {
    this.primaryColor = new TinyColor(primary)
    this.baseColor = new TinyColor(base)

    this.options = defaults(options, {
      saturationOffset: 0,
      brightnessStart: 0.16,
      brightnessStep: 0.04,
      saturation: 0.15,
      invert: false,
      colorTransform: null,
      opacityModifier: 1
    })
  }

  makeShade(steps, color = this.baseColor, s = this.options.saturation, l = null) {
    const c = color.clone()
    const hsl = c.toHsl()
    hsl.s = this.options.saturation
    hsl.l = l || this.options.brightnessStart + (steps * this.options.brightnessStep)

    if (this.options.invert) {
      hsl.l = 1 - hsl.l
    }

    return new TinyColor(hsl)
  }

  make(overrides = {}) {

    const adjustedColors = this.options.colorTransform ? mapValuesDeep(
      cloneDeep(defaultColors),
      (v) => {
        const c = new TinyColor(v)
        if (!c.isValid) return v
        return this.options.colorTransform(c).toHexString()
      },
      { leavesOnly: true }
    ) : defaultColors;

    return merge(cloneDeep({}), cloneDeep({ ...adjustedColors }), {
      ui: {
        text: {
          default: this.makeShade(16).toHexString()
        },
        primary: {
          default: this.primaryColor.toHexString(),
          shade: (this.options.invert ? this.primaryColor.darken(5) : this.primaryColor.brighten(8)).toHexString(),
          light: (this.options.invert ? this.primaryColor.darken(10) : this.primaryColor.brighten(16)).toHexString(),
          lighter: (this.options.invert ? this.primaryColor.darken(15) : this.primaryColor.brighten(24)).toHexString(),
        },
        base: {
          "0": this.makeShade(0).toHexString(),
          "100": this.makeShade(1).toHexString(),
          "150": this.makeShade(1.5).toHexString(),
          "200": this.makeShade(2).toHexString(),
          "300": this.makeShade(3).toHexString(),
          "400": this.makeShade(4).toHexString(),
          "500": this.makeShade(5).toHexString(),
          "600": this.makeShade(6).toHexString(),
          "700": this.makeShade(7).toHexString(),
          "800": this.makeShade(8).toHexString(),
          "900": this.makeShade(9).toHexString(),
        },
        cursor: {
          default: (this.options.invert ? this.primaryColor.clone().darken(21).desaturate(10) : this.primaryColor.clone().brighten(42).saturate(10)).toHexString()
        },
        selection: {
          background: this.primaryColor.saturate(25).brighten(5).setAlpha((this.options.brightnessStart + 0.25) * this.options.opacityModifier).toHex8String(),
          highlightBackground: this.primaryColor.saturate(25).brighten(0).setAlpha((this.options.brightnessStart + 0.1) * this.options.opacityModifier).toHex8String(),
          highlightBorder: this.primaryColor.saturate(25).brighten(5).toHex8String(),
        },
      },

      tokens: {
        comment: this.makeShade(11).toHexString(),
        variable: this.makeShade(19).toHexString(),
      },

      components: {
        border: this.makeShade(1.5).toHexString(),
      }
    }, overrides)
  }
}

module.exports = {
  Theme
}