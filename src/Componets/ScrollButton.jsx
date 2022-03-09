{/* #FIXME: Issue #17 */}

import React from 'react'
import "./Styles/Button.css"
import arrow from "../Assets/icons/scroll-view-arrow.png"
const ScrollButton = (props) =>  {

    function Change(event) {
    props.onChange();
    console.log(props.tag);
    console.log(props.direction)
    };

    const button = {
        background:     'transport',
        width:          '10%',
        'margin-left':  '40%',
        'margin-right': '40%',
        transform:      'rotate('+(props.direction)+')'
    }

    return(
        <div onClick={(i)=>Change(i)} className='Button' style={button}> 
        <img src={arrow} alt={props.tag}/>
    </div>
    )
}

export default ScrollButton;