import React from 'react';
import Button from '../ui/Button';
import Title from '../ui/Title';

import logosMarks from '/images/Thumbnails/Logo.jpg'
import packaging from '/images/Thumbnails/packaging.jpg'
import visualIdentity from '/images/Thumbnails/visual identity.jpg'
import socialMedia from '/images/Thumbnails/social medias.jpg'
import banners from '/images/Thumbnails/banners.jpg'
import bespoke from '/images/Thumbnails/bespoke.jpg'

const Service = ({ btnFunction, hashLink, setCategory }) => {
    const Categories = [
        {
            title: "Logos & Marks",
            category: "logos&marks",
            image: logosMarks
        },
        {
            title: "Product Packaging",
            category: "productPackaging",
            image: packaging
        },
        {
            title: "Visual Identity",
            category: "visualIdentity",
            image: visualIdentity
        },
        {
            title: "Social Media Post",
            category: "socialMediaPost",
            image: socialMedia
        },
        {
            title: "Banners Or Covers",
            category: "bannersOrCovers",
            image: banners
        },
        {
            title: "Bespoke Designs",
            category: "bespokeDesigns",
            image: bespoke
        },
    ]
    return (
        <div className='my-9 bg-white'>
            <div className='w-full'>

                <Title boldText={"Services"} smallText={" We Offer"}></Title>
            </div>
            <div className='grid  lg:grid-cols-3 mx-auto px-3 '>
                {
                    Categories?.map((category, i) => {
                        return <div key={i} className='h-[300px] w-full lg:w-[450px]   flex items-center flex-col '>
                            <div className='lg:w-[320px] ' >


                                <img
                                    className='h-[210px] w-full'
                                    src={category?.image}

                                    alt='serviceImg'>

                                </img>
                                <div onClick={() => setCategory(category?.category)} className=''>
                                    <h1 className=' font-bold text-2xl'>{category?.title}</h1>


                                    <Button btnFunction={btnFunction} hashLink={hashLink} bgColor={i > 2 && "bg-green-600"}>view All</Button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Service;