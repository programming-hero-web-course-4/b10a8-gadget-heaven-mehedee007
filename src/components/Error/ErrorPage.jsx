import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center flex-col'>
            <h1 className='text-red-500 text-xl font-bold'>Error Occured ! Page Not Found </h1> 
            <div>
                <Link to={`/`} className='btn btn-warning'>Go Back to Home Page</Link>
            </div>
        </div>
    );
};

export default ErrorPage;