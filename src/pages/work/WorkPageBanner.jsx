import React from 'react';
import Button from '../../components/ui/Button';
import "./WorkPageBanner.css"




const WorkBanner = () => {
    return (
        <div
            className='work-banner min-h-screen py-2 mt-[-65px] lg:py-5   bg-black  flex items-center '
            style={{
                backgroundImage: 'url(/images/workBgImg1.jpg)',

                backgroundRepeat: 'no-repeat',
                objectFit: "cover",

            }}
        >


            <div className='h-screen flex items-center' >

                <div className=' lg:w-5/6 lg:ml-32 px-4 text-white '>
                    <h1 className='fontFranklin'>It’s a Place</h1>
                    <h1 className='bricolage-grotesque-baseTextFont  font-bold'>WHERE WE PRIDE <br />

                        OURSELVES ON PROVIDING <br />

                        CREATIVE SOLUTIONS</h1>

                    <div className='mt-7'>
                        <Button hashLink={"/service"}>View Services</Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WorkBanner;
