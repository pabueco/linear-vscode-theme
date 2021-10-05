const defaultColors = require('./colors')
const _ = require('lodash')

module.exports = (themeColors) => {

  /**
   * @type defaultColors
   */
  const colors = _.merge(defaultColors, themeColors)

  return {
    type: colors.type,
    colors: {
      "terminal.ansiGreen": colors.ui.terminal.ansiGreen,
      "terminal.ansiBrightGreen": colors.ui.terminal.ansiBrightGreen,
      "terminal.ansiMagenta": colors.ui.terminal.ansiMagenta,
      "terminal.ansiYellow": colors.ui.terminal.ansiYellow,
      "terminal.ansiCyan": colors.ui.terminal.ansiCyan,
      "terminal.ansiRed": colors.ui.terminal.ansiRed,
  
      "focusBorder": colors.ui.primary.default,
      "contrastBorder": colors.ui.base['3'],
      "errorForeground": colors.ui.error.default,
      "selection.background": colors.ui.primary.default,
  
      "button.background": colors.ui.primary.default,
      "button.hoverBackground": colors.ui.primary.shade,
  
      "progressBar.background": colors.ui.primary.shade,
  
      "input.background": colors.ui.base['4'],
      "input.border": colors.ui.base['3'],
      "inputOption.activeBackground": colors.ui.primary.default,
      "inputValidation.errorBorder": colors.ui.error.default,
  
      "editor.background": colors.ui.base['0'],
      "editor.foreground": colors.ui.base['9'],
  
      "peekViewEditor.background": colors.ui.base['1'],
  
      "dropdown.background": colors.ui.base['1'],
      "dropdown.border": colors.ui.base['3'],
      
      "sideBar.background": colors.ui.base['0'],
      "activityBarBadge.background": colors.ui.primary.default,
      "titleBar.activeBackground": colors.ui.base['1'],
      "titleBar.inactiveBackground": colors.ui.base['1'],
  
      "editor.selectionBackground": colors.ui.selection.background,
      "editor.selectionHighlightBackground": colors.ui.selection.highlightBackground,
  
      "editor.wordHighlightBackground": "#ffffff00",
      "editor.wordHighlightBorder": colors.ui.selection.highlightBorder,
      "editor.hoverHighlightBackground": colors.ui.base['4'],
  
      "editor.lineHighlightBackground": colors.ui.base['1'],
      "editor.lineHighlightBorder": colors.ui.base['1'],
  
      "editorWhitespace.foreground": colors.ui.base['4'],
      "editorRuler.foreground": colors.ui.base['4'],
      "editorIndentGuide.background": colors.ui.base['4'],
      "editorIndentGuide.activeBackground": colors.ui.base['6'],
  
      "editorCursor.foreground": colors.ui.cursor.default,
      "terminalCursor.foreground": colors.ui.cursor.default,
  
      "editorLineNumber.foreground": colors.ui.base['5'],
  
      "editorWidget.background": colors.ui.base['1'],
      "editorSuggestWidget.highlightForeground": colors.ui.primary.light,
      "editorSuggestWidget.selectedBackground": colors.ui.base['2'],
  
      // "tab.activeBorder": colors.ui.primary.default,
      "tab.activeBorderTop": colors.ui.primary.default,
      "tab.activeBackground": colors.ui.base['2'],
      "tab.inactiveBackground": colors.ui.base['0'],
  
      "editorGroupHeader.tabsBackground": colors.ui.base['0'],
      "editorGroupHeader.border": colors.ui.base['1'],
      
      "editorGroupHeader.tabsBorder": colors.ui.base['3'],
  
      "activityBar.background": colors.ui.base['0'],
      "activityBar.activeBorder": colors.ui.primary.default,
  
      "list.activeSelectionBackground": colors.ui.base['2'],
      "list.activeSelectionForeground": colors.ui.primary.lighter,
      "list.inactiveSelectionForeground": colors.ui.primary.lighter,
      "list.hoverBackground": colors.ui.base['2'],
  
      "gitDecoration.modifiedResourceForeground": colors.ui.terminal.ansiCyan,
      "gitDecoration.deletedResourceForeground": colors.ui.error.default,
      "gitDecoration.untrackedResourceForeground": colors.ui.terminal.ansiGreen,
      "gitDecoration.ignoredResourceForeground": colors.ui.base['6'],
      "gitDecoration.conflictingResourceForeground": colors.ui.conflict.default,
  
      "panel.border": colors.ui.base['3'],
      "panelTitle.activeBorder": colors.ui.primary.default,
  
      "badge.background": colors.ui.primary.default,
  
      "statusBar.background": colors.ui.base['1'],
    },
    tokenColors: [
      {
        "name": "Comment",
        "scope": [
          "comment",
          "punctuation.definition.comment"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": colors.tokens.comment
        }
      },
      {
        "name": "Variables",
        "scope": [
          "variable",
          "variable.other",
          "variable.parameter",
          "string constant.other.placeholder",
          "source.vue meta.object.member.ts meta.object.member.ts",
        ],
        "settings": {
          "foreground": colors.tokens.variable
        }
      },
      {
        "name": "Parameters",
        "scope": [
          "variable.parameter",
        ],
        "settings": {
          "foreground": colors.tokens.variable
        }
      },
      {
        "name": "Properties",
        "scope": [
          "constant.other.class",
          "variable.other.property",
          "variable.other.object.property"
        ],
        "settings": {
          "foreground": colors.tokens.property
          // "foreground": "#f7c1ca",
        }
      },
      {
        "name": "Invalid",
        "scope": [
          "invalid",
          "invalid.illegal"
        ],
        "settings": {
          "foreground": colors.tokens.invalidDeleted
        }
      },
      {
        "name": "Keyword, Storage",
        "scope": [
          "keyword",
          "storage.type",
          "storage.modifier"
        ],
        "settings": {
          "foreground": colors.tokens.keywordStorage
        }
      },
      {
        "name": "Keyword, Operator",
        "scope": [
          "keyword.operator",
          "keyword.definition",
        ],
        "settings": {
          "foreground": colors.tokens.keywordDefinition
        }
      },
      {
        "name": "Comparison",
        "scope": [
          "keyword.operator.comparison",
          "keyword.operator.logical",
        ],
        "settings": {
          "foreground": colors.tokens.keywordOperatorLogicalComparison
        }
      },
      {
        "name": "Keyword, Storage",
        "scope": [
          "keyword.operator.logical.soil",
        ],
        "settings": {
          "foreground": "unset"
        }
      },
      {
        "name": "Operator, Misc",
        "scope": [
          "constant.other.color",
          "punctuation",
          // "punctuation.definition.tag",
          // "punctuation.separator.inheritance.php",
          // "punctuation.section.embedded",
          "keyword.other.template",
          "keyword.other.substitution",
          "meta.brace",
          "punctuation.support.type.property-name",
          "expression.embbeded punctuation.definition.tag.begin.html",
          "expression.embbeded punctuation.definition.tag.end.html",
        ],
        "settings": {
          "fontStyle": "",
          "foreground": colors.tokens.punctuation
        }
      },
      {
        "name": "Operator, Misc",
        "scope": [
          "punctuation.definition.binding-pattern.object.js",
        ],
        "settings": {
          "foreground": "#28bfda"
        }
      },
      {
        "name": "Tag Wrappers",
        "scope": [
          "punctuation.definition.tag.html",
          "punctuation.definition.tag.begin.html",
          "punctuation.definition.tag.end.html",
          // "meta.tag",
        ],
        "settings": {
          "foreground": colors.tokens.htmlTagBrackets
        }
      },
      {
        "name": "HTML Text",
        "scope": [
          "text.html",
          "meta.jsx.children.js"
        ],
        "settings": {
          "foreground": colors.tokens.htmlText
        }
      },
      {
        "name": "Operator, Misc",
        "scope": [
          "keyword.control",
          "entity.name.type.namespace",
          "keyword.other"
        ],
        "settings": {
          "foreground": colors.tokens.keywordControlOther
        }
      },
      {
        "name": "Operator, Misc",
        "scope": [
          "keyword.control.flow",
          "keyword.control.export",
          "keyword.control.return",
          "meta.function.closure",
          "keyword.control.import",
          "keyword.control.from",
          "keyword.control.as",
          "keyword.other.namespace",
        ],
        "settings": {
          "fontStyle": "italic",
        }
      },
      {
        "name": "Tag",
        "scope": [
          "entity.name.tag",
          "meta.tag.sgml",
          "markup.deleted.git_gutter"
        ],
        "settings": {
          "foreground": colors.tokens.tag
        }
      },
      {
        "name": "Function and Method Call",
        "scope": [
          // "entity.name.function",
          "meta.method.declaration meta.function-call entity.name.function",
          "meta.method-call entity.name.function",
          "variable.function",
          "support.function",
          "keyword.other.special-method"
        ],
        "settings": {
          "foreground": colors.tokens.functionMethodCall,
        }
      },
      {
        "name": "Function and Method Definition",
        "scope": [
          "meta.function entity.name.function",
          "meta.method entity.name.method",
          "meta.method.declaration entity.name.function",
          "meta.definition.method entity.name.function"
        ],
        "settings": {
          "foreground": colors.tokens.functionMethodDefinition
        }
      },
      {
        "name": "Other Variable, String Link",
        "scope": [
          "support.other.variable",
          "string.other.link"
        ],
        "settings": {
          "foreground": colors.tokens.entityClassType
        }
      },
      {
        "name": "Number, Constant, Tag Attribute, Embedded",
        "scope": [
          "constant.numeric",
          "constant.language",
          "support.constant",
          "constant.character",
          "constant.escape",
          "support.constant.property-value"
        ],
        "settings": {
          "foreground": colors.tokens.constNumber
        }
      },
      {
        "name": "String, Symbols, Markup Heading",
        "scope": [
          "string",
          "constant.other.symbol",
          "constant.other.key",
          "markup.heading",
          "markup.inserted.git_gutter",
          "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js"
        ],
        "settings": {
          // "foreground": "#61bb91"
          // "foreground": "#4CB782"
          // "foreground": "#FFCB8B",
          // "foreground": "#ffd18b",
  
          // "foreground": "#a0d581"
          // "foreground": "#8dd387"
  
          "foreground": colors.tokens.string
        }
      },
      {
        "name": "String Quotes",
        "scope": [
          "string punctuation.definition.string",
        ],
        "settings": {
          // "foreground": "#61bb9194"
          // "foreground": "#4CB782"
          // "foreground": "#ffcb8b9d"
          "foreground": colors.tokens.stringPunctuation
        }
      },
      {
        "name": "Class, Support",
        "scope": [
          "entity.name",
          "entity.name.type.class",
          "support.type",
          "support.class",
          "markup.changed.git_gutter",
          "support.type.sys-types",
          "support.constant",
          "entity.name.type.namespace",
          // Custom tags (like vue components)
          "meta.tag.custom entity.name.tag.html",
          "source.vue invalid.illegal.unrecognized-tag.html"
        ],
        "settings": {
          "fontStyle": "",
          // "foreground": "#80ecff"
          // "foreground": "#85DACC"
          // "foreground": "#86dfd0"
          "foreground": colors.tokens.entityClassType
        }
      },
      {
        "name": "Entity Types",
        "scope": [
          "support.type",
          "meta.return.type",
          "entity.name.type",
          "meta.use.php",
          // "meta.type.tuple meta.brace",
        ],
        "settings": {
          "fontStyle": "italic",
          // "foreground": "#9ef0ff"
          "foreground": colors.tokens.entityClassType
        }
      },
      {
        "name": "Entity Types",
        "scope": [
          "meta.type.tuple meta.brace",
        ],
        "settings": {
          "fontStyle": "italic",
        }
      },
      {
        "name": "Namespaces and Classes",
        "scope": [
          "entity.other.inherited-class",
          "support.orther.namespace.use",
          "support.other.namespace",
        ],
        "settings": {
          "fontStyle": "",
          "foreground": colors.tokens.namespaceInherit
        }
      },
      {
        "name": "Language methods",
        "scope": [
          "variable.language"
        ],
        "settings": {
          // "fontStyle": "italic",
          "foreground": colors.tokens.this
        }
      },
      {
        "name": "Attributes, HTML Attributes",
        "scope": [
          "entity.other.attribute-name",
          "text.html.basic entity.other.attribute-name.html",
          "text.html.basic entity.other.attribute-name"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": colors.tokens.attribute
        }
      },
      {
        "name": "CSS Classes, IDs",
        "scope": [
          "entity.other.attribute-name.class",
          "entity.other.attribute-name.id",
          "entity.name.tag.css",
        ],
        "settings": {
          "fontStyle": "",
          "foreground": colors.tokens.attribute
        }
      },
      {
        "name": "Inserted",
        "scope": [
          "markup.inserted"
        ],
        "settings": {
          "foreground": colors.ui.git.inserted.default
        }
      },
      {
        "name": "Deleted",
        "scope": [
          "markup.deleted"
        ],
        "settings": {
          "foreground": colors.ui.git.deleted.default
        }
      },
      {
        "name": "Changed",
        "scope": [
          "markup.changed"
        ],
        "settings": {
          "foreground": colors.ui.git.modified.default
        }
      },
      {
        "name": "URL",
        "scope": [
          "*url*",
          "*link*",
          "*uri*"
        ],
        "settings": {
          "fontStyle": "underline"
        }
      },
  
      // Sass
      {
        "name": "@include",
        "scope": [
          "keyword.control.at-rule"
        ],
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "name": "&",
        "scope": [
          "entity.name.tag.reference"
        ],
        "settings": {
          "foreground": colors.tokens.sassAmpersand
        }
      },
  
      {
        "name": "Property names",
        "scope": [
          "support.type.property-name.json",
          "meta.objectliteral",
          "source.vue meta.object.member.ts meta.object.member.ts meta.object.member.ts",
          "source.css support.type.property-name",
          "source.sass support.type.property-name",
          "source.scss support.type.property-name",
          "source.less support.type.property-name",
          "source.stylus support.type.property-name",
          "source.postcss support.type.property-name",
          "entity.name.tag.yaml"
        ],
        "settings": {
          "fontStyle": "",
          "foreground": colors.tokens.propertyKey
        }
      },
  
      {
        "name": "Attribute value unit",
        "scope": [
          "keyword.other.unit",
        ],
        "settings": {
          "foreground": colors.tokens.unit
          // "foreground": "#65bda0"
        }
      },
  
      // dotenv
      {
        "name": "Attribute value unit",
        "scope": [
          "source.env",
        ],
        "settings": {
          "foreground": colors.tokens.string
        }
      },
  
      // Markdown
      {
        "name": "Attribute value unit",
        "scope": [
          "text.html.markdown",
          "string.other.link.title.markdown",
        ],
        "settings": {
          "foreground": colors.tokens.variable
        }
      },
      {
        "name": "Markdown Link",
        "scope": [
          "markup.underline.link.markdown",
        ],
        "settings": {
          "foreground": colors.tokens.entityClassType
        }
      },
      {
        "name": "Markdown Link",
        "scope": [
          "markup.fenced_code.block.markdown",
        ],
        "settings": {
          "foreground": colors.tokens.string
        }
      },
    ]
  }
}