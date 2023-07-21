const { app, BrowserWindow, dialog } = require('electron')
const express = require('express')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1920,
    height: 1280,
    transparent: true
  })

  win.loadFile('index.html')
  win.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})