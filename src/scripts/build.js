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

const template = require('../template')

for (const theme of themes) {

  const themeConfig = require(theme.path)

  const generatedTheme = template.render(themeConfig)

  generatedTheme.name = `Linear Theme - ${themeConfig.name}`

  fs.writeFileSync(
    path.resolve(dirs.dist, `${themeName}-${theme.name}.json`), 
    JSON.stringify(generatedTheme, null, 2),
    'utf-8'
  );
}