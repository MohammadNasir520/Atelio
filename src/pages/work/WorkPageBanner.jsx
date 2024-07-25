import React from 'react';
import Button from '../../components/ui/Button';
import "./WorkPageBanner.css"




const WorkBanner = () => {
    return (
        <div
            className='work-banner h-screen  mt-[-65px] p-0 lg:py-5   bg-black  flex items-center '
            style={{
                backgroundImage: 'url(/images/workBgImg1.jpg)',

                backgroundRepeat: 'no-repeat',
                objectFit: "cover",

            }}
        >


            <div className='h-[500px] lg:h-screen flex items-center' >

                <div data-aos="fade-up" className=' lg:w-5/6 lg:ml-32 px-4 text-white '>
                    <h1 className='fontFranklin'>It’s a Place</h1>
                    <h1 className='smallHeadingFont text-2xl  lg:text-5xl  font-bold lg:mt-5'>WHERE WE PRIDE  </h1>
                    <h1 className='smallHeadingFont text-2xl  lg:text-5xl  font-bold lg:mt-5'>  OURSELVES ON PROVIDING

                    </h1>
                    <h1 className='smallHeadingFont text-2xl  lg:text-5xl  font-bold lg:mt-5'> CREATIVE SOLUTIONS  </h1>

                    <div className='mt-7'>
                        <Button hashLink={"/service"}>View Services</Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WorkBanner;
