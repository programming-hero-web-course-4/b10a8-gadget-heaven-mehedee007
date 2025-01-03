import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../AppContext';
import { VscListOrdered } from 'react-icons/vsc';
import DashboardContainer from '../ReusableComponents/DashboardContainer';

const Cart = () => {
    const { cartItems, totalCost, setCartItems, handleSorByPriceDesc, handlePurchaseItems } = useContext(AppContext);
    useEffect(() => {
        console.log('Updated cartItems:', cartItems);
    }, [cartItems])


    console.log(cartItems);

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex lg:flex-row flex-col lg:justify-between items-center'>
                <h3 className='text-xl font-semibold'>Cart</h3>
                <div className='flex lg:flex-row flex-col items-center gap-3'>
                    <h3 className='text-xl font-semibold'>Total Cost: {totalCost}</h3>
                    <button className='btn border-custom-color text-custom-color rounded-full' onClick={handleSorByPriceDesc}>Sort By Price <VscListOrdered></VscListOrdered></button>
                    <button className={`btn bg-custom-color rounded-full`} disabled={totalCost === 0 && true} onClick={()=>document.getElementById('purchaseModal').showModal()}>Purchase</button>
                </div>
            </div>

            <div className='flex flex-col gap-3'>
                 {cartItems.length ? cartItems.map((item, index) => <DashboardContainer item={item} key={index}></DashboardContainer>): ''}
            </div>
            
        </div>
    );
};

export default Cart;