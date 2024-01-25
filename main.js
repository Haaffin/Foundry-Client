const { app, BrowserWindow} = require('electron')
const path = require('node:path')

const createWindow = () => {
    const win = new BrowserWindow({show:false})
    win.maximize()
    win.loadFile('index.html')
    win.removeMenu()
    win.show()
    icon: __dirname + '/public/icons/icon.ico'
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })