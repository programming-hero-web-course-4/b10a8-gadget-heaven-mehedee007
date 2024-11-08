import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import { useContext, useState } from "react";

import { AppContext } from "../../AppContext";
const Root = () => {
    const [cartItems, setCartItems] = useState([]);
    const handleAddToCart = (item) =>{
        if(cartItems.includes(cart => cart.item_id !== item.item_id)){
            const newItem = [...cartItems, item];
            setCartItems(newItem)
        }
    }

    return (
        <div className="">
            {/* <div className="my-5 w-full mx-auto bg-purple-600 border-2 h-3/4 rounded-3xl absolute"> */}

            <div className=" mt-5 ml-5 mr-5 h-3/4">
                <Navbar cartItems={cartItems}></Navbar>

            </div>

            <div className="ml-5 mr-5">


                <main className="">
                    <Outlet handleAddToCart={handleAddToCart}></Outlet>

                </main>


            </div>
            <Footer></Footer>


        </div>
    );
};

export default Root;