import React, { useContext } from 'react'
import star from'./assets/star_icon.png';
import stardull from './assets/star_dull_icon.png'
import { ShopContext } from '../context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='flex my-0 mx-[130px]'>
           

      <div className='flex gap-[17px]'>
        <div className='flex flex-col gap-[16px] '>
            <img className='h-[100px] w-[180px]' src={product.image} alt="" />
            <img className='h-[100px]'src={product.image} alt="" />
            <img className='h-[100px]'src={product.image} alt="" />
            <img className='h-[100px]'src={product.image} alt="" />
        </div>

        <div>
        <img className='w-[720px] h-[500px]' src={product.image} alt="" />
        </div>
      </div>


      <div className='flex flex-col my-0 mx-[70px]'>
        <h1 className='text-[40px] text-[#3d3d3d] font-extrabold'>{product.name}</h1>
        <div className='flex items-center mt-[13px] gap-[5px] text-[#1c1c1c] text-[16px]'>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={stardull} alt="" />
            <p>(122)</p>
        </div>

        <div className='flex my-[40px] mx-0 gap-[30px] text-[24px] font-extrabold'> 
            <div className='text-[#818181] line-through'>
                ${product.old_price}
            </div>
            <div className='text-[#ff4141]'>
            ${product.new_price}
            </div>
        </div>

        <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est eveniet quod porro, doloribus repellendus accusantium ex dolore obcaecati nobis ad.
        </div>

        <div>
            <h1 className='mt-[55px] font-bold text-[#656565] text-[20px]' >Select Size</h1>
            <div className='flex my-[30px] mx-0 gap-[20px]'>
                <div className='py-[18px] px-[24px] bg-[#fbfbfb] border-[1px] border-[#ebebeb]rounded-sm cursor-pointer hover:bg-[#1c1c1c] hover:text-white'>S</div>
                <div className='py-[18px] px-[24px] bg-[#fbfbfb] border-[1px] border-[#ebebeb]rounded-sm cursor-pointer hover:bg-[#1c1c1c] hover:text-white'>M</div>
                <div className='py-[18px] px-[24px] bg-[#fbfbfb] border-[1px] border-[#ebebeb]rounded-sm cursor-pointer hover:bg-[#1c1c1c] hover:text-white'>L</div>
                <div className='py-[18px] px-[24px] bg-[#fbfbfb] border-[1px] border-[#ebebeb]rounded-sm cursor-pointer hover:bg-[#1c1c1c] hover:text-white'>XL</div>
                <div className='py-[18px] px-[24px] bg-[#fbfbfb] border-[1px] border-[#ebebeb]rounded-sm cursor-pointer hover:bg-[#1c1c1c] hover:text-white'>XXL</div>
            </div>
        </div>

        <button onClick={()=>{addToCart(product.id)}} className='py-[20px] px-[40px] w-[200px] text-[16px] font-bold text-white bg-[#ff4141] mb-[40px]  cursor-pointerr'>ADD TO CART</button>
        <p className='mt-[10px]'>
            <span className='font-bold'>Category : </span> Women, T-Shirt, Crop-Top
        </p>
        <p className='mt-[10px]'>
            <span className='font-bold'>Tags : </span> Modern, Latest
        </p>
      </div>
    </div>
  )
}

export default ProductDisplay
