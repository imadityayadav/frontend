import React from 'react'
import data_product from './assets/data'
import Item from './items'

const RelatedProducts = () => {
  return (
    <div className='flex flex-col items-center gap-[10px] h-[90vh] '>
      <h1 className='text-[#171717] text-[50px] font-bold'>Related Products</h1>
      <hr className='w-[600px] h-[6px] rounded-[10px] bg-[#252525]' />
      <div className='mt-[50px] flex gap-[30px]'>
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
