import {remote} from 'electron'

const webview = document.querySelector('webview') as Electron.WebViewElement

webview.addEventListener('dom-ready', () => {
  webview.openDevTools()
})

webview.addEventListener('did-stop-loading', () => {
  remote.getCurrentWindow().setTitle(`Slack: ${webview.getTitle()}`)
})