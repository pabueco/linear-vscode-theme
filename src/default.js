const colorRed = "#eb5757"

module.exports = {
  type: "dark",
  ui: {
    text: {
      default: undefined
    },
    primary: {
      default: "#5E6AD2",
      shade: "#717CE1",
      light: "#8f9aff",
      lighter: "#a2abff",
    },
    base: {
      "0": "#1F2023",
      "100": "#27282B",
      "150": "#2a2b30",
      "200": "#2D2F36",
      "300": "#303236",
      "400": "#3b3c42",
      "500": "#53575c",
      "600": "#6b6f75",
      "900": "#d5e4e7"
    },
    selection: {
      background: "#7847ff98",
      highlightBackground: "#7847ff4b",
      highlightBorder: "#9772ff",
    },
    error: {
      default: colorRed
    },
    conflict: {
      default: "#F2994A",
    },
    cursor: {
      default: "#2de0ff"
    },
    terminal: {
      ansiGreen: "#4CB782",
      ansiBrightGreen: "#97D484",
      ansiMagenta: "#cba0ff",
      ansiYellow: "#ffcc6d",
      ansiCyan: "#26B5CE",
      ansiRed: colorRed,
    },
    git: {
      inserted: {
        default: "#97D484",
      },
      modified: {
        default: "#26B5CE",
      },
      deleted: {
        default: colorRed,
      },
    }
  },
  tokens: {
    comment: "#8a8f98",
    variable: "#dde8eb",
    invalidDeleted: colorRed,
    keywordStorage: "#7e89ec",
    keywordDefinition: "#8e82f8",
    keywordOperatorLogicalComparison: "#a89fff",
    keywordControlOther: "#beb7ff",
    property: "#f3b7e9",
    propertyKey: "#b1c5ca",
    punctuation: "#5da6b8",
    htmlTagBrackets: "#74829e",
    htmlText: "#bdc4cc",
    functionMethodCall: "#1abdda",
    functionMethodDefinition: "#61e6fd",
    constNumber: "#ffbf71",
    string: "#97D484",
    stringPunctuation: "#95d581bd",
    entityClassType: "#88e6d6",
    namespaceInherit: "#9ebecc",
    attribute: "#cba0ff",
    unit: "#d3782e",
    sassAmpersand: "#5fdfff",
    this: "#a8f2ff",
    tag: "#83acf8"
  },
  components: {
    editor: undefined,
    panel: undefined,
    border: undefined,
    lineHighlight: undefined,
    lineNumber: undefined,
  }
}