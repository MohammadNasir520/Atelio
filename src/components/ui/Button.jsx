import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollLink } from 'react-scroll';
import { HashLink } from 'react-router-hash-link';

const Button = ({ children, type, bgColor, btnFunction, hashLink }) => {
    return (
        <div>
            {
                hashLink ? <HashLink to={hashLink}>
                    <button
                        onClick={() => { btnFunction ? btnFunction() : "" }}
                        type={type}
                        className={` waiting-for-the-sunrise-regular ${bgColor ? bgColor : "bg-violet-700"} px-4  rounded-2xl mt-2 py-1 text-white`}>

                        {children}
                    </button>
                </HashLink>
                    :
                    <button
                        onClick={() => { btnFunction ? btnFunction() : "" }}
                        type={type}
                        className={` waiting-for-the-sunrise-regular ${bgColor ? bgColor : "bg-violet-700"} px-4  rounded-2xl mt-2 py-1 text-white`}>

                        {children}
                    </button>
            }




        </div >
    );
};

export default Button;