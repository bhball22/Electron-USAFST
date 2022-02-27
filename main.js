const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");


function createWindow (){
    const win = new BrowserWindow({
        show: false,
        webPreferences:{
            sandbox:true
        }
    });
    win.loadFile('src/index.html'); 

    win.removeMenu();
    
    /*Dev Tools*/
    win.webContents.openDevTools();

    win.once('ready-to-show', () => {
        win.show()
    })

}

app.on('win-all-closed', () => {
    app.quit();
})

app.on('ready', createWindow);

$(function()
{
    var $newItemButton = $('#newItem');
    var $newItemForm = $('#newItemForm');
    var $textInput = $('input:text');

    $newItemButton.show();
    $newItemForm.hide();
    $('#showForm').on('click', function() 
    {
        $newItemButton.hide();
        $newItemForm.show();



    });

    $newItemForm.on('submit', fucntion(e))
    e.preventDefault();
    var newText = $textInput.val();
    $('li:last').after('<li>'  + nextText + '</li>');
    $newItemForm.hide();
    $newItemButton.show();
    $textImpiut.val('');

});


