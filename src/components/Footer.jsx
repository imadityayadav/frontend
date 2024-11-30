import React from 'react';
import footer_logo from './assets/logo_big.png';
import insticon from './assets/instagram_icon.png';
import pintrest from './assets/pintester_icon.png';
import whatsapp from './assets/whatsapp_icon.png';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <div
      className='flex flex-col justify-center items-center gap-10 pt-24 px-5'
      style={{
        background: 'linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))',
      }}
    >
      <Link to='/'>
        <div className='flex items-center gap-5 cursor-pointer'>
          <img className='w-16 h-auto' src={footer_logo} alt="Footer Logo" />
          <p className='text- text-3xl md:text-4xl font-bold'>Shopper's Stop</p>
        </div>
      </Link>

      <ul className='footer-links flex flex-wrap justify-center gap-5 md:gap-10 text- list-none text-base md:text-lg'>
        <li className='cursor-pointer'>Company</li>
        <li className='cursor-pointer'>Products</li>
        <li className='cursor-pointer'>Offices</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>

      <div className='flex justify-center gap-5'>
        <div className='p-2 cursor-pointer'>
          <InstagramIcon fontSize="large" />
        </div>
        <div className='p-2 cursor-pointer'>
          <PinterestIcon fontSize="large" />
        </div>
        <div className='p-2 cursor-pointer'>
          <WhatsAppIcon fontSize="large" />
        </div>
      </div>

      <div className='flex flex-col items-center gap-6 w-full mb-8 text-[#1a1a1a] text-base md:text-lg'>
        <div className="w-[90%] md:w-[80%] h-[3px] bg-[#57697b99] mt-6"></div>
        <hr className='w-[90%] md:w-[80%] border-none rounded-[10px] h-[3px] text-[#000000cc]' />
        <p className='text-center'>© {new Date().getFullYear()} - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
