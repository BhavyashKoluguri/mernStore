import React, { useState } from 'react';
import './SideBar.css';

import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

const SideBar = () => {
  
  const [value, setvalue] = useState(20);
  const [value1, setvalue1] = useState(0);

  const handleChange2 = (newValue) => {
    setvalue1(newValue);
  }

  const handleChange = (newValue) => {
    console.log("new Value", newValue);
    setvalue(newValue);
  };

  return (
    <div className='sidebar_container'>
      <div className='sidebar'>
        <div className='price'>
            <h3>Price</h3>
            <p>{value}</p>
            <Slider trackStyle={{ backgroundColor: "#007bff", height: 10 }}
                    railStyle={{ backgroundColor: "white", height: 10 }}
                    handleStyle={{
                      borderColor: "red",
                      height: 15,
                      width: 15,
                      marginLeft: -2,
                      marginTop: -3,
                      backgroundColor: "red"
                    }}
                    min={0}
                    max={100}
                    value={value}
                    onChange={handleChange}
            />
        </div>


        <div className='rating'>
            <h3>Rating</h3>
            <p>{value1}</p>
            <Slider trackStyle={{ backgroundColor: "#007bff", height: 10 }}
                    railStyle={{ backgroundColor: "white", height: 10 }}
                    handleStyle={{
                      borderColor: "red",
                      height: 15,
                      width: 15,
                      marginLeft: -2,
                      marginTop: -3,
                      backgroundColor: "red"
                      
                    }}
                    dotStyle={{borderColor: 'white', height: 15, width: 15}}
                    activeDotStyle={{borderColor: 'red', height: 15, width: 15}}
                    dots={{height: 10}}
                    min={0}
                    max={5}
                    value={value1}
                    onChange={handleChange2}
                    
                    
            />
        </div>
      
    </div>
    </div>
  );
}

export default SideBar;
