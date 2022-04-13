import './App.css';
import Mapper from './Componets/Mapper'
import NavButton from './Componets/NavButton';
import Slider from './Componets/Slider';
import ScrollButton from './Componets/ScrollButton';
import AnimationPane from './Componets/AnimationPane';
import { useEffect, useState } from 'react';

function App(props) {
  const [ Zoom, setZoom] = useState(1);
  const [ posx, setPosx] = useState(0);
  const [ posy, setPosy] = useState(0);
  
  const shouldRender = false;

  function setRadarView(){
    setZoom(40)
    setPosy(-10)
    setPosx(-88)
  }
  function setSystemView(){
    setZoom(50)
    setPosy(30)
    setPosx(-168)
  }
  function setDisplayView(){
    setZoom(40)
    setPosy(-26)
    setPosx(10)
  }
  function setNavView(){
    setZoom(30)
    setPosy(-12)
    setPosx(-130)
  }
  function setWideView(){
    setZoom(1)
    setPosy(30)
    setPosx(6)
  }
  function hideNavBar() {
      if (document.getElementById('navBar').style.width != '0px'){
          document.getElementById('navBar').style.width = '0px'
          document.getElementById('nav-toggle-container').style.display = 'block'
      }
      else {
          document.getElementById('navBar').style.width = '200px'
          document.getElementById('nav-toggle-container').style.display = 'none'
      }
   }
  function hideHydrolic() {
      if (document.getElementById('interactivePane').style.display == 'none') {
          document.getElementById('interactivePane').style.display = 'block'
          document.getElementById('int-toggle-container').style.display = 'none'
      }
      else {
          document.getElementById('interactivePane').style.display = 'none'
          document.getElementById('int-toggle-container').style.display = 'block'
      }
  }

  useEffect(()=> {
    if(shouldRender){

    }
  })

  return (

    <div className="App grid-container">
        <div className="int-toggle-container" id="int-toggle-container">
            <NavButton onChange={() => hideHydrolic()} tag="Show Hydrolic" id="hideHydrolic" />
        </div>
        <div className="nav-toggle-container" id="nav-toggle-container">
            <NavButton onChange={() => hideNavBar()} tag="Show NavBar" id="toggleNavBar" />
        </div>
        <div className="NavBar" id="navBar">
            <NavButton onChange={()=>setRadarView()}tag="Radar Controls"/>
            <NavButton onChange={()=>setSystemView()}tag="System Information"/>
            <NavButton onChange={()=>setDisplayView()}tag="Flight Display"/>
            <NavButton onChange={()=>setNavView()}tag="Navigation Controls"/>
            <NavButton onChange={() => setWideView()} tag="Wide View" />
            <NavButton onChange={() => hideNavBar()} tag="Hide NavBar" id="toggleNavBar" />
            <Slider onSlider={(i)=>setZoom(i)}></Slider>
            <div className="button-grid-container">
              <ScrollButton onChange={()=>setPosx(posx + 2)} id='UP' />
              <ScrollButton onChange={()=>setPosx(posx - 2)} id='DOWN'/>
              <ScrollButton onChange={()=>setPosy(posy + 2)} id='LEFT'/>
              <ScrollButton onChange={()=>setPosy(posy - 2)} id='RIGHT'/>
            </div>
        </div>
        <div className = "ViewPort">
              <Mapper Zoom={Zoom} posx={posx} posy={posy} id="mapper" />
        </div>
        <div className='InteractivePane' id = 'interactivePane'>
          <NavButton onChange={() => hideHydrolic()} tag="Hide Hydrolic" id="hideHydrolic" />
          <AnimationPane />
        </div>
    </div>

  );
}

export default App;
