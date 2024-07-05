import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
        <div className='relative py-20 footeropacity'>


            <div
                style={{
                    backgroundImage: 'url(/images/AtelioLogo.png)',
                    backgroundSize: '440px auto',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,

                    backgroundColor: 'black',
                }}
            ></div>


            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'black',
                    opacity: 0.8,
                    zIndex: -1,
                }}
            ></div>

            <div className=' relative space-y-9 lg:flex items-end lg:w-11/12 text-white justify-between px-9 mx-auto'>
                <div className='lg:w-1/2 flex items-center justify-center lg:justify-start'>
                    <NavLink to={'/'}>
                        <img
                            className='h-10 w-40 lg:h-7 lg:w-24 '
                            src="/images/Atelio Logo 2.png"
                            alt="logo"
                        />
                    </NavLink>
                </div>
                <div className='flex items-end justify-around lg:w-1/2 gap-5 lg:gap-0 '>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/team"}>Team</Link>
                    <Link to={"/service"}>Services</Link>
                    <Link to={"/work"}>Work</Link>
                    <Link to={"/contact"}>Contact</Link>
                </div>
            </div>
            <hr className='hidden lg:block text-white mt-2 font-bold text-2xl' />
        </div>
    );
};

export default Footer;
