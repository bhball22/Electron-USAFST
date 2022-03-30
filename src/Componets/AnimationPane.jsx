import { React , useState } from 'react'
import "./Styles/AnimationPane.css"
import HydrolicSystem from './HydrolicSystem'
import InteractiveDiagramHydrolic from "../Assets/result.jsx"
import { Switch } from '@mui/material'
import NoninteractiveDiagramHydrolic from  "../Assets/hydrolics.png"

const AnimationPane = (props) => {
    const [displayType, setDisplayType] = useState(false);

    const handelChange = () => {
        setDisplayType(!displayType);
        if(displayType){
            document.getElementById("HydrolicSystem").style.display ="none";
            document.getElementById("HydrolicPng").style.display = "block";
        }else{
            document.getElementById("HydrolicSystem").style.display ="block";
            document.getElementById("HydrolicPng").style.display = "none";
        }
        

    }
    
        return(
            <>
                <div className="AnimationContainer grid-element">
                    <Switch label ="Interactive Display"
                    checked = {displayType}
                    onChange={handelChange}
                    />
                    <img id = "HydrolicPng" src={NoninteractiveDiagramHydrolic} alt="Static PNG" height="80%"/>

                    <InteractiveDiagramHydrolic/>
                </div>
                <div className="InfoProcessing grid-element">
                    <HydrolicSystem />
                </div>
            </>
        )
    }

export default AnimationPane;