import React from 'react';
import Marquee from 'react-fast-marquee';

const Brands = () => {

    const images = [
        {
            src: '/images/bgImg.png',
        },
        {
            src: '/images/bgImg.png',
        },
        {
            src: '/images/bgImg.png',
        },
        {
            src: '/images/bgImg.png',
        },
        {
            src: '/images/bgImg.png',
        },
        {
            src: '/images/bgImg.png',
        },
        {
            src: '/images/bgImg.png',
        },
        {
            src: '/images/bgImg.png',
        },
        {
            src: '/images/bgImg.png',
        },
        {
            src: '/images/bgImg.png',
        },
        {
            src: '/images/bgImg.png',
        },
    ]
    return (
        <div className=' my-6'>
            <div className=''>
                <h1 className='text-center'><span className=' font-bold text-2xl'>Trusted by 100+ Brands </span><span className='fontFranklin text-gray-400 '>All over the world</span></h1>
                <Marquee pauseOnHover direction='left'>

                    {images?.map((image, i) => {
                        return <div key={i} className='h-40 w-60 mx-6' >
                            <img src={image.src} className='h-full w-full'></img>
                        </div>
                    })}
                </Marquee>
            </div>
            <div>
                <Marquee pauseOnHover direction='right'>

                    {images?.map((image, i) => {
                        return <div key={i} className='h-40 w-60 mx-6' >
                            <img src={image.src} className='h-full w-full'></img>
                        </div>
                    })}
                </Marquee>
            </div>
        </div>
    );
};

export default Brands;