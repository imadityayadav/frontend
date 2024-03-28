import React from 'react'
import eximg from './assets/girl.webp'
const Offers = () => {
  return (
    <div className='offers w-[100%] h-[75vh] flex mt-[50px] mx-[0px] pt-[0px] pb-[0px] pr-[140px] pl-[140px] mb-[150px] bg-gradient-to-r from-[#5A585A] to-[#090947]'>


      <div className='offer-left flex flex-1 flex-col justify-center'>
        <h1 className='text-[#171717] text-[80px] font-bold'>Exclusive</h1>
        <h1 className='text-[#171717] text-[22px] font-bold'>Offers for you</h1>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button className=' w-[282px] h-[70px] rounded-[35px] bg-[#ff4141] text-white text-[22px] mt-[30px] cursor-pointer'>Check Now</button>
      </div>


      <div className='flex pt-[0px] '>
        <img className='w-[300px] h-[450px] mt-[38px]' src={eximg} alt="" />
      </div>


    </div>
  )
}

export default Offers
