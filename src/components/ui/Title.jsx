import React from 'react';
import "../Style.Css/Style.css"

const Title = ({ boldText, smallText }) => {
    return (
        <div>
            <h1 className='smallHeadingFont my-5 text-center'><span className='text-xl font-bold'>{boldText}</span > <span className='fontFranklin text-gray-400 '>{smallText}</span></h1>
        </div>
    );
};

export default Title;