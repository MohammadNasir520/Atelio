import React from 'react';
import Marquee from 'react-fast-marquee';
import Title from '../ui/Title';

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
        <div className='mb-12 '>
            <div className='mb-12'>
                <Title boldText={"Trusted by 100+ Brands"} smallText={"All Over the World"}></Title>
                <Marquee pauseOnHover direction='left'>

                    {images?.map((image, i) => {
                        return <div key={i} className='h-44 w-64 mx-6' >
                            <img src={image.src} className='h-full w-full'></img>
                        </div>
                    })}
                </Marquee>
            </div>
            <div>
                <Marquee pauseOnHover direction='right'>

                    {images?.map((image, i) => {
                        return <div key={i} className='h-44 w-64 mx-6' >
                            <img src={image.src} className='h-full w-full'></img>
                        </div>
                    })}
                </Marquee>
            </div>
        </div>
    );
};

export default Brands;