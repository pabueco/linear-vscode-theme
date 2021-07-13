let map = require('./mapping')

module.exports = (themeMap) => {

  map = Object.assign(map, themeMap)

  return {
    "terminal.ansiGreen": map.terminal.ansiGreen
  }
}