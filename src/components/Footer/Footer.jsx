import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='lg:p-8 bg-black'>

            <div className='flex items-end lg:w-11/12 text-white justify-between px-9 mx-auto '>
                <div className='lg:w-1/2'><Link to={"/"}>Atilio</Link></div>
                <div className='h-64  flex  items-end justify-around  lg:w-1/2 gap-5 lg:gap-0'>

                    <Link to={"/"}>Home</Link>
                    <Link to={"/"}>Team</Link>
                    <Link to={"/"}>Services</Link>
                    <Link to={"/"}>Work</Link>
                    <Link to={"/"}>Contact</Link>
                </div>
            </div>
            <hr className='text-white mt-2 font-bold text-2xl' />
        </div>
    );
};

export default Footer;