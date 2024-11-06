import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    const { product_title, price, item_id, product_image } = item;
    return (
        <div className='bg-white rounded-2xl px-3 pt-2 flex flex-col gap-2'>
            <div className='border w-full rounded-2xl h-1/2'>
                <img src={product_image} alt={product_title} className='object-contain h-full' />
            </div>
            <div>
                <h3 className='text-2xl font-semibold'>{product_title}</h3>
                <h4>Price : {price} $</h4>
                <div>
                    <Link to={`item/${item_id}`} className='btn rounded-full'>View Details</Link>
                </div>
            </div>

        </div>
    );
};

export default Item;