import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = ({category, handleCategoryClick}) => {
    const {categoryId,categoryName} = category;
    return (
        <>

                <button className='btn rounded-full' handleCategoryClick={() => handleCategoryClick(categoryId)}>{categoryName}</button>
        </>
    );
};

export default Category;