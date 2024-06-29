import React from 'react';

const DetailCount = () => {

    const information = [
        {
            title: "years of service",
            number: "4+"
        },
        {
            title: "Team Members",
            number: "3"
        },
        {
            title: "Happy Client",
            number: "300+"
        },
        {
            title: "Locations",
            number: "2"
        },
    ]
    return (
        <div className='lg:h-[300px] flex justify-center items-center p-10'

            style={{ backgroundImage: 'url(/images/bgImg.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', objectFit: "cover", }}
        >


            <div className='w-2/3 mx-auto lg:flex justify-around' >
                {
                    information?.map((info, i) => {
                        return <div className='h-36 w-32 bg-white space-y-10 pt-2 mt-2 lg:mt-0 px-3 '>
                            <h1 className='text-sm'>{info.title}</h1>
                            <h1 className='text-3xl font-bold'>{info.number}</h1>
                        </div>
                    })
                }


            </div>
        </div>
    );
};

export default DetailCount;