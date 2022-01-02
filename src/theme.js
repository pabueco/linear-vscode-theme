const { TinyColor } = require('@ctrl/tinycolor')
const mapValuesDeep = require('deepdash/mapValuesDeep')
const { merge, defaults, cloneDeep } = require('lodash')
const defaultColors = require('./default')

class Theme {

  name = 'Default'
  type = 'dark'
  primary
  base

  primaryColor
  baseColor

  themeOptions = {
    italics: true
  }
  colorOptions = {
    saturationOffset: 0,
    brightnessStart: 0.16,
    brightnessStep: 0.04,
    saturation: 0.15,
    invert: false,
    colorTransform: null,
    opacityModifier: 1
  }
  colorOverrides = {}

  constructor () {}

  makeShade(
    steps, 
    color = this.baseColor, 
    s = this.colorOptions.saturation, 
    l = null
  ) {
    const c = color.clone()
    const hsl = c.toHsl()
    hsl.s = s
    hsl.l = l || this.colorOptions.brightnessStart + (steps * this.colorOptions.brightnessStep)

    if (this.colorOptions.invert) {
      hsl.l = 1 - hsl.l
    }

    return new TinyColor(hsl)
  }

  make() {

    const adjustedColors = this.colorOptions.colorTransform ? mapValuesDeep(
      cloneDeep(defaultColors),
      (v) => {
        const c = new TinyColor(v)
        if (!c.isValid) return v
        return this.colorOptions.colorTransform(c).toHexString()
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
          shade: (this.colorOptions.invert ? this.primaryColor.darken(5) : this.primaryColor.brighten(8)).toHexString(),
          light: (this.colorOptions.invert ? this.primaryColor.darken(10) : this.primaryColor.brighten(16)).toHexString(),
          lighter: (this.colorOptions.invert ? this.primaryColor.darken(15) : this.primaryColor.brighten(24)).toHexString(),
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
          default: (this.colorOptions.invert ? this.primaryColor.clone().darken(21).desaturate(10) : this.primaryColor.clone().brighten(42).saturate(10)).toHexString()
        },
        selection: {
          background: this.primaryColor.saturate(25).brighten(5).setAlpha((this.colorOptions.brightnessStart + 0.25) * this.colorOptions.opacityModifier).toHex8String(),
          highlightBackground: this.primaryColor.saturate(25).brighten(0).setAlpha((this.colorOptions.brightnessStart + 0.1) * this.colorOptions.opacityModifier).toHex8String(),
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
    }, this.colorOverrides)
  }

  customize(values = {}) {
    for (const [key, value] of Object.entries(values)) {
      if (typeof this[key] === 'object') {
        merge(this[key], value)
      } else {
        this[key] = value
      }
    }

    return this
  }

  static from(theme) {
    return new Theme(
      theme.name,
      theme.type,
      theme.primary,
      theme.base,
      theme.colorOptions,
      theme.themeOptions
    )
  }

  extends(theme) {
    merge(this, theme)

    return this
  }

  setName(name) {
    this.name = name

    return this
  }

  setType(type) {
    this.type = type

    return this
  }

  setColors(primary, base) {
    this.primary = primary
    this.base = base

    this.primaryColor = new TinyColor(primary)
    this.baseColor = new TinyColor(base)

    return this
  }
  modifyColorGeneration(options =  {}) {
    merge(this.colorOptions, options || {})

    return this
  }
  overrideColors(colors = {}) {
    merge(this.colorOverrides, colors || {})

    return this
  }
  setOptions(options = {}) {
    merge(this.themeOptions, options || {})

    return this
  }
}

module.exports = {
  Theme
}