import React from 'react';
import data_product from './assets/data';
import Item from './items';

const RelatedProducts = () => {
  return (
    <div className='flex flex-col items-center gap-4 h-auto p-4'>
      <h1 className='text- text-3xl md:text-5xl font-bold'>Related Products</h1>
      <hr className='w-full max-w-2xl h-1 rounded-md bg-[#252525]' />
      <div className='mt-8 flex flex-wrap justify-center gap-6'>
        {data_product.map((item, i) => (
          <Item 
            key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price} 
            rating={item.rating} // Passed rating
            reviewCount={item.reviewCount} // Passed review count
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
