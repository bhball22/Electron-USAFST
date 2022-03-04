import React from 'react'
import "./Styles/Button.css"
const ScrollButton = (props) =>  {

    function Change(event) {
    props.onChange();
    console.log(props.tag)
    };

    return(
        <div onClick={(i)=>Change(i)} className='Button'>
        <p style={{ userSelect: 'none'}}>{props.tag}</p>
    </div>
    )
}

export default ScrollButton;