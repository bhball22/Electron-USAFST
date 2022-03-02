import React from 'react'
import ViewButton from './ViewButton';
import NavButton from './NavButton';
import "./NavBar.css";
import "./Slider";
import Slider from './Slider';

const NavBar = () => {
    return(
        <div className="NavBar">
            <NavButton tag="Radar Controlls"/>
            <NavButton tag="System Information"/>
            <NavButton tag="Flight Display"/>
            <NavButton tag="Navigation Controlls"/>
            <NavButton tag="Wide View"/>
            <Slider/>
            <ViewButton tag="Small"/>
            <ViewButton tag="Medium"/>
            <ViewButton tag="Large"/>
            <ViewButton tag="External"/>
        </div>
    )
}

export default NavBar;