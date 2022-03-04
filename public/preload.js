const { Titlebar, Color } = require('custom-electron-titlebar');
const path = require('path');

let titlebar;
//code for menu
window.addEventListener('DOMContentLoaded', () => {
  titlebar = new Titlebar({
    backgroundColor: Color.fromHex("#1c2224"),
    menu: null
  })})