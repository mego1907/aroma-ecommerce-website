import React from 'react';
import Data from './Data';
import {
  SliderSec,
  SliderItem,
  SliderImg,
  SliderDesc,
} from "./Slider.elements";


const Slider = () => {
  return (
    <SliderSec>
      {Data.map(item => 
        <SliderItem>
          <SliderImg src={item.img} alt={item.name} />
          <SliderDesc>
            <h4>{item.name}</h4>
            <p>{item.type}</p>
          </SliderDesc>
        </SliderItem>
        )}
    </SliderSec>
  );
}

export default Slider
