import './App.css';
import Mapper from './Componets/Mapper'
import ViewButton from './Componets/ViewButton';
import NavButton from './Componets/NavButton';
import Slider from './Componets/Slider';
import ScrollButton from './Componets/ScrollButton';
import { useEffect,useState } from 'react';

function App(props) {
  const [ Zoom, setZoom] = useState(1);
  const [ posx, setPosx] = useState(6);
  const [ posy, setPosy] = useState(30);
  
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

  useEffect(()=> {
    if(shouldRender){

    }
  })

  return (
    <div className="App">
        <div className="NavBar">
            <NavButton onChange={()=>setRadarView()}tag="Radar Controlls"/>
            <NavButton onChange={()=>setSystemView()}tag="System Information"/>
            <NavButton onChange={()=>setDisplayView()}tag="Flight Display"/>
            <NavButton onChange={()=>setNavView()}tag="Navigation Controlls"/>
            <NavButton onChange={()=>setWideView()}tag="Wide View"/>
            <Slider onSlider={(i)=>setZoom(i)}></Slider>
            <ViewButton tag="Small"/>
            <ViewButton tag="Medium"/>
            <ViewButton tag="Large"/>
            <ViewButton tag="External"/>
            <ScrollButton onChange={()=>setPosx(posx - 2)} tag="up"/>       {/* #FIXME: Issue #17 */}
            <ScrollButton onChange={()=>setPosx(posx + 2)} tag="Down"/>
            <ScrollButton onChange={()=>setPosy(posy - 2)} tag="Left"/>
            <ScrollButton onChange={()=>setPosy(posy + 2)} tag="Right"/>
        </div>
        <div className = "ViewPort">
          <ScrollButton onChange={()=>setPosx(posx + 2)} tag="Move Up" direction="90deg"/> 
          <Mapper Zoom = {Zoom} posx = {posx} posy = {posy} id="mapper"/>
        </div>
        
    </div>
  );
}

export default App;
