import React from 'react';
import Categories from '../Categories/Categories';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='mt-20 flex flex-col gap-8'>
                <h1 className='text-3xl font-bold text-center'>Explore Cutting-Edge Gadgets</h1>
                <div className='flex lg:md:flex-row flex-col items-start justify-start gap-4'>
                    <Categories></Categories>
                    <Items></Items>
                </div>
            </div>


        </div>
    );
};

export default Home;