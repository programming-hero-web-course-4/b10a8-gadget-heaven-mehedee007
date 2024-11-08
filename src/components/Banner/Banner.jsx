import React from 'react';
import bannerImg from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div>

            <div className='flex flex-col justify-center items-center text-center gap-6 pt-10 pb-48 bg-custom-color rounded-b-2xl'>
                <h1 className='text-4xl font-bold'>
                    Upgrade Your Tech Accessories with
                    <br />
                    Gadget Heaven Accessories
                </h1>
                <p className='text-sm'>
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to
                    <br />
                    the coolest accessories, we have it all!
                </p>
                <div>
                    <button className='btn border rounded-2xl'>Shop Now</button>
                </div>

            </div>
            <div className='border rounded-3xl p-3 lg:h-[563px] h-[220px] lg:w-[1062px] w-[320px] mx-auto -mt-32 object-cover'>
                <img className='border rounded-3xl h-full w-full object-fill' src={bannerImg} alt="banner" />

            </div>
        </div>
    );
};

export default Banner;