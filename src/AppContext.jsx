import React, {createContext, useEffect, useState} from "react";
import App from "./App";

export const AppContext = createContext();

export const AppProvider = ({children}) =>{
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [itemsList, setItemsList] = useState([]);

    useEffect(()=>{
        fetch(`items.json`)
        .then(res => res.json())
        .then(data => {
            setItems(data)
            setItemsList(data);
        })
    },[])

    useEffect(()=>{
        fetch(`categories.json`)
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    const handleCategoryClick = (id) =>{
        console.log(id);
        if(id !== 0){
            const categoryItems = itemsList.filter(item => item.category === id)
            console.log(categoryItems);
            setItems(categoryItems);
            console.log(items)
            
        }else{
            setItems(itemsList);
        }
    }

    return(
        <AppContext.Provider value={{items, setItems, categories, setCategories, itemsList, setItemsList, handleCategoryClick}}>
            {children}
        </AppContext.Provider>
    )
}
