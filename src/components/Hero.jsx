import React from 'react';
import hand from './assets/hand_icon.png';
import arrow from './assets/arrow.png';
import heroimg from './assets/heroimg3.png';

const Hero = () => {
    return (
        <div className='gradeint flex flex-col md:flex-row w-full'>
            {/* Left Side */}
            <div className='flex flex-col justify-center gap-5 md:pl-36 lg:pl-48 w-full md:w-3/5 px-5'>
                <h2 className='text-white text-[22px] md:text-[26px] font-semibold'>New Arrivals Only</h2>
                <div className='flex flex-col leading-tight'>
                    <div className='flex items-center gap-5'>
                        <p className='text-[60px] md:text-[80px] lg:text-[100px] font-bold text-white'>new</p>
                        <img className='w-[60px] md:w-[105px]' src={hand} alt="Hand Icon" />
                    </div>
                    <span className='text-[40px] md:text-[60px] lg:text-[80px] font-bold text-white'>collections</span>
                    <span className='text-[40px] md:text-[60px] lg:text-[80px] font-bold text-white'>for everyone</span>
                </div>
                <button className='flex justify-center items-center gap-[15px] w-[300px] h-[70px] rounded-full text-white border-black bg-[#D2042D] hover:bg-black mt-[30px] text-[18px] font-large'>Latest Conenction 
                        <div>
                            <img className='' src={arrow} alt="" />
                        </div>
                    </button>
            </div>

            {/* Right Side - Hero Image */}
            <div className='hero-right w-full md:w-2/5 flex justify-center'>
                <img className='w-full h-auto max-w-[600px]' src={heroimg} alt="Hero" />
            </div>

        </div>
    );
};

export default Hero;
