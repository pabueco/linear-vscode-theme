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
    })

    const makeShade = (steps, color = baseColor, s = mergedOptions.saturation, l = null) => {
      const c = color.clone()
      const hsl = c.toHsl()
      hsl.s = mergedOptions.saturation
      hsl.l = l || mergedOptions.brightnessStart + (steps * mergedOptions.brightnessStep)
      return new TinyColor(hsl)
    }

    // const adjustedDefaultColors = mapValuesDeep(
    //   cloneDeep(defaultColors),
    //   (v) => {
    //     const c = new TinyColor(v)
    //     if (!c.isValid) {
    //       return v
    //     }

    //     return c.mix(baseColorPure, 50).toHexString()
    //   },
    //   { leavesOnly: true }
    // );

    return merge(cloneDeep({}), cloneDeep(defaultColors), {
      ui: {
        text: {
          default: makeShade(16).toHexString()
        },
        primary: {
          default: primaryColor.toHexString(),
          shade: primaryColor.clone().brighten(8).toHexString(),
          light: primaryColor.clone().brighten(16).toHexString(),
          lighter: primaryColor.clone().brighten(24).toHexString(),
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

      components: {
        border: makeShade(1.5).toHexString(),
      }
    }, overrides)
  }
}