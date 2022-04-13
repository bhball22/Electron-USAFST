import React from 'react'
import "./Styles/ArrowKey.css"
import closed from "../Assets/icons/drawer-closed-arrow.png"
import opened from "../Assets/icons/drawer-opend-arrow.png"
const ClosedDrawer = (props) =>  {

    function Change(event) {
    props.onChange()
    };

    return(
        <div onClick={(i)=>Change(i)} className='TabKey' id={props.id} alt="Arrow"> 
            <img src={closed} style={{height:'150px',width:'60px'}}/>
        </div>
    )
}

const OpenedDrawer = (props) => {

    function Change(event) {
        props.onChange()
    };

    return(
        <div onClick={(i)=>Change(i)} className='PullKey' id={props.id} alt="Arrow">
            <img src={opened}/>
        </div>
    )
}

export {ClosedDrawer, OpenedDrawer}; 