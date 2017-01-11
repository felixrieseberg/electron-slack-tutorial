const {BrowserWindow, app} = require('electron')

app.on('ready', () => {
  new BrowserWindow()
})