import React, { useEffect, useState } from 'react';
import Item from './Item';
import { useLoaderData, useParams } from 'react-router-dom';

const Items = () => {
    const itemsList = useLoaderData();
    const [items, setItems] = useState(itemsList);

    const param = useParams();

    useEffect(()=>{
        param.categoryId 
    }, [items])
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
            {
                items.map(item => <Item key={item.item_id} item={item}></Item>)
            }
        </div>
    );
};

export default Items;