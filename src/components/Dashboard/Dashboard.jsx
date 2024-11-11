import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Wishlist from '../WishList/Wishlist';
import Cart from '../Cart/Cart';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState();

    const navigate = useNavigate();
    const handleActiveTab = (tab) => {
        setActiveTab(tab);
    }
    return (
        <div className=''>
            <Helmet>
                <title>Dashboard || Gadget Heaven</title>
            </Helmet>
            <div className='bg-custom-color pb-32'>

            <div className='w-10/12 mx-auto text-white flex flex-col items-center text-center p-10 gap-4 '>
                <h1 className='text-2xl font-bold'>Dashboard</h1>
                <p className='text-sm'>
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>

                {/* <div className='inline-flex gap-3 justify-between'>
                    <div>
                        <button className={`btn bg-[#9538E2] border rounded-full`}> Cart</button>

                    </div>
                    <div>
                        <button className={`btn bg-[#9538E2] border rounded-full`}> WishList</button>
                    </div>

                </div> */}



            </div>
            </div>

            <div>
                <Tabs>
                    <TabList className={`flex gap-3 justify-center -mt-28`}>
                        <Tab className={`btn bg-custom-color active:rounded-full rounded-full`} >Cart</Tab>
                        <Tab className={`btn bg-custom-color active:bg-white border active:rounded-full`}>Wishlist</Tab>
                    </TabList>

                    <TabPanel className={`mt-28`}>
                        <Cart></Cart>
                    </TabPanel>
                    <TabPanel>
                        <Wishlist></Wishlist>
                    </TabPanel>
                </Tabs>
            </div>


        </div>
    );
};

export default Dashboard;