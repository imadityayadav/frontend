import React from 'react';
import Item from './items';
import data_product from './assets/data.js';

const Popular = () => {
  return (
    <div className='popular flex flex-col items-center gap-2 h-auto mt-12'>
      <h1 className='text- text-4xl md:text-[50px] font-bold'>POPULAR IN WOMEN</h1>
      <hr className='w-[200px] h-[6px] rounded-sm bg-[#252525]' />
      
      <div className='popular-item mt-8 flex flex-wrap justify-center gap-6 lg-flex-row sm:flex-row'>
        {
            data_product.map((item, i) => (
                <Item 
                    key={i} 
                    id={item.id} 
                    name={item.name} 
                    image={item.image} 
                    new_price={item.new_price} 
                    old_price={item.old_price} 
                />
            ))
        }
      </div>
    </div>
  );
}

export default Popular;
