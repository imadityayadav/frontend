import React, { useContext } from 'react';
import star from './assets/star_icon.png';
import stardull from './assets/star_dull_icon.png';
import { ShopContext } from '../context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className='flex flex-col lg:flex-row my-0 mx-4 lg:mx-[130px]'>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <img className='h-[100px] w-[180px] object-cover' src={product.image} alt="" />
          <img className='h-[100px] object-cover' src={product.image} alt="" />
          <img className='h-[100px] object-cover' src={product.image} alt="" />
          <img className='h-[100px] object-cover' src={product.image} alt="" />
        </div>
        <div>
          <img className='w-full lg:w-[720px] h-[500px] object-cover' src={product.image} alt="" />
        </div>
      </div>

      <div className='flex flex-col my-0 mx-0 lg:mx-[70px]'>
        <h1 className='text-2xl lg:text-[40px] text-[#3d3d3d] font-extrabold'>{product.name}</h1>
        <div className='flex items-center mt-2 gap-2 text-[#1c1c1c] text-sm lg:text-[16px]'>
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={stardull} alt="" />
          <p>(122)</p>
        </div>

        <div className='flex my-10 mx-0 gap-4 text-lg lg:text-[24px] font-extrabold'> 
          <div className='text-[#818181] line-through'>
            ${product.old_price}
          </div>
          <div className='text-[#ff4141]'>
            ${product.new_price}
          </div>
        </div>

        <div className='text-sm lg:text-base'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est eveniet quod porro, doloribus repellendus accusantium ex dolore obcaecati nobis ad.
        </div>

        <div>
          <h1 className='mt-[55px] font-bold text-[#656565] text-lg lg:text-[20px]'>Select Size</h1>
          <div className='flex my-6 mx-0 gap-4'>
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <div key={size} className='py-4 px-6 bg-[#fbfbfb] border-[1px] border-[#ebebeb] rounded-sm cursor-pointer hover:bg-[#1c1c1c] hover:text-white'>
                {size}
              </div>
            ))}
          </div>
        </div>

        <button onClick={() => { addToCart(product.id) }} className='py-4 px-6 w-full lg:w-[200px] text-[16px] font-bold text-white bg-[#ff4141] mb-[40px] cursor-pointer'>
          ADD TO CART
        </button>
        <p className='mt-2'>
          <span className='font-bold'>Category:</span> Women, T-Shirt, Crop-Top
        </p>
        <p className='mt-2'>
          <span className='font-bold'>Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
