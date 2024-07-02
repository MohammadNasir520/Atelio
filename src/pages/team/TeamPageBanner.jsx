import React from 'react';
import Button from '../../components/ui/Button';

import "./TeamPageBanner.css"
import "../../components/Style.Css/Style.css"



const TeamBanner = () => {
    return (
        <div
            className='Team-banner  lg:absolute top-0 right-0 left-0 bg-black lg:px-14 '
            style={{
                backgroundImage: 'url(/images/teamBgImg.png)',

                backgroundRepeat: 'no-repeat',
                objectFit: "cover",

            }}
        >


            <div className='lg:h-[650px] lg:flex items-center' >

                <div className=' lg:w-2/6 lg:ml-32  text-white h-[300px]'>
                    <h1 className='bricolage-grotesque-baseTextFont font-thin '>WE ARE THE <span className='font-bold'> BRAINS <br></br>

                        BEHIND</span> YOUR <br></br>

                        CREATIVE <span className='font-bold'>SOLUTIONS</span></h1>


                    <Button>View Solutions</Button>
                </div>

            </div>
        </div>
    );
};

export default TeamBanner;
