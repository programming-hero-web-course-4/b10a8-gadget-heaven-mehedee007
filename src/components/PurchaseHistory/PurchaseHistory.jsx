    import React, { useContext } from 'react';
    import { Helmet } from 'react-helmet-async';
    import { AppContext } from '../../AppContext';
    import PurchasedItems from './PurchasedItems';

    const PurchaseHistory = () => {
        const {purchasedItems} = useContext(AppContext);
        const { item_id, product_title, description, product_image, price } = purchasedItems;
        return (

            <div className=''>
                <Helmet>
                    <title>
                        Purchase History || Gadget Heaven
                    </title>
                </Helmet>
                <h1 className='text-white bg-custom-color pb-24 text-center text-3xl font-bold'>Purchase History</h1>
                <div className='flex flex-col gap-3 -mt-20 w-8/12 mx-auto'>
                    {         
                        purchasedItems.map((item, index) =><PurchasedItems item={item} key={index}></PurchasedItems> )
                    }
                </div>
            </div>
        );
    };

    export default PurchaseHistory;