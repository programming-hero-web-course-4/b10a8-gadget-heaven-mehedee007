import React from 'react';
import Categories from '../Categories/Categories';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import { useLoaderData } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
    const itemsList = useLoaderData();
    const [items, setItems] = useState(itemsList);

    useEffect(()=>{

    }, [items])

    const handleCategoryClick = (id) =>{
        if(id === 0){
            setItems(itemsList);
        }else{
            const categoryItems = itemsList.filter(item => item.category === id)
            setItems(categoryItems);
            console.log(items)
        }
    }
    return (
        <div>
            <Banner></Banner>
            <div className='mt-20 flex flex-col gap-8'>
                <h1 className='text-3xl font-bold text-center'>Explore Cutting-Edge Gadgets</h1>
                <div className='flex lg:md:flex-row flex-col items-start justify-start gap-4'>
                    <Categories handleCategoryClick={handleCategoryClick}></Categories>
                    <Items items={items}></Items>
                </div>
            </div>


        </div>
    );
};

export default Home;