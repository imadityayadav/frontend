import React from 'react'
import new_collection from './assets/new_collections'
import Item from './items'

const Newcollection = () => {
  return (
    <div className='popular flex flex-col items-center gap-[10px] mb-[100px]'>
      <h1 className='text-[#171717] text-[50px] font-bold '>New Collection</h1>
      <hr className='w-[200px] h-[6px] rounded-sm bg-[#252525] ' />


      <div className='grid grid-cols-4 mt-[60px] gap-[20px] '>
        {
            new_collection.map((item,i)=>{
                return (
                    <div>
                        <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                        
                        
                    </div>
                )
            })
        }
       
      </div>
    </div>
  )
}

export default Newcollection
