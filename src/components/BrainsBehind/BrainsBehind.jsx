import React from 'react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import Title from '../ui/Title';

import asifZaman from "/images/Asif Zaman-01.png"
import tasnimSultana from "/images/Tasnim-01.png"
import souravHalder from "/images/pic-removebg-preview.png"

const BrainsBehind = () => {

    const data = [
        {
            image: asifZaman,
            name: "MD ASIF ZAMAN",
            designation: "Creative Director"
        },
        {
            image: tasnimSultana,
            name: "TASNIM SULTANA",
            designation: "Brand Architect"
        },
        {
            image: souravHalder,
            name: "SAURAV HALDER",
            designation: "Visual Storyteer"
        },
    ]
    return (
        <div className='lg:h-[400px] p-8'>
            <div>

                <Title boldText={"Brains Behind "} smallText={"The Scene"}></Title>
                <div className='lg:flex justify-around w-full items-center'>
                    {
                        data?.map((datum, i) => {
                            return <div key={i} className='relative mt-5 lg:mt-0 '>
                                <div
                                    key={i}
                                    style={{ backgroundImage: 'url(/images/bgshape.svg)', backgroundSize: '440px auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', objectFit: "cover", }}
                                    className='lg:w-44 flex justify-center'
                                >
                                    <img src={datum?.image} className='h-40 w-40' alt="" />
                                </div>
                                <div className=' bg-transparent  text-center bottom-3'>
                                    <h1 className='text-xl font-bold'>{datum?.name}</h1>
                                    <h1 className='fontFranklin text-fuchsia-700 '>{datum?.designation}</h1>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className='flex justify-center w-full mt-2'>
                <Link>  <Button hashLink={"/contact"} bgColor={"bg-green-600"}>Contact Us</Button></Link>
            </div>
        </div>
    );
};

export default BrainsBehind;