import React from 'react';
import Button from '../../components/ui/Button';

import "./TeamPageBanner.css"
import "../../components/Style.Css/Style.css"

import teamBannerImage from "/images/teamBg3.png"




const TeamBanner = () => {
    return (
        <div
            className='Team-banner h-screen mt-[-65px] lg:py-5 bg-black px-2  lg:px-14 '
            style={{
                backgroundImage: `url(${teamBannerImage})`,

                backgroundRepeat: 'no-repeat',
                objectFit: "cover",

            }}
        >


            <div className='h-screen flex items-center' >

                <div data-aos="fade-up" className=' lg:w-4/6 lg:ml-28  text-white h-[300px]'>
                    <h1 className='bricolage-grotesque-baseTextFont font-thin '>WE ARE THE <span className='font-bold'> BRAINS <br></br>

                        BEHIND</span> YOUR <br></br>

                        CREATIVE <span className='font-bold'>SOLUTIONS</span></h1>


                    <div className='mt-6'>
                        <Button bgColor={"green"} hashLink={'/service'}>View Solutions</Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TeamBanner;
