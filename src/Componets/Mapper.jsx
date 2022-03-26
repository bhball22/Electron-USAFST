import { Hidden } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ImageMapper from 'react-img-mapper';
import url from '../Assets/img.png';
import area from '../Assets/MAP.json';
import { onDrag, useGesture, onPinch } from '@use-gesture/react';


const Mapper = (props) =>{

  const [ zoom, setzoom] = useState({zoom: 1});
  const [ pos , setpos] = useState({x: 0, y: 0});
  const bind = useGesture(
    {
    //Might want to add drag bounds
    onDrag: ((params) => { params.tap == false ? setpos({ x: params.offset[0], y: params.offset[1] }) : console.log('tap')}),
    onPinch: ((params) => {
      setzoom({zoom : params.distance[0]});
      console.log(zoom.zoom + params.distance[0])
      if(zoom.zoom > 1.5){
        setzoom({zoom : 1.5})
      }
      if(zoom.zoom < .5){
        setzoom({zoom : .5})
      }

      console.log(zoom)
      console.log("pitch");
    })

   }
  )

  const URL = url;
  const MAP = {
      name: 'my-map',
      areas: area,
    }
    return (
      <div {...bind()} id='map-container' style={{ 
        position: "relative",
        left: pos.x,
        top: pos.y,
        transform: `scale(${zoom.zoom})`,
        'zindex': '2',
        width: "auto",
        touchAction: "none",
      }}>
 <ImageMapper
        src = {URL} 
        map = {MAP} 
        imgWidth = {3500}
        onClick={(area) => { console.log(area.name)}}
        />
      </div>

    );
}

export default Mapper;