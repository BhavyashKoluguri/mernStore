import React, { useState } from 'react';
import { FaCartPlus } from "react-icons/fa6";
import './NavHeader.css'
import Brands from './Brands';
import MenuBar from '../MenuBar/MenuBar';


const NavHeader = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [isOpen1, setisOpen1] = useState(false)

    
    

    const toggleBrand = () =>{
        setisOpen1(!isOpen1);
    }

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div className='header'>
      <div className='store'>
          
      <div className="burger-nav-bar">
      <div className="nav-bar" onClick={toggleMenu}>
        <div className="burger-icon"></div>
        <div className="burger-icon"></div>
        <div className="burger-icon"></div>
      </div>
      {isOpen && <MenuBar />}
    </div>

            
        <h4>MERN STORE</h4>
      </div>
      <div>
        <input type='text' placeholder='Search Products' className='search'/>
      </div>
      <div className='about'>
      <FaCartPlus />
      <h4 onClick={toggleBrand}>Brands</h4>
      <h4>Shops</h4>
      <h4>Welcome</h4>
      {isOpen1 && <Brands />}

      </div>
    </div>
  );
}

export default NavHeader;
