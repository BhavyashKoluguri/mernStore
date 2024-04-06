import React from 'react';
import { FaCartPlus } from "react-icons/fa6";
import './NavHeader.css'


const NavHeader = () => {
  return (
    <div className='header'>
      <div className='store'>
        <div className='bar'>
            <span className="ba"></span>
            <span className="ba"></span>
            <span className="ba"></span>
        </div>
        <h4>MERN STORE</h4>
      </div>
      <div>
        <input type='text' placeholder='Search Products' className='search'/>
      </div>
      <div className='about'>
      <FaCartPlus />
      <h4>Brands</h4>
      <h4>Shops</h4>
      <h4>Welcome</h4>

      </div>
    </div>
  );
}

export default NavHeader;
