import React from 'react';
import bannerImg from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='flex flex-col justify-center text-center w-10/12 mx-auto gap-6 pt-4'>
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
            <div className='border rounded-3xl p-3 h-[500px] w-full'>
                <img className='border rounded-3xl h-full w-full object-fill' src={bannerImg} alt="banner" />

            </div>
        </div>
    );
};

export default Banner;