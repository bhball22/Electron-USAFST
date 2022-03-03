import './App.css';
import Mapper from './Componets/Mapper'
import ViewButton from './Componets/ViewButton';
import NavButton from './Componets/NavButton';
import Slider from './Componets/Slider';
import { useEffect,useState } from 'react';

function App(props) {
  const [ Zoom, setZoom] = useState(1);
  

  useEffect(()=> {
    //console.log(Zoom);
  })

  return (
    <div className="App">
        <div className="NavBar">
            <NavButton tag="Radar Controlls"/>
            <NavButton tag="System Information"/>
            <NavButton tag="Flight Display"/>
            <NavButton tag="Navigation Controlls"/>
            <NavButton tag="Wide View"/>
            <Slider onSlider={(i)=>setZoom(i)}></Slider>
            <ViewButton tag="Small"/>
            <ViewButton tag="Medium"/>
            <ViewButton tag="Large"/>
            <ViewButton tag="External"/>
        </div>
        <div className = "ViewPort">
          <Mapper Zoom = {Zoom} id="mapper"/>
        </div>
    </div>
  );
}

export default App;
