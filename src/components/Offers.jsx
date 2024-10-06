import React from 'react';
import eximg from './assets/girl.webp';

const Offers = () => {
  return (
    <div className='offers w-full h-auto flex flex-col md:flex-row mt-12 mx-0 mb-36 bg-gradient-to-r from-[#5A585A] to-[#090947] p-5 md:p-20'>
      <div className='offer-left flex flex-1 flex-col justify-center'>

        <h1 className='text-white ml-2 text-[90px] font-extrabold leading-tight'>Exclusive</h1>
        <h1 className='text-white ml-20 mb-4 text-[26px] font-semibold tracking-wider'>OFFERS FOR YOU!</h1>
        <p className='text-white ml-14 text-[18px] font-light mt-[10px]'>ONLY ON BEST SELLER PRODUCTS</p>
        <button className=' w-[282px] h-[70px] ml-12 rounded-[35px] bg-[#ff4141] text-white text-[22px] mt-[30px] cursor-pointer transition-all
                          duration-300 ease-in-out transform hover:bg-[#b32727] hover:-translate-y-2'>

        <h1 className='text-[#171717] text-5xl md:text-[80px] font-bold'>Exclusive</h1>
        <h1 className='text-[#171717] text-xl md:text-[22px] font-bold'>Offers for you</h1>
        <p className='text-base'>ONLY ON BEST SELLER PRODUCTS</p>
        <button className='w-[282px] h-[70px] rounded-full bg-[#ff4141] text-white text-xl mt-6 cursor-pointer'>

          Check Now
        </button>
      </div>

      <div className='flex justify-center mt-8 md:mt-0'>
        <img className='w-full h-auto max-w-xs md:max-w-sm' src={eximg} alt="Exclusive Offers" />
      </div>
    </div>
  );
};

export default Offers;
