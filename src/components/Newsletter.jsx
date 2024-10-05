import React from 'react';

const Newsletter = () => {
  return (

    <div className='w-full max-w-[1200px] h-auto flex flex-col justify-center items-center gap-[30px] m-auto p-6 md:p-10 mb-[150px] bg-gradient-to-r from-[#91A6FF] to-[#FFFFFF]'>
      <h1 className='text-[#454545] text-[36px] md:text-[55px] font-bold text-center'>Get Exclusive Offers on Your Email</h1>
      <p className='text-[#454545] text-[16px] md:text-[22px] text-center'>Subscribe to our Newsletter to stay updated</p>

      <div className='flex flex-col md:flex-row items-center justify-between bg-white w-full md:w-[730px] h-[70px] rounded-[80px] border-[1px] border-[#e3e3e3]'>
        <input className='w-full md:w-[500px] ml-4 md:ml-[30px] border-0 text-[#616161] font-poppins text-[16px] outline-none h-full p-2' type="email" placeholder='Enter Your Email'/>
        <button className='w-full md:w-[210px] h-[70px] bg-black text-white text-[16px] cursor-pointer rounded-[80px] mt-2 md:mt-0'>Subscribe</button>
      </div>
    </div>
  );
}

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
