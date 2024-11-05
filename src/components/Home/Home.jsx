import React from 'react';
import Categories from '../Categories/Categories';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>

            <h1>This is Home</h1>
            <Banner></Banner>
            <Categories></Categories>
            <Items></Items>
        </div>
    );
};

export default Home;