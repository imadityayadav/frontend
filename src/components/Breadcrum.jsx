import React from 'react'
import arrow from './assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='flex items-center gap-[8px] text-[#5e5e5e] text-[16px] font-bold my-[60px] mx-[170px] capitalize'>
        HOME <img src={arrow} alt="" /> SHOP <img src={arrow} alt="" /> {product.category}  SHOP <img src={arrow} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum;