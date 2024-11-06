import React from 'react';
import { IoIosHeartEmpty } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import { useLoaderData, useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

const ItemDetails = () => {
    
    const items = useLoaderData();
    const param = useParams();
    const item = items.find(item => item.item_id === parseInt(param.item_id));
    console.log(item)
    const { product_title, price, availability, description, Specification, rating, product_image } = item;
    const star = {
        size: 30,
        value: rating,
        edit: false
      };
    return (
        <div className='flex flex-col justify-center'>
            {/* <h1>This is for item detail : {param.item_id}</h1> */}
            <h2 className='text-3xl font-bold text-center'>Product Details</h2>
            <p className='text-center'>
                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
            <section className='flex items-center justify-stretch  gap-4 bg-white rounded-2xl p-3'>
                <div className='border rounded-2xl w-1/4  flex-1'>
                    <img src={product_image} alt={product_title} className='object-cover'/>
                </div>
                <div className='flex flex-col gap-3 w-3/4'>
                    <h3 className='text-2xl font-semibold'>{item.product_title}</h3>
                    <h4 className='text-xl font-semibold text-gray-600'>Price : $ {item.price}</h4>
                    <div>

                        {
                            availability ? <button class="btn btn-outline btn-success rounded-full">In Stock</button> : <button class="btn btn-active btn-ghost rounded-full">Out of Stock</button>
                        }
                    </div>

                    <p className='text-xl font-semibold text-gray-400'>{description}</p>
                    <h4 className='text-xl font-semibold'>Specifications</h4>
                    {
                        Specification.map((spec, index) => <p className='text-xl font-semibold text-gray-400'>{index + 1}. {spec}</p>)
                    }
                    <h4 className='text-xl font-semibold'>
                        Rating : {rating}
                    </h4>
                    <div>
                        <ReactStars {...star}/>
                    </div>
                    <div className='flex items-stretch gap-3'>
                        <button className='inline-flex items-center gap-2 btn rounded-full font-semibold text-xl'>Add to Cart <IoCartOutline></IoCartOutline></button>
                        <button className='btn btn-circle bg-white'><IoIosHeartEmpty></IoIosHeartEmpty></button>
                    </div>

                </div>

            </section>
        </div>
    );
};

export default ItemDetails;