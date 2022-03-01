const viewFour = document.getElementById('view4');
const viewThree = document.getElementById('view3');
const ViewTwo = document.getElementById('view2');
const ViewOne = document.getElementById('view1');
const ViewDefault = document.getElementById('view0');

var zoomSlider = document.getElementById('zoomSlider');

const smallContext = document.getElementById('small');
const mediumContext = document.getElementById('medium');
const largeContext = document.getElementById('large');
const externalContext = document.getElementById('external');

const cockpitElement = document.getElementById('cockpitPhoto');


async function onZoomChange(val){
    cockpitElement.style.width = `${val}%`
}

async function radarView(){
    cockpitElement.style.width = `40%`
}

async function systemView(){
    cockpitElement.style.width = `40%`
}

async function flightView(){
    cockpitElement.style.width = `40%`
}

async function navigationView(){
    cockpitElement.style.width = `40%`
}

async function wideView(){
    cockpitElement.style.width = `40%`
}



