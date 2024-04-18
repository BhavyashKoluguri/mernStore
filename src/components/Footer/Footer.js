import React from 'react';
import './Footer.css';
import { FaRegCopyright, FaInstagramSquare, FaPinterest, FaTwitter } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";





const Footer = () => {
  return (
    <>
        <div className='footer_container'>
            <div className='info'>
                <FaRegCopyright />
                <h2>2024 MERN Store</h2>
            </div>
            <div className='social_media'>
            <ImFacebook2 className='social_media_icons'/>
            <FaInstagramSquare className='social_media_icons'/>
            <FaPinterest className='social_media_icons'/>
            <FaTwitter className='social_media_icons'/>            
            </div>
        </div>
     </>
  );
}

export default Footer;
