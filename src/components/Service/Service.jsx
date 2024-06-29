import React from 'react';
import Button from '../ui/Button';

const Service = () => {
    const data = [
        {
            title: "Logos & Marks",
            image: '/images/bgImg2.jpg'
        },
        {
            title: "Logos & Marks",
            image: '/images/bgImg2.jpg'
        },
        {
            title: "Logos & Marks",
            image: '/images/bgImg2.jpg'
        },
        {
            title: "Logos & Marks",
            image: '/images/bgImg2.jpg'
        },
        {
            title: "Logos & Marks",
            image: '/images/bgImg2.jpg'
        },
        {
            title: "Logos & Marks",
            image: '/images/bgImg2.jpg'
        },
    ]
    return (
        <div className=''>
            <h1 className='text-center my-5'>Service We Offer</h1>
            <div className='grid lg:grid-cols-3 mx-auto  space-y-2'>
                {
                    data?.map((datum, i) => {
                        return <div className='h-[280px] w-[250px] mx-auto border'>
                            <img
                                className='h-[200px] w-full'
                                src={datum?.image}

                                alt='serviceImg'></img>
                            <div className=''>
                                <h1 className='my-2'>{datum?.title}</h1>

                                <Button>view All</Button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Service;