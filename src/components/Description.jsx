import React from 'react';

const Description = () => {
  return (
    <div className='my-24 mx-10 md:my-32 md:mx-20 lg:my-40 lg:mx-32'>
      <div className='flex flex-wrap'>
        <div className='flex justify-center items-center text-sm md:text-base font-bold w-full md:w-[171px] h-[70px] border border-[#d0d0d0]'>Description</div>
        <div className='bg-[#fbfbfb] text-[#555] flex justify-center items-center text-sm md:text-base font-bold w-full md:w-[171px] h-[70px] border border-[#d0d0d0]'>Reviews(122)</div>
      </div>
      <div className='flex flex-col gap-6 border border-[#d0d0d0] p-12 md:p-16 pb-20'>
        <p className='text-sm md:text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia modi ab perspiciatis culpa et? Reprehenderit pariatur unde nemo cum natus, magnam placeat ullam iure exercitationem architecto ex nesciunt porro eos tempora quis sit quidem eum cumque obcaecati itaque necessitatibus!
        </p>
        <p className='text-sm md:text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia temporibus id assumenda corrupti incidunt cupiditate ut voluptates culpa, corporis eaque.
        </p>
      </div>
    </div>
  );
}

export default Description;
