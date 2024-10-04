import React from 'react'
import eximg from './assets/girl.webp'
const Offers = () => {
  return (
    <div className='offers w-[100%] h-[75vh] flex mt-[50px] mx-[0px] pt-[0px] pb-[0px] pr-[140px] pl-[140px] mb-[150px] bg-gradient-to-r from-[#5A585A] to-[#090947]'>


      <div className='offer-left flex flex-1 flex-col justify-center'>
        <h1 className='text-white ml-2 text-[90px] font-extrabold leading-tight'>Exclusive</h1>
        <h1 className='text-white ml-20 mb-4 text-[26px] font-semibold tracking-wider'>OFFERS FOR YOU!</h1>
        <p className='text-white ml-14 text-[18px] font-light mt-[10px]'>ONLY ON BEST SELLER PRODUCTS</p>
        <button className=' w-[282px] h-[70px] ml-12 rounded-[35px] bg-[#ff4141] text-white text-[22px] mt-[30px] cursor-pointer transition-all
                          duration-300 ease-in-out transform hover:bg-[#b32727] hover:-translate-y-2'>
          Check Now
        </button>
      </div>


      <div className='flex pt-[0px] '>
        <img className='w-[300px] h-[450px] mt-[38px]' src={eximg} alt="" />
      </div>


    </div>
  )
}

export default Offers
