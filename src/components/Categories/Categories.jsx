import React, { useEffect, useState } from 'react';
import Category from './Category';
import { NavLink } from 'react-router-dom';

const Categories = ({handleCategoryClick}) => {

    const [categories, setCategories] = useState([]);
    useEffect(() =>{
        fetch(`categories.json`)
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])



    console.log(categories);
    return (
        <div className='bg-white rounded-2xl p-4'>
            
            {/* <h1>Categories : {categories.length}</h1> */}
            <div className='flex lg:flex-col flex-row flex-wrap gap-3'>

                <button className='btn rounded-full' onClick={() => handleCategoryClick(0)}>All Product</button>
            {
                categories.map(category => <Category key={category.categoryId} category={category} handleCategoryClick={handleCategoryClick}></Category>)
            }
            </div>
            
        </div>
    );
};

export default Categories;