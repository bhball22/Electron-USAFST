import './App.css';
import Mapper from './Componets/Mapper'
import NavButton from './Componets/NavButton';
import Slider from './Componets/Slider';
import ScrollButton from './Componets/ScrollButton';
import AnimationPane from './Componets/AnimationPane';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { ClosedDrawer, OpenedDrawer } from './Componets/DrawerButton';
import { useEffect, useState } from 'react';


function App(props) {
  const [ Zoom, setZoom] = useState(1);
  const [ posx, setPosx] = useState(0);
  const [ posy, setPosy] = useState(0);

  const [ mainViewInteraction, setMainViewInteraction ] = useState(null);
  
  const shouldRender = false;

  function setWideView(){
    setZoom(1)
    setPosy(0)
    setPosx(0)
  }
  function hideNavBar() {
      if (document.getElementById('navBar').style.width != '0px'){
          document.getElementById('navBar').style.width = '0px'
          document.getElementById('nav-toggle-container').style.display = 'block'
          document.getElementById('NavBarOpened').style.display = 'none'
          document.getElementById('buttonGridViewPort').style.display = 'grid'
      }
      else {
          document.getElementById('navBar').style.width = '200px'
          document.getElementById('nav-toggle-container').style.display = 'none'
          document.getElementById('NavBarOpened').style.display = 'block'
          document.getElementById('buttonGridViewPort').style.display = 'none'
      }
   }
  function hideHydrolic() {
      if (document.getElementById('interactivePane').style.display == 'none') {
          document.getElementById('interactivePane').style.display = 'block'
          document.getElementById('int-toggle-container').style.display = 'none'
          document.getElementById('InteractiveOpened').style.display = 'block'
      }
      else {
          document.getElementById('interactivePane').style.display = 'none'
          document.getElementById('int-toggle-container').style.display = 'block'
          document.getElementById('InteractiveOpened').style.display = 'none'
      }
  }
  function onButtonClicked(area){
    setMainViewInteraction(area.name);
    //console.log(area.name);
  }

  useEffect(()=> {
    if(shouldRender){
      setMainViewInteraction(null);
    }
  })

  return (

    <TransformWrapper
    initialScale ={1}
    initialPositionX={posx}
    initialPositionY={posy}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (

        <div className="App grid-container">
            <div className="int-toggle-container" id="int-toggle-container">
                <ClosedDrawer onChange={() => hideHydrolic()} id="InteractiveClosed" />
            </div>
            <div className="nav-toggle-container" id="nav-toggle-container">
                <ClosedDrawer onChange={() => hideNavBar()} id="NavBarClosed" />
            </div>
            <div className="NavBar" id="navBar">
                <NavButton onChange={() => setWideView()} tag="Wide View" />
                <Slider onSlider={(i)=>setZoom(i)}></Slider>
                <div className="button-grid-container">
                  <ScrollButton onChange={()=>setPosx(posx + 2)} id='UP' />
                  <ScrollButton onChange={()=>setPosx(posx - 2)} id='DOWN'/>
                  <ScrollButton onChange={()=>setPosy(posy + 2)} id='LEFT'/>
                  <ScrollButton onChange={()=>setPosy(posy - 2)} id='RIGHT'/>
                </div>
                <OpenedDrawer onChange={() => hideNavBar()} id="NavBarOpened" />
            </div>
            <div className = "ViewPort">
              <TransformComponent>
                  <Mapper Zoom={Zoom} posx={posx} posy={posy} id="mapper" />
                  <div className="button-grid-container" id="buttonGridViewPort">
                    <ScrollButton onChange={()=>setPosx(posx + 2)} id='UP' />
                    <ScrollButton onChange={()=>setPosx(posx - 2)} id='DOWN'/>
                    <ScrollButton onChange={()=>setPosy(posy + 2)} id='LEFT'/>
                    <ScrollButton onChange={()=>setPosy(posy - 2)} id='RIGHT'/>
                </div>
              </TransformComponent>
            </div>
            <div className='InteractivePane' id = 'interactivePane'>
              <AnimationPane />
              <OpenedDrawer onChange={() => hideHydrolic()} id="InteractiveOpened" />
            </div>
        </div>
      )}
    </TransformWrapper>
  );
}

export default App;
