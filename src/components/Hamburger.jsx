import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './HamburgerMenu.css'; 

const HamburgerMenu = () => {
  return (
    <Menu right>
      <a className="menu-item" href="/">Shop</a>
      <a className="menu-item" href="/men">Men</a>
      <a className="menu-item" href="/kids">Kids</a>
      <a className="menu-item" href="/women">Women</a>
      <a className="menu-item" href="/login">
        <p className='login-button'>Log in</p>
      </a>
    </Menu>
  );
};

export default HamburgerMenu;
