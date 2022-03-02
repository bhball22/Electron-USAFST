import React from 'react'
import "./Button.css"

const NavButton = (props) => {
    function testFlag(){
        console.log(`${props.tag} has been clicked`);
    }

    return(
        <div className='Button'>
            <p onClick={testFlag}>{props.tag}</p>
        </div>
    )
}

export default NavButton;