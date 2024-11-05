import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() =>{
        fetch(`categories.json`)
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    console.log(categories);
    return (
        <div>

            <h1>Categories : {categories.length}</h1>
            {
                categories.map(category => <Category key={category.categoryId} category={category}></Category>)
            }
        </div>
    );
};

export default Categories;