const { TinyColor } = require('@ctrl/tinycolor')
const mapValuesDeep = require('deepdash/mapValuesDeep')
const { merge, defaults, cloneDeep } = require('lodash')
const defaultColors = require('./default')

module.exports = {
  makeTheme: (primary, base, options = {}, overrides = {}) => {

    const primaryColor = new TinyColor(primary)
    const baseColor = new TinyColor(base)
    const baseColorPure = new TinyColor(base).brighten(20).saturate(20)

    const mergedOptions = defaults(options, {
      saturationOffset: 0,
      brightnessStart: 0.16,
      brightnessStep: 0.04,
      saturation: 0.15,
      invert: false,
      colorTransform: null
    })

    const makeShade = (steps, color = baseColor, s = mergedOptions.saturation, l = null) => {
      const c = color.clone()
      const hsl = c.toHsl()
      hsl.s = mergedOptions.saturation
      hsl.l = l || mergedOptions.brightnessStart + (steps * mergedOptions.brightnessStep)

      if (mergedOptions.invert) {
        hsl.l = 1 - hsl.l
      }

      return new TinyColor(hsl)
    }

    // const c = new TinyColor(v)
    // if (!c.isValid) {
    //   return v
    // }

    // return c.mix(baseColorPure, 50).toHexString()

    const adjustedColors = mergedOptions.colorTransform ? mapValuesDeep(
      cloneDeep(defaultColors),
      (v) => {
        const c = new TinyColor(v)
        if (!c.isValid) return v
        return mergedOptions.colorTransform(c).toHexString()
      },
      { leavesOnly: true }
    ) : defaultColors;

    return merge(cloneDeep({}), cloneDeep({ ...adjustedColors }), {
      ui: {
        text: {
          default: makeShade(16).toHexString()
        },
        primary: {
          default: primaryColor.toHexString(),
          shade: (mergedOptions.invert ? primaryColor.darken(5) : primaryColor.brighten(8)).toHexString(),
          light: (mergedOptions.invert ? primaryColor.darken(10) : primaryColor.brighten(16)).toHexString(),
          lighter: (mergedOptions.invert ? primaryColor.darken(15) : primaryColor.brighten(24)).toHexString(),
        },
        base: {
          "0"  : makeShade(0).toHexString(),
          "100": makeShade(1).toHexString(),
          "150": makeShade(1.5).toHexString(),
          "200": makeShade(2).toHexString(),
          "300": makeShade(3).toHexString(),
          "400": makeShade(4).toHexString(),
          "500": makeShade(5).toHexString(),
          "600": makeShade(6).toHexString(),
          "700": makeShade(7).toHexString(),
          "800": makeShade(8).toHexString(),
          "900": makeShade(9).toHexString(),
        },
        cursor: {
          default: primaryColor.clone().brighten(10).saturate(10).toHexString()
        },
      },

      tokens: {
        comment: makeShade(11).toHexString(),
        variable: makeShade(19).toHexString(),
      },

      components: {
        border: makeShade(1.5).toHexString(),
      }
    }, overrides)
  }
}