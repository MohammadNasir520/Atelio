import React from 'react';

const Button = ({ children, type }) => {
    return (
        <div>
            <button type={type} className={` waiting-for-the-sunrise-regular bg-violet-700 px-4  rounded-xl mt-4 text-white`}>

                {children}
            </button>
        </div>
    );
};

export default Button;