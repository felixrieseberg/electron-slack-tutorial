const {BrowserWindow, app} = require('electron')

let appWindow

app.on('ready', () => {
  appWindow = new BrowserWindow({ width: 1200, height: 1200 })
  appWindow.loadURL(`file://${__dirname}/index.html`)
})