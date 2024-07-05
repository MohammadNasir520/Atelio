import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
    const data = [
        {
            name: "Jane Doe",
            designation: "CEO",
            description: "11111  Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati tempora aut velit assumenda quos fuga blanditiis deleniti quisquam nobis itaque adip  Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "Jane Doe",
            designation: "CEO",
            description: "22222 Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati tempora aut velit assumenda quos fuga blanditiis deleniti quisquam nobis itaque adip  Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "Jane Doe",
            designation: "CEO",
            description: "33333  Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati tempora aut velit assumenda quos fuga blanditiis deleniti quisquam nobis itaque adip  Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
    ];

    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,

    };

    return (
        <div
            className='py-5 lg:pt-10 bg-black'
            style={{
                backgroundImage: 'url(/images/reviewBg.png)',
                backgroundSize: '600px auto',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <h1 className='text-white text-center space-y-3'>
                <span className='font-bold'>What They Say </span>
                <span className='fontFranklin text-gray-400 '>About Us</span>
            </h1>

            <div className='lg:h-[600px] flex justify-center items-center'>
                <div className='lg:w-3/4'>
                    <Slider {...settings}>
                        {data.map((datum, index) => (
                            <div key={index} className='py-12'>
                                <div className='lg:space-y-0 relative '>
                                    <div className='h-16 w-[200px] bg-white flex px-3 items-center rounded-full border-fuchsia-500 border absolute top-[-40px] left-[25px]'>
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
                                                <h1 className='fontFranklin text-fuchsia-600'>{datum.designation}</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='h-[18rem] w-[15rem] bg-white flex justify-center pt-8 px-5 text-justify rounded-[40px] border-fuchsia-500 border'>
                                        {datum.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
