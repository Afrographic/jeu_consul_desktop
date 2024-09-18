const { ipcMain, app, BrowserWindow } = require('electron');
const { dialog } = require('electron/main');
const path = require("path");
var AutoLaunch = require('auto-launch');

const electron = require('electron');
const fs = require("fs");

const os = require("./app/current_os.js");

const { exec } = require('child_process');

let win;




function createWindow() {
    // Create folder and files for db and language if they don't exist


    // Auto Launch configuration
    var autoLauncher = new AutoLaunch({
        name: "Jeu Consult"
    });

    autoLauncher.isEnabled().then(function (isEnabled) {
        if (isEnabled) return;
        autoLauncher.enable();
    }).catch(function (err) {
        throw err;
    });


    win = new BrowserWindow({
        width: 1600,
        height: 890,
        resizable: false,
        webPreferences: {
            devTools: true,
            preload: path.join(__dirname, 'mainElectronAPI.js')
        },
        show: false,
        icon: path.join(__dirname, 'icon.ico'),
        alwaysOnTop:false,
    })

    win.setMenu(null);
    win.loadFile(path.join(__dirname, 'ui/index.html'));
    // win.webContents.openDevTools();

    win.on('close', () => {
        win = null;
    })

    win.once("ready-to-show", () => {
        win.show();
    })


    
}



app.on('ready', createWindow);
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', function () {
    if (win == null) {
        createWindow();
    }
})

