import React from 'react';

const Category = ({category}) => {
    const {categoryName} = category;
    return (
        <div>
            <h1>{categoryName}</h1>
        </div>
    );
};

export default Category;