import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-24 bg-white">
            <div className='w-10/12 mx-auto'>
                
            <div className='flex flex-col justify-center gap-3'>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <h1 className='text-2xl font-black'>Gadget Heaven</h1>
                    <p>
                        Leading the way in cutting-edge technology and innovation.
                    </p>
                </div>
                <hr />
                <div className='footer p-10'>

                    <nav>
                        <h6 className="footer-title">Services</h6>

                        <a className="link link-hover">Product Support</a>
                        <a className="link link-hover">Shipping & Delivery</a>
                        <a className="link link-hover">Returns</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Careers</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;