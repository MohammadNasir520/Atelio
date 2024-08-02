import React from 'react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import Title from '../ui/Title';
import "./BrainsBehind.css"

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
            designation: "Visual Storyteller"
        },
    ]
    return (
        <div className='brains-behind-container lg:h-[400px] p-8'>
            <div>

                <Title boldText={"Brains Behind "} smallText={"The Scene"}></Title>
                <div className='lg:flex justify-around w-full items-center'>
                    {
                        data?.map((datum, i) => {
                            return <div key={i} className='relative mt-5 lg:mt-0 h-[200px]'>
                                <div
                                    data-aos={i == 1 ? "zoom-in-up" : "zoom-in-down"}
                                    key={i}
                                    style={{ backgroundImage: 'url(/images/bgshape.svg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', objectFit: "cover", }}
                                    className='card lg:w-44 flex justify-center relative '
                                >
                                    <img src={datum?.image} className='pic h-40 w-40' alt="" />
                                    <div className='absolute bottom-[-15px]   h-10  w-40 rounded-lg bg-gradient-to-r from-slate-100 via-slate-100 to-slate-100 opacity-[3] blur' />
                                </div>

                                <div className='absolute bottom-0  text-center z-20 w-full'>
                                    <h1 className='text-xl font-bold'>{datum?.name}</h1>
                                    <h1 className='fontFranklin text-violet-500 '>{datum?.designation}</h1>
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