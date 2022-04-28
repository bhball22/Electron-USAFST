import { React , useEffect, useState } from 'react'
import "./Styles/AnimationPane.css"
import HydrolicSystem from './HydrolicSystem'
import InteractiveDiagramHydrolic from "../Assets/result.jsx"
import { Switch } from '@mui/material'
import NoninteractiveDiagramHydrolic from  "../Assets/hydrolics.png"

const AnimationPane = (props) => {
    const [displayType, setDisplayType] = useState(true);

    const shouldRender = true;

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
    useEffect(()=>{
        if(shouldRender){
            //console.log(props.buttonPressed);
            //This is redacted for this build but this gets info on buttons if passed in
        }
    })
        return(
            <>
                <div className="AnimationContainer grid-element grid-container">
                    <Switch label ="Interactive Display"
                    checked = {displayType}
                    onChange={handelChange}
                    />

                    <img id = "HydrolicPng" src={NoninteractiveDiagramHydrolic} alt="Static PNG" height="80%" style={{display:'none'}}/>
                    <InteractiveDiagramHydrolic/>
                </div>
                <div className="InfoProcessing grid-element">
                    <HydrolicSystem  buttonPressed = {props.buttonPressed}/>
                </div>
            </>
        )
    }

export default AnimationPane;