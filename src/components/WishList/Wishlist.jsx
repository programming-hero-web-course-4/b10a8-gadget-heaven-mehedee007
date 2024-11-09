import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import DashboardContainer from '../ReusableComponents/DashboardContainer';

const Wishlist = () => {
    const cartButton = <button className='btn bg-custom-color text-white'>Add to Cart</button>;
    const {wishlist} = useContext(AppContext);
    console.log(wishlist)
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex justify-between items-center'>
                <h3 className='text-xl font-semibold'>Wish</h3>
            </div>
            <div className='flex flex-col gap-3'>
                {wishlist.length ? wishlist.map((item, index) => <DashboardContainer item={item} key={index} button={cartButton}></DashboardContainer>): ''}
            </div>
        </div>
    );
};

export default Wishlist;