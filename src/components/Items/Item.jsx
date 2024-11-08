import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Item = ({ item, handleAddToCart }) => {
    const navigate = useNavigate();

    

    const { product_title, price, item_id, product_image } = item;
    const handleShowDetails = () =>{
        navigate(`/item/${item_id}`);
        const itemDetail = document.getElementById('itemDetails');

        console.log(itemDetail);
        itemDetail?.scrollIntoView({'behavior' : 'smooth', 'top': '0'})

    }
    return (
        <div className='rounded-2xl flex flex-col bg-gray-100 shadow-xl border justify-between h-[400px] gap-3 p-5'>
                <img src={product_image} alt={product_title} className='object-contain h-[200px]' />


                <h3 className='text-2xl font-semibold'>{product_title}</h3>
                <h4>Price : {price} $</h4>
                <div>
                    <button onClick={handleShowDetails} className='btn rounded-full bg-blue-900 hover:bg-blue-700 text-white' >View Details</button>
                </div>


        </div>
    );
};

export default Item;