import React from 'react'
import hand from './assets/hand_icon.png'
import arrow from './assets/arrow.png'
import heroimg from './assets/heroimg3.png'



const Hero = () => {
    return (
        <div className='flex flex-row w-full gradeint'>
            <div className='flex flex-col justify-center gap-[20px] pl-[180px] w-[60%]'>
                <div>
                <h2 className='text-white text-[26px] font-semibold'>New Arrivals Only</h2>
                </div>
                <div className='flex flex-col leading-tight'>
                    <div className='flex items-center gap-[20px]'>
                        <p className='text-[100px] font-bold text-white'>new</p>
                        <img className='w-[105px]' src={hand} alt="" />
                    </div>
                    <span className='text-[80px] font-bold text-white'>collections</span><br />
                    <span className='text-[80px] font-bold text-white'>for everyone</span>
                </div>
                <div >
                    <button className='flex justify-center items-center gap-[15px] w-[300px] h-[70px] rounded-full text-white border-black bg-[#D2042D] hover:bg-black mt-[30px] text-[18px] font-large'>Latest Conenction 
                        <div>
                            <img className='' src={arrow} alt="" />
                        </div>
                    </button>
                </div>

            </div>


            <div className='hero-right'>
                <img src={heroimg} alt="" />
                
            </div>
            

            
        </div>
    )
}

export default Hero
