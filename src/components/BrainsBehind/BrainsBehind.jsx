import React from 'react';

const BrainsBehind = () => {

    const data = [
        {
            image: "/images/Asif Zaman-01.png",
            name: "MD ASIF ZAMAN",
            designation: "Creative Director"
        },
        {
            image: "/images/Tasnim-01.png",
            name: "TASNIM SULTANA",
            designation: "Brand Architect"
        },
        {
            image: "/images/pic-removebg-preview.png",
            name: "SAURAV HALDER",
            designation: "Visual Storyteer"
        },
    ]
    return (
        <div className='h-[400px] p-8'>
            <div>

                <h1 className='text-center my-4'> brains behind <span>The Scene</span></h1>
                <div className='flex justify-around w-full items-center'>
                    {
                        data?.map((datum, i) => {
                            return <div key={i} className='relative'>
                                <div
                                    key={i}
                                    style={{ backgroundImage: 'url(/images/bgshape.svg)', backgroundSize: '440px auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', objectFit: "cover", }}
                                    className='w-44'
                                >
                                    <img src={datum?.image} className='h-40 w-40' alt="" />
                                </div>
                                <div className='shadow-2xl bg-transparent  text-center bottom-3'>
                                    <h1 >{datum?.name}</h1>
                                    <h1>{datum?.designation}</h1>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>

        </div>
    );
};

export default BrainsBehind;