import React from 'react';

const PurchasedItems = ({ item }) => {
    const { item_id, product_title, description, product_image, price } = item;
    return (
        <div className='flex items-start justify-between bg-white p-4 rounded-3xl border gap-3' >

            <div className='w-48 h-28 '>
                <img src={product_image} alt='' className="object-contain h-full w-full" />
            </div>
            <div className='flex flex-col justify-between'>
                <h3 className='text-2xl font-semibold'>{product_title}</h3>
                <p className='text-xl font-semibold text-gray-400'>{description}</p>
                <h4 className='text-xl font-bold'>Price : ${price}</h4>

            </div>
        </div>
    );
};

export default PurchasedItems;