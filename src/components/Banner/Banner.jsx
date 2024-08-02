import React from 'react';
import Button from '../ui/Button';
import "../Style.Css/Style.css"
import "./Banner.css"


const Banner = () => {
    return (
        <div
            className='bgImg mt-[-70px] lg:py-5 bg-black w-full overflow-hidden'
            style={{
                backgroundImage: 'url(/images/bgImg5.png)',
                backgroundRepeat: 'no-repeat',
                // objectFit: "contain",
            }}
        >


            <div className='h-[550px] md:h-screen flex items-center overflow-x-hidden' >

                <div data-aos="fade-up" className=' lg:w-4/6 lg:ml-32 px-4 text-white h-[300px]'>
                    <h1 className='bricolage-grotesque-baseTextFont  font-thin'>WE THINK</h1>
                    <h1 className='bricolage-grotesque-baseTextFont  font-bold'>OUTSIDE THE BOX</h1>
                    <h1 className='bricolage-grotesque-baseTextFont  font-thin'>FOR CREATIVE</h1>
                    <h1 className='bricolage-grotesque-baseTextFont  font-bold'>SOLUTIONS</h1>
                    <div className='mt-4'>
                        <Button hashLink={"/service"}>View Solutions</Button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;
