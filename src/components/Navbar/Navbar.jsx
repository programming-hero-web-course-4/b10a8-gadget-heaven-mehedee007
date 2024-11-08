import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

import { AppContext } from '../../AppContext';

// import './Navbar.css'
const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/stat'>Statistics</NavLink></li>
    <li><NavLink to='/dash'>Dashboard</NavLink></li>
</>;
const Navbar = ({path}) => {
    const { cartItems, wishlist } = useContext(AppContext);
    console.log(location)
    return (
        <div className=''>
            <div className={`navbar p-2  mx-auto rounded-t-2xl ${path === '/'  ? 'bg-custom-color' :  'text-black'}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <NavLink to='/' className="btn btn-ghost text-xl">Gadeget Heaven</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 lg:flex gap-2">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end lg:flex gap-2">
                    <button className='btn btn-circle'><IoCartOutline /> {cartItems.length ? cartItems.length : 0}</button>
                    <button className='btn btn-circle'>{wishlist.length ? <IoIosHeart></IoIosHeart> : <IoIosHeartEmpty />} {wishlist.length ? wishlist.length : 0}</button>

                </div>
            </div>
        </div>

    );
};

export default Navbar;