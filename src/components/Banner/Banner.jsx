import React from 'react';
import Button from '../ui/Button';


const Banner = () => {
    return (
        <div
            className='absolute top-0 right-0 left-0 bg-black'
            style={{ backgroundImage: 'url(/images/bgImg.png)', backgroundSize: '750px auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', objectFit: "cover", }}
        >


            <div className='h-[550px] flex items-center' >

                <div className=' w-2/6 lg:ml-32 px-4 text-white'>
                    <h1>We think</h1>
                    <h1>Outside the box</h1>
                    <h1>For Creative Solution</h1>
                    <h1>Solution</h1>
                    <Button>View Solutions</Button>
                </div>

            </div>
        </div>
    );
};

export default Banner;
