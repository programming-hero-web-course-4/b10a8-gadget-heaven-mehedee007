import React, { createContext, useEffect, useState } from "react";
import App from "./App";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [itemsList, setItemsList] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    const [wishlist, setWishlist] = useState([]);

    const [cartItems, setCartItems] = useState([]);
    const handleAddToCart = (item) => {
        const newItem = [...cartItems, item];
        setCartItems(newItem);
        const newCost = totalCost + item.price;
        setTotalCost(newCost);
        return true;
    }

    const handleAddToWislist = (wishedIitem) => {
        if (!wishlist.find(item => item.item_id === wishedIitem.item_id)) {
            const newItem = [...wishlist, wishedIitem];
            setWishlist(newItem);
            toast(`Item Added to wishlist`);
        } else {
            toast(`Already Added to the wishlist!`);
        }
    }

    // const navigate = useNavigate();

    const handlePurchaseItems = () =>{
        setCartItems([]);
        setTotalCost(0);
        // navigate(`/`);
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

    const handleSorByPriceDesc = () =>{
        const priceDescItems = [...cartItems].sort((a, b)=>parseFloat(b.price) - parseFloat(a.price));
        setCartItems(priceDescItems);

        console.log('context',cartItems);
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
            ,totalCost
            ,setCartItems
            ,handleSorByPriceDesc
            ,handlePurchaseItems
        }}>
            {children}
        </AppContext.Provider>
    )
}
