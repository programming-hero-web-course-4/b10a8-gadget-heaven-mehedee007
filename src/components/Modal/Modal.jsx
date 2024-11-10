import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { FaCheckCircle } from 'react-icons/fa';
import sucessIcon from '../../../src/assets/Group.png'
import { useNavigate } from 'react-router-dom';

const Modal = () => {
    const {totalCost, handlePurchaseItems} = useContext(AppContext);

    const navigate = useNavigate();

    const handleClose = () =>{
        handlePurchaseItems();
        navigate('/');
    }
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('purchaseModal').showModal()}>open modal</button> */}
            <dialog id="purchaseModal" className="modal">
                <div className="modal-box flex flex-col items-center">
                    {/* <FaCheckCircle className="text-4xl font-bold text-green-700"></FaCheckCircle> */}
                    <div>
                        <img src={sucessIcon} alt="" />
                    </div>
                    <h3 className="font-bold text-lg">Payment Successful!</h3>
                    <p className="py-4">Thanks for Purchasing.</p>
                    <p className="py-4">Total : {totalCost}</p>
                    <div className="modal-action flex justify-center items-center">
                        <form method="dialog">
                            <button className="btn" onClick={handleClose}>Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;