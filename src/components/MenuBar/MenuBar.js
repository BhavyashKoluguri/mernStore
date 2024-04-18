import React from 'react';
import './MenuBar.css'

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <h1>Shop by Category</h1>
      <div className='menu-bar-link'>
      <p>Bags</p>
      <p>Men</p>
      <p>Shoes</p>
      <p>Perfumes</p>
      </div>
    </div>
  );
}

export default MenuBar;
