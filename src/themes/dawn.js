const { makeTheme } = require('../utils')

const theme = makeTheme('#a84376', '#2A222E', {}, {
  components: {
    editor: '#2A222E',
    panel: '#382A3C',
    border: '#4c3951',
  }
})

module.exports = {
  name: 'Dawn',
  type: 'dark',
  ...theme
}