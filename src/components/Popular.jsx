import React from 'react'
import Item from './items'
import data_product from './assets/data.js'
const Popular = () => {
  return (
    <div className='popular flex flex-col items-center gap-[10px] h-[90vh] mt-[50px] mb-[50px]' >


      <h1 className='text-[#171717] text-[50px] font-bold '>POPULAR IN WOMEN</h1>
      <hr className='w-[200px] h-[6px] rounded-sm bg-[#252525] ' />
      <div className='popular-item mt-[50px] flex gap-[30px] '>
        {
            data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })
        }
      </div>
    </div>
  )
}

export default Popular
