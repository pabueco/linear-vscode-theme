const { Theme } = require('../theme')

const theme = new Theme()
  .setName('Dawn')
  .setColors('#a84376', '#2A222E')
  .overrideColors({
    components: {
      editor: '#2A222E',
      panel: '#382A3C',
      border: '#4c3951',
    }
  })

module.exports = theme