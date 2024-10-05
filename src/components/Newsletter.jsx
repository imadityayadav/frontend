import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center gap-8 p-5 mb-36 bg-gradient-to-r from-[#91A6FF] to-[#FFFFFF]'>
      <h1 className='text-[#454545] text-4xl md:text-[55px] font-bold text-center'>Get Exclusive Offers on Your Email</h1>
      <p className='text-[#454545] text-base md:text-[22px] text-center'>Subscribe to our Newsletter to stay Updated</p>

      <div className='flex items-center justify-between bg-white w-full max-w-lg h-[70px] rounded-full border-[1px] border-[#e3e3e3]'>
        <input 
          className='flex-1 ml-5 border-0 text-[#616161] font-poppins text-[16px] outline-none' 
          type="email" 
          placeholder='Enter Your Email' 
        />
        <button className='w-[150px] h-full bg-black text-white text-[16px] cursor-pointer rounded-full'>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
