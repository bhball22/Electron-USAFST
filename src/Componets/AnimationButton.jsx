import React from 'react'
import "./Styles/Button.css"

const AnimationButton = (props) => {

    return(
        <div onClick={()=>{console.log("Ya Clicked a btn")}} className='Button'>
            <p style={{ userSelect: 'none'}}>{props.tag}</p>
        </div>
    )
}

export default AnimationButton;