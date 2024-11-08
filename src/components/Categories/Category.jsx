import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AppContext } from '../../AppContext';

const Category = ({category}) => {
    const {categoryId,categoryName} = category;
    const {handleCategoryClick} = useContext(AppContext);
    return (
        <>

                <button className='btn rounded-full bg-gray-100 active:bg-custom-color' onClick={() => handleCategoryClick(categoryId)}>{categoryName}</button>
        </>
    );
};

export default Category;