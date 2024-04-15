import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Links.css'

const Links = () => {

  const [email, setemail] = useState([]);

  const emailHandler = (e) =>{
    console.log(e.target.value);
    setemail(e.target.value)
  }

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
        <input type='text' placeholder='Please Enter Your Email' value={email} onChange={emailHandler}/>
        <button>Submit</button>
      </form>
      </div>
    </div>

    </>
  );
}

export default Links;
