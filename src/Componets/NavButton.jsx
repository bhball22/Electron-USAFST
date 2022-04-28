import zIndex from '@mui/material/styles/zIndex'
import React from 'react'
import "./Styles/Button.css"

const NavButton = (props) => {

    function transform(event) {
        props.transform()
    };
    
        return(
            <div onClick={(i)=> transform(i) } className='Button' style = {{position: 'absolute', zIndex: '1'}}>
            <p style={{ userSelect: 'none'}}>{props.tag}</p>
        </div>
        )
    }

export default NavButton;