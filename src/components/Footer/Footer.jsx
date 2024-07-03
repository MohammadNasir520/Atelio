import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='lg:p-8 bg-black'>

            <div className='flex items-end lg:w-11/12 text-white justify-between px-9 mx-auto '>
                <div className='lg:w-1/2'>   <NavLink className="" to={'/'}>
                    <img
                        className='h-7 w-24 '
                        src="/images/Atelio Logo 2.png"

                        alt="" />
                </NavLink></div>
                <div className='h-64  flex  items-end justify-around  lg:w-1/2 gap-5 lg:gap-0'>

                    <Link to={"/"}>Home</Link>
                    <Link to={"/team"}>Team</Link>
                    <Link to={"/service"}>Services</Link>
                    <Link to={"/work"}>Work</Link>
                    <Link to={"/contact"}>Contact</Link>
                </div>
            </div>
            <hr className='text-white mt-2 font-bold text-2xl' />
        </div>
    );
};

export default Footer;