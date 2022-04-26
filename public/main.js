//This file runs the app as both a standalone and as a locally hosted web application on http://localhost:3000.

const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const { setupTitlebar, attachTitlebarToWindow } = require('custom-electron-titlebar/main');
setupTitlebar();

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1520,
    height: 1020,
    show:false,
    frame:false,
    webPreferences: {
       nodeIntegration: true,
       preload: path.join(__dirname, 'preload.js'),
    }
  })

  win.once('ready-to-show',() =>{
    win.show()
  })

  //load the index.html from a url
  win.loadURL('http://localhost:3000');

  // Open the DevTools.
  win.webContents.openDevTools()

  const menu = null;
  attachTitlebarToWindow(win);

  //win.removeMenu();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
  app.whenReady().then(createWindow);


// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

//!!!Need To Fix Before Prod!!!
app.on('before-quit' , (e) => {
  find('port', 3000).then(function (list) {
    console.log(list);
    if(!list.length){
        process.kill(list[0].pid, 'SIGINT');
    }
  }.catch((e) => {
      console.log(e.stack || e);
  }));
});

app.commandLine.appendSwitch('auto-detect','false');
