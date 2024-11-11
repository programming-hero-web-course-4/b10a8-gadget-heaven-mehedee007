import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from "../../AppContext";
import Modal from "../Modal/Modal";
import { Helmet } from "react-helmet-async";
const Root = () => {

    const { cartItems } = useContext(AppContext)

    const location = useLocation();
    console.log(location);
    const path = location.pathname;

    return (
        <div className="">
            <Helmet>
                <title>
                    Home || Gadget Heaven
                </title>
            </Helmet>
            {/* <div className="my-5 w-full mx-auto bg-purple-600 border-2 h-3/4 rounded-3xl absolute"> */}

            <div className="ml-5 mr-5 h-3/4">
                <Navbar cartItems={cartItems} path={path}></Navbar>

            </div>

            <div className="ml-5 mr-5">


                <main className="">
                    <Outlet></Outlet>
                    <Modal></Modal>

                </main>


            </div>
            <Footer></Footer>

            <ToastContainer></ToastContainer>

        </div>
    );
};

export default Root;