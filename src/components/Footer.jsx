import React from 'react'
import footer_logo from './assets/logo_big.png'
import insticon from './assets/instagram_icon.png'
import pintrest from './assets/pintester_icon.png'
import whatsapp from './assets/whatsapp_icon.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-[50px] pt-[100px]'>


      <Link to='/'>
      <div className='flex items-center gap-[20px] cursor-pointer '>
        <img className='' src={footer_logo} alt="" />
        <p className='text-[#383838] text-[46px] font-bold'>Shopper's Stop</p>
      </div>
      </Link>


      <ul className='footer-links flex gap-[50px] text-[#252525] list-none text-[20px] '>
        <li className='cursor-pointer'>Company</li>
        <li className='cursor-pointer'>Products</li>
        <li className='cursor-pointer'>Offices</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>


      <div className='flex  gap-[20px] '>

        <div className='p-2.5 pb-[6px]  cursor-pointer'>
            <img src={insticon} alt="" />
        </div>

        <div className='p-2.5 pb-[6px] cursor-pointer'>
            <img src={pintrest} alt="" />
        </div>

        <div className='p-2.5 pb-[6px]  cursor-pointer'>
            <img src={whatsapp} alt="" />
        </div>
      </div>

      <div className='flex flex-col items-center gap-[30px] w-[100%] mb-[30px] text-[#1a1a1a] text-[20px] '>
      <div className="w-[80%] h-[3px] bg-[#57697b99] mt-[25px] "></div>
        <hr className='w-[80%] border-none rounded-[10px] h-[3px] text-[#000000cc]'/>
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
