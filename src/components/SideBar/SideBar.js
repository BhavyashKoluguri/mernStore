import React, { useState } from 'react';
import './SideBar.css';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

const SideBar = () => {
  const [priceValue, setPriceValue] = useState(20);
  const [ratingValue, setRatingValue] = useState(0);

  const handlePriceChange = (newValue) => {
    setPriceValue(newValue);
  };

  const handleRatingChange = (newValue) => {
    setRatingValue(newValue);
  };

  return (
    <div className='sidebar_container'>
      <div className='sidebar'>
        <div className='price'>
          <h3>Price</h3>
          <p>${priceValue}</p>
          <Slider
            trackStyle={{ backgroundColor: '#007bff', height: 10 }}
            railStyle={{ backgroundColor: '#ccc', height: 10 }}
            handleStyle={{
              borderColor: '#007bff',
              height: 20,
              width: 20,
              marginLeft: -10,
              marginTop: -5,
              backgroundColor: '#007bff',
            }}
            min={0}
            max={100}
            value={priceValue}
            onChange={handlePriceChange}
          />
        </div>

        <div className='rating'>
          <h3>Rating</h3>
          <p>{ratingValue}</p>
          <Slider
            trackStyle={{ backgroundColor: '#007bff', height: 10 }}
            railStyle={{ backgroundColor: '#ccc', height: 10 }}
            handleStyle={{
              borderColor: '#007bff',
              height: 20,
              width: 20,
              marginLeft: -10,
              marginTop: -5,
              backgroundColor: '#007bff',
            }}
            min={0}
            max={5}
            value={ratingValue}
            onChange={handleRatingChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
