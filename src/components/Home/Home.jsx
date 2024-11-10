import React from 'react';
import Categories from '../Categories/Categories';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import { useLoaderData } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useContext } from 'react';

import { AppContext } from '../../AppContext';


const Home = () => {
    // const itemsAll = useLoaderData();
    // const [items, setItems] = useState(itemsList);
    // const {items, setItems, itemsList, setItemsList} = useContext(AppContext);
    // setItemsList(itemsAll);
    // setItems(itemsAll);
    // useEffect(()=>{

    // }, [items])

    // const handleCategoryClick = (id) =>{
    //     if(id === 0){
    //         setItems(itemsList);
    //     }else{
    //         const categoryItems = itemsList.filter(item => item.category === id)
    //         setItems(categoryItems);
    //         console.log(items)
    //     }
    // }
    return (
        <div className=''>
            <Banner></Banner>
            <div className='mt-20 flex flex-col gap-8'>
                <h1 className='text-3xl font-bold text-center'>Explore Cutting-Edge Gadgets</h1>
                <div className='flex lg:md:flex-row flex-col items-start justify-start gap-4 w-10/12 mx-auto'>
                    <Categories></Categories>
                    <Items ></Items>
                </div>
            </div>


        </div>
    );
};

export default Home;