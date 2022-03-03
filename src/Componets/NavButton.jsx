import React from 'react'
import "./Styles/Button.css"

const NavButton = (props) => {

    return(
        <div className='Button'>
            <p onClick={()=>{console.log("Ya Clicked a btn")}}>{props.tag}</p>
        </div>
    )
}

export default NavButton;