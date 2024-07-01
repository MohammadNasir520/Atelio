import React from 'react';
import Button from '../../components/ui/Button';
import "./WorkPageBanner.css"




const WorkBanner = () => {
    return (
        <div
            className='work-banner   bg-black lg:px-14 '
            style={{
                backgroundImage: 'url(/images/workBgImg1.jpg)',

                backgroundRepeat: 'no-repeat',
                objectFit: "cover",

            }}
        >


            <div className='lg:h-[550px] lg:flex items-center' >

                <div className=' lg:w-4/6 lg:ml-32 px-4 text-white h-[300px]'>
                    <h1 className='  font-thin'>It’s a Place</h1>
                    <h1 className='bricolage-grotesque-baseTextFont  font-bold'>WHERE WE PRIDE <br />

                        OURSELVES ON PROVIDING <br />

                        CREATIVE SOLUTIONS</h1>

                    <Button>View Solutions</Button>
                </div>

            </div>
        </div>
    );
};

export default WorkBanner;
