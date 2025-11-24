import React from 'react';
import Navbar from './Navbar';

const Banner = () => {      
    return (
        <div className='bg-linear-to-b from-blue-50 to-blue-100 '>
            {/* banner content */}
            <div className='flex items-center justify-center  gap-10 p-10 relative'>
                {/* banner text */}
                <div className='border-2'>
                    <h2 className='text-4xl'>Unlock Your Potential With World-Class Learning</h2>
                    <p>Join millions of learners from around the world already learning on OurPlatform</p>
                    <div>
                        <button className="btn border-2 border-blue-400 rounded-lg font-bold py-4 bg-blue-400 text-lg px-5 text-white hover:bg-blue-700">Try for Free</button>
                        
                    </div>
                </div>
                {/* banner image */}

                <div className='relative top-10'>
                    <div className='w-50 h-50 bg-pink-200 rounded-full z-3 opacity-5 relative top-50 left-60'>
                    </div>
                   <img className='w-full absoulte top' src={"https://i.ibb.co.com/WvPK38Sx/banner-img.png"} alt="Banner Image" />
                </div>
            </div>
        </div>
    );
};

export default Banner;