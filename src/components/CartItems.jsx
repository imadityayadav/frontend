import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import remove_icon from './assets/cart_cross_icon.png';

const CartItems = () => {
    const { all_product, cartItems, removeToCart, getTotalCartAmount } = useContext(ShopContext);
    
    return (
      <div className="my-24 mx-10 md:my-32 md:mx-20 lg:my-40 lg:mx-32">
        <div className="text-[#454545] font-bold flex flex-col  lg:justify-between lg:items-center text-lg my-3 ">
          <p>Products</p>
          <p className="">Title</p>
          <p className=" ">New Price</p>
          <p className="">Old Price</p>
          <p className="">Quantity</p>
          <p className="">Total</p>
          <p className="">Remove</p>
        </div>
        <hr className="h-[3px] bg-[#e2e2e2] border-0" />

        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="grid grid-cols-6 items-center text-[18px] py-5 text-[#454545]">
                  <img className="w-[60px] h-auto" src={e.image} alt={e.name} />
                  <p className="col-span-2 pl-4">{e.name}</p>
                  <p className="pl-8">${e.new_price}</p>
                  <p className="pl-8 line-through text-gray-500">
                    ${e.old_price}
                  </p>{" "}
                  {/* Old Price with strikethrough */}
                  <button className="pl-8">{cartItems[e.id]}</button>
                  <p className="pl-8">${e.new_price * cartItems[e.id]}</p>
                  <img
                    className="w-[24px] h-auto pl-8 cursor-pointer"
                    src={remove_icon}
                    onClick={() => {
                      removeToCart(e.id);
                    }}
                    alt="Remove"
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}

        <div className="flex flex-col md:flex-row my-24 mx-0">
          <div className="flex-1 mr-0 md:mr-20 mb-10 md:mb-0">
            <p className="text-[22px] font-bold">Cart Totals</p>
            <div>
              <div className="flex justify-between py-4">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="flex justify-between py-4">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="flex justify-between py-4 text-[18px] font-semibold">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button className="w-full md:w-[263px] h-[56px] outline-none border-none bg-[#ff4141] text-[#fff] text-[16px] font-bold cursor-pointer">
              PROCEED TO CHECKOUT
            </button>
          </div>

          <div className="flex-1 text-[16px] font-bold">
            <p className="text-[#555]">If you have a promo code, enter here!</p>

            <div className="w-full mt-[15px] h-[58px] bg-[#eaeaea] flex items-center px-1">
              <input
                placeholder="Promo-code"
                className="h-[50px] w-full ml-0 pl-1"
              />
              <button type="submit" className="text-white bg-black h-[50px] px-1 w-[100px]">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CartItems;

{/* <input className='border-none outline-none bg-transparent text-[16px] w-screen h-[50px] pl-2' type="text" placeholder='Promo-Code' />
                        <button className='w-[] h-[58px] text-[16px] bg-black text-white cursor-pointer ml-4'>
                            Submit
                        </button> */}