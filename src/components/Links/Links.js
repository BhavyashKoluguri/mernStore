import React from 'react';
import { Link } from 'react-router-dom';
import './Links.css'





const Links = () => {
  return (
    <>
    
    

    <div className='links_container'>
      <div className='topic'>
        <h1>CUSTOMER SERVICE</h1>
        <Link to="/contact" className='route_links'>Contact us</Link>
        <Link to="/contact" className='route_links'>Sell With Us</Link>
        <Link to="/contact" className='route_links'>Shipping</Link>
      </div>
      <div className='topic'>
      <h1>Links</h1>
      <Link to="/contact" className='route_links'>Contact us</Link>
        <Link to="/contact" className='route_links'>Sell With Us</Link>
        <Link to="/contact" className='route_links'>Shipping</Link>
      </div>
      <div className='topic'>
      <h1>News Letter</h1>
      <p>Sign up for our news Letter</p>
      <form className='form'>
        <input type='text' placeholder='Please Enter Your Email'/>
        <button>Submit</button>
      </form>
      </div>
    </div>
        
    
    </>
  );
}

export default Links;
