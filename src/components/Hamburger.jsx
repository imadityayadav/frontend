import React from 'react';
import { slide as Menu } from 'react-burger-menu';

const HamburgerMenu = () => {
  return (
    <Menu right>
      <a className="menu-item" href="/">Shop</a>
      <a className="menu-item" href="/men">Men</a>
      <a className="menu-item" href="/kids">Kids</a>
      <a className="menu-item" href="/women">Women</a>
      <a className="menu-item" href="/login"><p className='bg-richblack-700 border rounded-md p-2 translate-x-[50%] w-[50%]'>Log in</p></a>
      
    </Menu>
  );
};

export default HamburgerMenu;
