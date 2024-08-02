import React from 'react';
import { HashLink } from 'react-router-hash-link';
import "../Style.Css/Style.css"

const Button = ({ children, type, bgColor, btnFunction, hashLink }) => {
    return (
        <div>
            {
                hashLink ? <HashLink to={hashLink}>
                    <button
                        onClick={() => { btnFunction ? btnFunction() : "" }}
                        type={type}
                        className={` ${bgColor ? "bg-[#0feb87]" : "bg-violet-700"} px-4  rounded-2xl mt-2 py-1 text-white`}>
                        <h1 className='fontFranklin '>

                            {children}
                        </h1>

                    </button>
                </HashLink>
                    :
                    <button
                        onClick={() => { btnFunction ? btnFunction() : "" }}
                        type={type}
                        className={`fontFranklin  ${bgColor ? "bg-[#0feb87]" : "bg-violet-700"} px-4  rounded-2xl mt-2 py-1 text-white`}>

                        {children}
                    </button>
            }




        </div >
    );
};

export default Button;