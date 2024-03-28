import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-[75%] h-[70vh] flex flex-col justify-center items-center gap-[30px] m-auto pt-0 pb-0 pr-[140px] pl-[140px] mb-[150px] bg-gradient-to-r from-[#91A6FF] to-[#FFFFFF] '>
      <h1 className='text-[#454545] text-[55px] font-bold'>Get Exclusive Offers on Your Email</h1>
      <p className='text-[#454545] text-[22px]'>Subscribe our Newsletter to stay Updated</p>

      <div className='flex items-center justify-space-between bg-white w-[730px] h-[70px] rounded-[80px] border-[1px] border-[#e3e3e3]'>
        <input className='w-[500px] ml-[30px] border-0 text-[#616161] font-poppins text-[16px] outline-none' type="email" placeholder='Enter Your Email'/>
        <button className='w-[210px] h-[70px] bg-black text-white text-[16px] cursor-pointer rounded-[80px]'>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
