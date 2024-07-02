import React from 'react';
import Button from '../ui/Button';

const Service = ({ btnFunction, hashLink, setCategory }) => {
    const Categories = [
        {
            title: "Logos & Marks",
            category: "logos&marks",
            image: '/images/Thumbnails/Logo.jpg'
        },
        {
            title: "Product Packaging",
            category: "productPackaging",
            image: '/images/Thumbnails/packaging.jpg'
        },
        {
            title: "Visual Identity",
            category: "visualIdentity",
            image: '/images/Thumbnails/visual identity.jpg'
        },
        {
            title: "Social Media Post",
            category: "socialMediaPost",
            image: '/images/Thumbnails/social medias.jpg'
        },
        {
            title: "Banners Or Covers",
            category: "bannersOrCovers",
            image: '/images/Thumbnails/banners.jpg'
        },
        {
            title: "Bespoke Designs",
            category: "bespokeDesigns",
            image: '/images/Thumbnails/bespoke.jpg'
        },
    ]
    return (
        <div className='my-9'>
            <h1 className='text-center my-5'><span className='font-bold'>Services</span > <span className='fontFranklin text-gray-400 '> We Offer</span></h1>
            <div className='grid lg:grid-cols-3 mx-auto  space-y-4'>
                {
                    Categories?.map((category, i) => {
                        return <div key={i} className='h-[280px] w-[250px] mx-auto '>
                            <img
                                className='h-[180px] w-full'
                                src={category?.image}

                                alt='serviceImg'>

                            </img>
                            <div onClick={() => setCategory(category?.category)} className=''>
                                <h1 className='my-t font-bold text-2xl'>{category?.title}</h1>


                                <Button btnFunction={btnFunction} hashLink={hashLink}>view All</Button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Service;