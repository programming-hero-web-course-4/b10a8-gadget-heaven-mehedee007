import React, { useContext, useEffect, useState } from 'react';
import Item from './Item';
import { useLoaderData, useParams } from 'react-router-dom';
import { AppContext } from '../../AppContext';

const Items = ({handleAddToCart}) => {
    // const{items, setItems} = useContext(AppContext)
    const {items} = useContext(AppContext);
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
            {
                items.map(item => <Item key={item.item_id} item={item} handleAddToCart={handleAddToCart}></Item>)
            }
        </div>
    );
};

export default Items;