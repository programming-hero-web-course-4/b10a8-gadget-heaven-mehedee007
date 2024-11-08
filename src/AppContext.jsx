import React, { createContext, useEffect, useState } from "react";
import App from "./App";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [itemsList, setItemsList] = useState([]);

    const [wishlist, setWishlist] = useState([]);

    const [cartItems, setCartItems] = useState([]);
    const handleAddToCart = (item) => {
        const newItem = [...cartItems, item];
        setCartItems(newItem)
        return true
    }

    const handleAddToWislist = (wishedIitem) => {
        if (!wishlist.find(item => item.item_id === wishedIitem.item_id)) {
            const newItem = [...cartItems, wishedIitem];
            setWishlist(newItem);
            toast(`Item Added to wishlist`);
        } else {
            toast(`Already Added to the wishlist!`);
        }
    }




    useEffect(() => {
        fetch(`items.json`)
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setItemsList(data);
            })
    }, [])

    useEffect(() => {
        fetch(`categories.json`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const handleCategoryClick = (id) => {
        console.log(id);
        if (id !== 0) {
            const categoryItems = itemsList.filter(item => item.category === id)
            console.log(categoryItems);
            setItems(categoryItems);
            console.log(items)

        } else {
            setItems(itemsList);
        }
    }

    return (
        <AppContext.Provider value={{
            items
            , setItems
            , categories
            , setCategories
            , itemsList
            , setItemsList
            , handleCategoryClick
            , handleAddToCart
            , cartItems
            , handleAddToWislist
            , wishlist
        }}>
            {children}
        </AppContext.Provider>
    )
}
