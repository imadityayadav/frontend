import React from 'react';
import new_collection from './assets/new_collections';
import Item from './items';
import './Newcollection.css';

const Newcollection = () => {
  return (
    <div className='popular flex flex-col items-center gap-4 mb-24'>
      <h1 className='text- text-4xl md:text-5xl font-bold'>New Collection</h1>
      <hr className='w-48 h-1 rounded-sm bg-[#252525]' />

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-16 gap-5'>
        {new_collection.map((item, i) => (
          <div key={i}>
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Newcollection;
