import React from 'react'
import "./Styles/ArrowKey.css"
import arrow from "../Assets/icons/scroll-view-arrow.png"
const ScrollButton = (props) =>  {

    function Change(event) {
    props.onChange()
    };

    return(
        <div onClick={(i)=>Change(i)} className='ArrowKey' id={props.id}> 
        <img src={arrow} style={{height:'40px',width:'40px',opacity:'0.75'}}/>
    </div>
    )
}

export default ScrollButton;