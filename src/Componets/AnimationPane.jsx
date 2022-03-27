import React from 'react'
import "./Styles/AnimationPane.css"
import HydrolicSystem from './HydrolicSystem'
import InteractiveDiagramHydrolic from "../Assets/result.jsx"

const AnimationPane = (props) => {

    function Change(event) {
        props.onChange();
        };
    
        return(
            <>
                <div className="AnimationContainer grid-element">
                    <InteractiveDiagramHydrolic />
                </div>
                <div className="InfoProcessing grid-element">
                    <HydrolicSystem />
                </div>
            </>
        )
    }

export default AnimationPane;