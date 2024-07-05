import React from 'react';
import Button from '../ui/Button';
import "../Style.Css/Style.css"


const Banner = () => {
    return (
        <div
            className=' mt-[-65px] lg:py-5 bg-black'
            style={{ backgroundImage: 'url(/images/bgImg4.png)', backgroundSize: '1000px auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'right -200px center', objectFit: "cover", }}
        >


            <div className='h-screen flex items-center' >

                <div className=' lg:w-4/6 lg:ml-32 px-4 text-white h-[300px]'>
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
