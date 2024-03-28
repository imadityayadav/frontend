import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import remove_icon from './assets/cart_cross_icon.png'

const CartItems = () => {

    const { all_product, cartItems, removeToCart , getTotalCartAmount} = useContext(ShopContext)
    return (
        <div className='my-[100px] mx-[150px]'>
            <div className='grid grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr]  text-[18px] py-[20px] px-0 text-[#454545] font-bold'>
                <p>Products</p>
                <p className='pl-[110px]'>Title</p>
                <p className='pl-[140px]'>Price</p>
                <p className='pl-[140px]'>Quantity</p>
                <p className='pl-[140px]'>Total</p>
                <p className='pl-[140px]'>Remove</p>
            </div>
            <hr className='h-[3px] bg-[#e2e2e2] border-0' />

            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className='grid grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center  text-[18px] py-[20px] px-0 text-[#454545] font-bold'>
                            <img src={e.image} alt="" />
                            <p className='pl-[100px]'>{e.name}</p>
                            <p className='pl-[95px]'>${e.new_price}</p>
                            <button className='pl-[75px]'>{cartItems[e.id]}</button>
                            <p className='pl-[125px]'>${e.new_price*cartItems[e.id]}</p>
                            <img className='pl-[150px]' src={remove_icon} onClick={() => { removeToCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null;


            })}



            <div className='flex my-[100px] mx-[0px]'>
                <div className='flex flex-1 flex-col mr-[200px] gap-[40px]'>
                    <p className='text-[22px] font-bold'>Cart Totals</p>
                    <div >
                        <div className='flex justify-between py-[15px] px-0'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()} </p>
                        </div>
                        <hr />
                        <div className='flex justify-between py-[12px]'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='flex justify-between py-[12px]  text-[18px] font-semibold'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    
                    <button className='w-[263px] h-[56px] outline-none border-none bg-[#ff4141] text-[#fff] text-[16px] font-bold cursor-pointer'>PROCEED TO CHECKOUT</button>
                </div>

                <div className='flex-1 text-[16px] font-bold  '>
                    <p className='text-[#555]'>If you have a promo code, Enter here!</p>
                    <div className='w-[504px] mt-[15px] pl-[20px] h-[58px] bg-[#eaeaea]'>
                        <input className='border-none outline-none bg-transparent text-[16px] w-[250px] h-[50px] ' type="text" placeholder='Promo-Code' />
                        <button className='w-[170px] h-[58px] text-[16px] bg-black text-white cursor-pointer ml-[64px]'>submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartItems
