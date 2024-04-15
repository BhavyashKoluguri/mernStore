import React, { useEffect, useState } from 'react';
import './MainContent.css'
import { FcRating } from "react-icons/fc";
import axios from 'axios';
import { Link } from 'react-router-dom';

const MainContent = () => {

  const [getimage, setgetimage] = useState([]);

  const getData = async() => {
    try {
      const resp = await axios.get('https://course-api.com/react-store-products');
      const data = resp.data;
      console.log(data);
      setgetimage(data);
      
      
    } catch (error) {
      console.log(error.resp);
    }
    
  }

  useEffect(()=>{
    getData();
  },[])

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


{getimage.map((img,i)=>{
 return <div className='images' key={i}>
  <Link to={`/home/${img.id}`} >
  <img src={img.image} alt='shoes' className='img'/>
  </Link>
  <div className='image-info'>
    <a href='/'>{img.company}</a>
    <div className='info'>
      <p>{img.description}</p>

    </div>
  </div>  
  <div className='price-info-rating'>
    <h2>${img.price}</h2>
    <p>4.2 <FcRating /></p>
    </div>  
</div>
})}

  </div>
  


</div>

</>
  );
}

export default MainContent;
