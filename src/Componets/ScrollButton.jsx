import React from 'react'
import "./Styles/ArrowKey.css"
import arrow from "../Assets/icons/scroll-view-arrow.png"
const ScrollButton = (props) =>  {

    function Change(event) {
    props.onChange()
    };

    return(
        <div onClick={(i)=>Change(i)} className='ArrowKey' id={props.id}> {/*#FIXME: The Arrow Placements */}
        <img src={arrow}/>
    </div>
    )
}

export default ScrollButton;