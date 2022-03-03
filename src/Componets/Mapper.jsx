import React, { useEffect, useState } from 'react';
import ImageMapper from 'react-img-mapper';
import url from '../Assets/img.png';
import area from '../Assets/MAP.json';


const Mapper = (props) =>{

  const [ WIDTH, setWidth] = useState((props.Zoom * 30) + 1000);
  const [ HEIGHT, setHeight] = useState((WIDTH * (41/35)));

  useEffect(()=>{
    setWidth((props.Zoom * 40) + 1000)
    setHeight(WIDTH * (41/35))
  })

  const URL = url;
  const MAP = {
      name: 'my-map',
      areas: area,
    }
    return (
        <ImageMapper 
        src = {URL} 
        map = {MAP} 
        imgWidth = {3500}
        responsive = {true}
        parentWidth = {WIDTH}
        onClick={(area) => { console.log(area.name)}}
        />
    );
}

export default Mapper;