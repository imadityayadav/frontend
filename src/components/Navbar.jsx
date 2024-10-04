import React, { useContext, useRef, useState } from 'react'
import logo from './assets/logo.png'
import cart from './assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import ham from './assets/ham.png'


const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const toggle = (e)=>{
        menuRef.current.classlist.toggle('nav-menu-visible');
        e.target.classlist.toggle('open');
    }
    
    return (
        <div className='navbar flex justify-around p-[25px] shadow-md items-center bg-white max-[1280px]:py-[12px] max-[1280px]:px-[50px] max-[1024px]:py-[12px] max-[1024px]:px-[30px] max-[800px]:py-[10px] max-[800px]:px-0 '>
            <div className='flex items-center gap-[10px]'>
                <img className='xl:w-[40px] max-[800px]:' src={logo} alt="" />
                <p className='text-black text-[40px] font-semibold max-[1280px]:text-[25px]'>Shopper's Stop</p>
            </div>
            <img className='hidden max-[800px]:block max-[800px]:w-[30px]' src={ham} onClick={toggle} alt="" />
            
            <ul ref={menuRef} className='flex text-center justify-center gap-[50px] text-[20px] font-medium text-[#626262] cursor-pointer max-[1280px]:gap-[30px] max-[1280px]:text-[16px] max-[1024px]:gap-[25px] max-[1024px]:text-[14px] max-[800px]:flex max-[800px]:h-[80px] max-[800px]:w-[100%] max-[800px]:absolute max-[800px]:bg-white max-[800px]:justify-center max-[800px]:top-[70px]  '>
                <li onClick={() => { setMenu("shop") }}> <Link to="/">Shop</Link>{menu === "shop" ? <hr className='w-[80%] h-[3px] rounded-sm bg-[#FF4141]' /> : <></>}

                </li>
                <li  onClick={() => { setMenu("men") }}><Link to="/men">Men</Link>{menu === "men" ? <hr className='w-[80%] h-[3px] rounded-sm bg-[#FF4141]' /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}><Link to="/kids">Kids</Link>{menu === "kids" ? <hr className='w-[80%] h-[3px] rounded-sm bg-[#FF4141]' /> : <></>}</li>
                <li onClick={() => { setMenu("women") }}><Link to="/women">Women</Link>{menu === "women" ? <hr className='w-[80%] h-[3px] rounded-sm bg-[#FF4141]' /> : <></>}</li>
            </ul>
            <div className='flex items-center gap-[45px] max-[1280px]:gap-[30px]'>


                <Link to='/login'>
                <button className='px-4 py-2 bg-transparent text-black font-semibold rounded-lg border border-gray-400 hover:bg-black hover:text-white transition duration-300 ease-in-out'>Login</button>
                </Link>


                <Link to='/cart'><img className='max-[1024px]:w-[30px]' src={cart} alt="" /></Link>
                <div className='w-[22px] h-[22px] flex justify-center items-center mt-[-35px] ml-[-55px] text-[11px] rounded-full bg-[#FF4141] text-white max-[1280px]:ml-[-40px] max-[1280px]:text-[12px] max-[1024px]:w-[18px] max-[1024px]:h-[18px]'>{getTotalCartItems()}</div>




            </div>
        </div>
    )
}

export default Navbar
