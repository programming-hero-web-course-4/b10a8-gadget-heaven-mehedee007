import React, { useEffect, useState } from 'react';

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
        </div>
    );
};

export default Categories;