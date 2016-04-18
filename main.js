'use strict'

const electron = require('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow = null

app.on('window-all-closed', () => {
  app.quit()
})

app.on('ready', () => {
  const win = {
    width: 800,
    height: 600,
    // frame: true,
    // resizeable: false
  }

  mainWindow = new BrowserWindow(win)

  // mainWindow.loadURL('http://douban.fm')

  mainWindow.loadURL(`file://${__dirname}/index.html`)

  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', () => {
    mainWindow = null
  })
})
