import { Hidden } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ImageMapper from 'react-img-mapper';
import url from '../Assets/img.png';
import area from '../Assets/MAP.json';


const Mapper = (props) =>{

  const [ WIDTH, setWidth] = useState((props.Zoom * 40) + 800);

  useEffect(()=>{
    setWidth((props.Zoom * 40) + 800)
  })

  const URL = url;
  const MAP = {
      name: 'my-map',
      areas: area,
    }
    return (
      <div id='map-container' style={{ 
        position: "fixed",
        left: `${props.posy}vw`,
        top: `${props.posx}vh`,
        transform: `scale(${(props.Zoom * .05) + 1})`,
        'zindex': '2',
      }}>
 <ImageMapper
        src = {URL} 
        map = {MAP} 
        imgWidth = {3500}
        //responsive = {true}
        //parentWidth = {WIDTH}
        onClick={(area) => { console.log(area.name)}}
        />
      </div>

    );
}

export default Mapper;