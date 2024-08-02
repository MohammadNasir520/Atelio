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
                        className={` ${bgColor ? "bg-[#0feb87] text-black" : "bg-violet-700 text-white"} px-4  rounded-2xl mt-2 py-1 `}>
                        <h1 className='fontFranklin '>

                            {children}
                        </h1>

                    </button>
                </HashLink>
                    :
                    <button
                        onClick={() => { btnFunction ? btnFunction() : "" }}
                        type={type}
                        className={`fontFranklin  ${bgColor ? "bg-[#0feb87] text-black" : "bg-violet-700 text-white"} px-4  rounded-2xl mt-2 py-1 `}>

                        {children}
                    </button>
            }




        </div >
    );
};

export default Button;