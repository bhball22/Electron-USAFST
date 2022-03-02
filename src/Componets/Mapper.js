import React from 'react';
import ImageMapper from 'react-img-mapper';
import url from './test.jpg'
import area from './MAP.json';

const Mapper = () => {
  const URL = url;
  const MAP = {
    name: 'my-map',
    areas: area,
  };
  
  return (
          <ImageMapper src = {URL} map = {MAP}/>);
}

export default Mapper;