import React from 'react';
import CountUp from 'react-countup';
import "./DetailCount.css"

const DetailCount = () => {

    const information = [
        {
            title: "Years Of Service",
            number: 4
        },
        {
            title: "Team Members",
            number: 3
        },
        {
            title: "Happy Client",
            number: 300
        },
        {
            title: "Locations",
            number: 2
        },
    ]
    return (
        <div className='detail-container flex justify-center items-center p-7 md:p-10 lg:px-14  lg:py-28'

            style={{ backgroundImage: 'url(/images/bgImg.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', objectFit: "cover", }}
        >


            <div className='w-full mx-auto grid grid-cols-2 gap-7 lg:flex justify-around' >
                {
                    information?.map((info, i) => {
                        return <div data-aos={i == 1 ? "fade-left" : "fade-right"} key={i} className='details-card bg-white  space-y-14 lg:space-y-20 pt-2 mt-2 lg:mt-0 px-3 '>
                            <h1 className='  text-base smallHeadingFont font-semibold'>{info.title}</h1>
                            <div className='flex gap-1'>
                                <CountUp start={0} duration={10} end={info.number} decimal="," className='bricolage-grotesque-baseTextFont  font-bold '>
                                </CountUp>
                                <p className='bricolage-grotesque-baseTextFont  font-bold '>{i == 0 && "+"}{i == 2 && "+"}</p>
                            </div>
                        </div>
                    })
                }


            </div>
        </div>
    );
};

export default DetailCount;