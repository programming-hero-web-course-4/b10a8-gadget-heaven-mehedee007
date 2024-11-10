import React, { useContext, useEffect, useState } from 'react';
import Item from './Item';
import { useLoaderData, useParams } from 'react-router-dom';
import { AppContext } from '../../AppContext';

const Items = () => {
    // const{items, setItems} = useContext(AppContext)
    const {items} = useContext(AppContext);
    // const items = useLoaderData();
    console.log(items);
    return (
        <div className={`grid ${items.length && 'lg:grid-cols-3'} md:grid-cols-2 grid-cols-1 gap-3`}>
            {
                items.length > 0 ? items.map(item => <Item key={item.item_id} item={item}></Item>): 
                <h1 className='text-4xl font-bold text-custom-color'>No Data Found</h1>
            }
        </div>
    );
};

export default Items;