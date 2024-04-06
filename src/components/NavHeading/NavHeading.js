import React from 'react';
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlinePayment } from "react-icons/md";
import { MdCall } from "react-icons/md";


import './NavHeading.css';

const NavHeading = () => {
  return (
    <div className='heading'>
        <div className='sub-head'>
            <h5>Free Shipping</h5>
            <LiaShippingFastSolid />
        </div>
        <div className='sub-head'>
            <h5>Payment Methods</h5>
            <MdOutlinePayment />

        </div>
        <div className='sub-head'>
            <h5>Call us 951-999-9999</h5>
            <MdCall />

        </div>
    </div>
  );
}

export default NavHeading;
