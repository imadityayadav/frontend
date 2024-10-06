import React from 'react';
import { Link } from 'react-router-dom';

const Items = (props) => {
    return (
        <div className='w-[280px] hover:scale-105 transition duration-150 hover:shadow-2xl max-[1280px]:w-[220px] max-[1280px]:text-[14px] max-[1024px]:w-[170px] max-[1024px]:text-[13px] max-[800px]:w-[120px] max-[800px]:text-[12px] max-[500px]:w-[160px]'>
            <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
                <img className='w-full h-auto max-[1280px]:w-full max-[1024px]:w-full max-[800px]:w-full max-[500px]:w-full' src={props.image} alt={props.name} />
            </Link>
            <p className='mt-2 mb-2 text-center'>{props.name}</p>
            <div className='item-prices flex justify-between items-center px-4'>
                <div className='item-price-new text-[#374151] text-[18px] font-bold max-[1280px]:text-[14px] max-[1024px]:text-[13px] max-[800px]:text-[12px]'>
                    ${props.new_price}
                </div>
                <div className='items-price-old text-[#8c8c8c] text-[18px] font-semibold line-through max-[1280px]:text-[14px] max-[1024px]:text-[13px] max-[800px]:text-[12px]'>
                    ${props.old_price}
                </div>
            </div>
            
            {/* <Link to='/login'>
                <button className='bg-yellow-300 rounded-full mr-2 w-[100px] mt-2 mb-2'>Buy Now</button>
            </Link>
            <Link to='/cart'>
                <button className='bg-yellow-300 rounded-full w-[120px]'>Add to Cart</button>
            </Link> */}
        </div>
    );
};

export default Items;
