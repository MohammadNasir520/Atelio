import React from 'react';

const Button = ({ children, type, bgColor }) => {
    return (
        <div>
            <button type={type} className={` waiting-for-the-sunrise-regular ${bgColor ? bgColor : "bg-violet-700"} px-4  rounded-2xl mt-2 py-1 text-white`}>

                {children}
            </button>
        </div>
    );
};

export default Button;