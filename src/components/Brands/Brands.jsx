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
        <div className='lg:h-[500px] space-y-8'>
            <h1 className='text-center'>Trusted by 100+ Brands <span>All over the world</span></h1>
            <div>
                <Marquee direction='left'>

                    {images?.map((image, i) => {
                        return <div key={i} className='h-40 w-40 mx-6' >
                            <img src={image.src}></img>
                        </div>
                    })}
                </Marquee>
            </div>
            <div>
                <Marquee direction='right'>

                    {images?.map((image, i) => {
                        return <div key={i} className='h-40 w-40 mx-6' >
                            <img src={image.src}></img>
                        </div>
                    })}
                </Marquee>
            </div>
        </div>
    );
};

export default Brands;