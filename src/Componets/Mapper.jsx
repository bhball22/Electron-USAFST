import React from 'react';
import ImageMapper from 'react-img-mapper';
import url from '../Assets/img.png';
import area from '../Assets/MAP.json';


const Mapper = (props) =>{

  const URL = url;
  const MAP = {
      name: 'my-map',
      areas: area,
    }
    return (
      <div id='map-container' style={{ 
        position: "relative",
        width: '100%',
        height: '100%',
        'zindex': '2',
      }}>
 <ImageMapper
        src = {URL} 
        map = {MAP} 
        imgWidth = {4200}
        responsive = {true}
        imgheight = {3500}
        parentWidth = {2000}
        natural = {true}
        onClick={(area) => {/*props.onButtonClicked(area)*/ console.log(area.name)}}
        />
      </div>

    );
}

export default Mapper;