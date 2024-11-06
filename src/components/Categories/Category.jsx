import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = ({category}) => {
    const {categoryId,categoryName} = category;
    return (
        <>

                <NavLink className='btn rounded-full' to={`category/${categoryId}`}>{categoryName}</NavLink>
        </>
    );
};

export default Category;