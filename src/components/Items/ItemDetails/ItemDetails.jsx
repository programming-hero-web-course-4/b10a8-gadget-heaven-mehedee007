import React, { useContext, useEffect } from 'react';
import { IoIosHeartEmpty } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import { useLoaderData, useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

import { AppContext } from '../../../AppContext';
import  { toast } from 'react-toastify';

const ItemDetails = () => {

    const items = useLoaderData();
    const {handleAddToCart, wishlist, handleAddToWislist} = useContext(AppContext);

    const param = useParams();
    const item = items.find(item => item.item_id === parseInt(param.item_id));

    const wishListItem = wishlist.find(item => item.item_id === parseInt(param.item_id));
    const { product_title, price, availability, description, Specification, rating, product_image } = item;
    const star = {
        size: 30,
        value: rating,
        edit: false
    };
    // useEffect(()=>{
        
    // },[wishlist])

    const handleCart = (item) =>{
        if(handleAddToCart(item)){
            toast(`Item Added to the Cart!`);
        }else{
            toast(`Item Already Added to the Cart!`);
        }
    }

    return (
        <div className='flex flex-col justify-center'>
            {/* <h1>This is for item detail : {param.item_id}</h1> */}

            <section className='flex lg:md:flex-row flex-col items-strech justify-stretch  gap-4 bg-white rounded-2xl p-3 lg:w-8/12 w-10/12 mx-auto' id='itemDetails'>
                <div className='border rounded-2xl  flex-1'>
                    <img src={product_image} alt={product_title} className='object-contain h-full' />
                </div>
                <div className='flex flex-col gap-3 w-3/4'>
                    <h3 className='text-2xl font-semibold'>{product_title}</h3>
                    <h4 className='text-xl font-semibold text-gray-600'>Price : $ {price}</h4>
                    <div>

                        {
                            availability ? <button class="btn btn-outline btn-success rounded-full">In Stock</button> : <button class="btn btn-active btn-ghost rounded-full">Out of Stock</button>
                        }
                    </div>

                    <p className='text-xl font-semibold text-gray-400'>{description}</p>
                    <h4 className='text-xl font-semibold'>Specifications</h4>
                    {
                        Specification.map((spec, index) => <p className='text-xl font-semibold text-gray-400' key={index}>{index + 1}. {spec}</p>)
                    }
                    <h4 className='text-xl font-semibold'>
                        Rating : {rating}
                    </h4>
                    <div>
                        <ReactStars {...star} />
                    </div>
                    <div className='flex items-center gap-3'>
                        <button className='inline-flex items-center gap-2 btn rounded-full font-semibold text-xl bg-custom-color' onClick={() =>handleCart(item)}>Add to Cart <IoCartOutline></IoCartOutline></button>
                        <button className={`btn btn-circle bg-white`} disabled={wishListItem ? true: false} onClick={() => handleAddToWislist(item)}><IoIosHeartEmpty></IoIosHeartEmpty></button>
                    </div>

                </div>

            </section>
        </div>
    );
};

export default ItemDetails;