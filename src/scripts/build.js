const fs = require('fs');
const path = require('path');

const themeName = 'linear-theme'

const dirs = {
  themes: path.resolve(__dirname, '../themes'),
  dist: path.resolve(__dirname, '../../dist'),
}

let themes = []

fs.readdirSync(dirs.themes).forEach(file => {
  themes.push({
    name: path.basename(file, path.extname(file)),
    path: path.resolve(dirs.themes, file)
  })
});

for (const theme of themes) {

  const themeColors = require(theme.path)

  const generatedTheme = require('../template')(themeColors)

  generatedTheme.name = 'Linear Theme'

  fs.writeFileSync(path.resolve(dirs.dist, `${themeName}-${theme.name}.json`), JSON.stringify(generatedTheme, null, 2) , 'utf-8');
}