import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import drop_down from '../components/assets/dropdown_icon.png'
import Item from '../components/items'

const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext)
  
  return (
    <div className='shop-category'>
      <img className='block mt-[30px] mb-[30px] mx-auto w-[100%] max-[500px]:mt-[70px]' src={props.banner} alt="" />

      <div className='flex justify-between items-center mt-0 mb-0 mr-[170px] ml-[170px] max-[500px]:mx-[80px]'>
        <p className='max-[500px]:text-[12px]'>
          <span className='font-bold '>Showing 1-12 </span> &nbsp;
           out of 36 products
        </p>

        <div className='flex py-[10px] px-[20px] rounded-[40px] border-[1px] border-[#888] max-[500px]:text-[8px] max-[500px]:py-[2px]'>  
        <p>Sort by</p>
           <img className='mt-[9px] ml-[4px] h-[7px] w-[10px] max-[500px]:w-[5px] max-[500px]:h-[5px] max-[500px]:mt-[4px]' src={drop_down} alt="" />
        </div>
      </div>


      <div className='mt-[20px] mb-[20px] mr-[170px] ml-[170px] grid grid-cols-4 gap-[80px] max-[500px]:grid-cols-1'>
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return  null;
          }
        })}
      </div>
      <div className='flex items-center justify-center my-[150px] mx-auto w-[233px] h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] font-semibold text-[18px] cursor-pointer'>
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory;                                                                    
