import React, { useEffect, useState } from 'react';
import Category from './Category';
import { NavLink } from 'react-router-dom';

import { AppContext } from '../../AppContext';
import { useContext } from 'react';

const Categories = () => {

    // const [categories, setCategories] = useState([]);
    // useEffect(() =>{
    //     fetch(`categories.json`)
    //     .then(res => res.json())
    //     .then(data => setCategories(data))
    // },[])

    const [activeButton, setActiveButton] = useState('0');
    console.log(activeButton);
    

    const {items, setItems, handleCategoryClick, categories} = useContext(AppContext);


    // console.log(categories);
    return (
        <div className='bg-white rounded-2xl p-4'>
            
            {/* <h1>Categories : {categories.length}</h1> */}
            <div className='flex lg:flex-col flex-row flex-wrap gap-3'>

                <button className={`btn rounded-full active:bg-custom-color ${activeButton == '0' ? 'bg-custom-color': 'bg-gray-100'}}`} onClick={() => handleCategoryClick(0)}>All Product</button>
            {
                categories.map(category => <Category key={category.categoryId} category={category} handleCategoryClick={handleCategoryClick}></Category>)
            }
            </div>
            
        </div>
    );
};

export default Categories;