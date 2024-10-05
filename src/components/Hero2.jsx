import React from 'react';
import banner from '../components/assets/banner-img.jpg';

const Hero2 = () => {
  return (
    <div className="w-full">
      <div className="relative">
        <img className="w-full h-auto object-cover" src={banner} alt="Banner" />
      </div>
    </div>
  );
}

export default Hero2;
