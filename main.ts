import {BrowserWindow, app} from 'electron'

let appWindow: Electron.BrowserWindow

app.on('ready', () => {
  appWindow = new BrowserWindow({ width: 1200, height: 1200 })
  appWindow.loadURL(`file://${__dirname}/index.html`)
})
