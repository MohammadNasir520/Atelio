import React from 'react';

const Reviews = () => {
    const data = [
        {
            name: "Jane Doe",
            designation: "CEO",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati tempora aut velit assumenda quos fuga blanditiis deleniti quisquam nobis itaque adip  Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "Jane Doe",
            designation: "CEO",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati tempora aut velit assumenda quos fuga blanditiis deleniti quisquam nobis itaque adip  Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "Jane Doe",
            designation: "CEO",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati tempora aut velit assumenda quos fuga blanditiis deleniti quisquam nobis itaque adip  Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
    ];

    return (

        <div
            className='lg:pt-10 bg-black'
            style={{ backgroundImage: 'url(/images/reviewBg.png)', backgroundSize: '600px auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', }}
        >
            <h1 className='text-white text-center'><span className='font-bold'>What They Say </span>About Us</h1>

            <div className='lg:h-[700px] lg:flex justify-center items-center '

            >
                <div className='lg:flex gap-20 '>

                    {data.map((datum, index) => (
                        <div key={index} className={`relative ${index === 1 ? "lg:top-0 lg:-mt-10  lg:mb-10" : "lg:top-0 lg:mt-24  "}`}>
                            <div className='h-16 w-3/4 bg-white flex px-3 items-center rounded-full border-fuchsia-500 border absolute top-[-40px] left-[25px]'>
                                <div className='flex gap-3'>
                                    <div className='flex justify-center items-center'>
                                        <img
                                            src='/images/bgImg.png'
                                            className='h-12 w-12 rounded-full'
                                            alt='img'
                                        />
                                    </div>
                                    <div>
                                        <h1>{datum.name}</h1>
                                        <h1 className='text-fuchsia-600'>{datum.designation}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='h-72 w-60 bg-white flex justify-center pt-8 px-5 text-justify rounded-3xl border-fuchsia-500 border'>
                                {datum.description}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Reviews;
