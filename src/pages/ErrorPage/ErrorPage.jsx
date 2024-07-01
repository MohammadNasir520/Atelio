import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='grid place-items-center h-screen'>
            <div>
                <h1>page not found </h1>
                back to <Link className='text-blue-600' to={'/'}>Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;