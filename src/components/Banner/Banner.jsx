import React from 'react';
import Button from '../ui/Button';
import "./Banner.css"


const Banner = () => {
    return (
        <div
            className='absolute top-0 right-0 left-0 bg-black'
            style={{ backgroundImage: 'url(/images/bgImg.png)', backgroundSize: '750px auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', objectFit: "cover", }}
        >


            <div className='h-[550px] flex items-center' >

                <div className=' lg:w-2/6 lg:ml-32 px-4 text-white h-[300px]'>
                    <h1 className='bricolage-grotesque-baseTextFont  font-thin'>WE THINK</h1>
                    <h1 className='bricolage-grotesque-baseTextFont  font-bold'>OUTSIDE THE BOX</h1>
                    <h1 className='bricolage-grotesque-baseTextFont  font-thin'>FOR CREATIVE</h1>
                    <h1 className='bricolage-grotesque-baseTextFont  font-bold'>SOLUTIONS</h1>
                    <Button>View Solutions</Button>
                </div>

            </div>
        </div>
    );
};

export default Banner;
