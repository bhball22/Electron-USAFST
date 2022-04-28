// This file controls the side panes, contains the buttons and the functions they are linked to, and edits the css properties of the panes.

import './App.css';
import Mapper from './Componets/Mapper'
import NavButton from './Componets/NavButton';
import AnimationPane from './Componets/AnimationPane';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { ClosedDrawer, OpenedDrawer } from './Componets/DrawerButton';


function App(props) {

  //const [ mainViewInteraction, setMainViewInteraction ] = useState(null);
  
  //const shouldRender = false;

  function hideHydrolic() {
      if (document.getElementById('interactivePane').style.display === 'none') {
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

  //This is for passind area info from mapper to sim
  //function onButtonClicked(area){
  //  setMainViewInteraction(area.name);
  //}

 // useEffect(()=> {
 //   if(shouldRender){
  //    setMainViewInteraction(null);
  //  }
 // })

  return (

    <TransformWrapper
    initialScale ={.5}
    initialPositionX={200}
    initialPositionY={0}
    minScale = {.5}
    limitToBounds = {false}
    centerOnInit = {true}

    >
      {({ resetTransform, ...rest }) => (
        <div className="App grid-container">
            <div className="int-toggle-container" id="int-toggle-container">
                <ClosedDrawer onChange={() => hideHydrolic()} id="InteractiveClosed" />
            </div>
            <div className = "ViewPort">
            <div className="tools">
              <NavButton tag= "Reset View" transform = {() => resetTransform()}></NavButton>
            </div>
              <TransformComponent>
                  <Mapper id="mapper" />
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
