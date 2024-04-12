import React from 'react';
import './MainContent.css'
import { FcRating } from "react-icons/fc";

const MainContent = () => {
  return (
<>
<div className='main_container'>
  <div className='maincontent'>
    <div className='information'>
        <h4>Showing:</h4>
        <p>1-2 products of 2 products</p>
    </div>
    <div className='dropdown'>
      <h4>Sort by</h4>
      <label for="cars"></label>
        <select id="cars" name="cars" className='dropList'>
            <option value="volvo">Newest First</option>
            <option value="saab">Price High to Low</option>
            <option value="fiat">Price Low to High</option>
        </select>
    </div>

  </div>
<div className='image-container'>
<div className='images'>
    <img src='./shoes.webp' alt='shoes' className='img'/>
    <div className='image-info'>
      <a href='/'>Converse All Star</a>
      <div className='info'>
        <p>Hello tbdskjsdjkszhdkdshfjksdbf  fjdshdjdshf chhdjn</p>

      </div>
    </div>  
    <div className='price-info-rating'>
      <h2>$40</h2>
      <p>4.2 <FcRating /></p>
      </div>  
  </div>

  <div className='images'>
    <img src='./shoes.webp' alt='shoes' className='img'/>
    <div className='image-info'>
      <a href='/'>Converse All Star</a>
      <div className='info'>
        <p>Hello tbdskjsdjkszhdkdshfjksdbf  fjdshdjdshf chhdjn</p>

      </div>
    </div>  
    <div className='price-info-rating'>
      <h2>$40</h2>
      <p>4.2 <FcRating /></p>
      </div>  
  </div>
<div className='images'>
    <img src='./shoes.webp' alt='shoes' className='img'/>
    <div className='image-info'>
      <a href='/'>Converse All Star</a>
      <div className='info'>
        <p>Hello tbdskjsdjkszhdkdshfjksdbf  fjdshdjdshf chhdjn</p>

      </div>
    </div>  
    <div className='price-info-rating'>
      <h2>$40</h2>
      <p>4.2 <FcRating /></p>
      </div>  
  </div>

  </div>


</div>

</>
  );
}

export default MainContent;
