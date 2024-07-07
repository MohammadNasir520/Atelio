import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Reviews.css";

const Reviews = () => {
    const data = [
        {
            name: "Barrientos",
            image: "/images/ClientsFeedback/Barrientos - United Kingdom.jpg",
            designation: "UK",
            description: "An absolute pleasure to work with! The visual identity design exceeded our expectations and truly represents our brand's identity"
        },
        {
            name: "Casey Sheehan",
            image: "/images/ClientsFeedback/Casey Sheehan - US.jpg",
            designation: "USA",
            description: "Creative, professional, and timely. The social media kits you designed have significantly boosted our online presence."
        },
        {
            name: "Claudio Montanar",
            image: "/images/ClientsFeedback/Claudio Montanar - Argentina.jpg",
            designation: "Argentina",
            description: "Exceptional packaging designs! Our products now stand out on the shelves, and we've seen a notable increase in sales"
        },
        {
            name: "Juan Varela",
            image: "/images/ClientsFeedback/Juan Varela - Panama.jpg",
            designation: "Panama",
            description: " Fantastic work! From the logo to the social media graphics, everything was delivered perfectly and on time. Highly recommended."
        },
        {
            name: "Justinepotter",
            image: "/images/ClientsFeedback/Justinepotter - United States.jpg",
            designation: "USA",
            description: "Your designs have transformed our brand image. The visual identity designs are top-notch."
        },
        {
            name: "Kevinyuenhk",
            image: "/images/ClientsFeedback/Kevinyuenhk - Hong Kong.jpg",
            designation: "Hong Kong",
            description: "Outstanding creativity and professionalism. The brand elements you created have given our business a fresh, modern look."
        },
        {
            name: "Kirklan",
            image: "/images/ClientsFeedback/Kirklan - United States.jpg",
            designation: "USA",
            description: "Impressive work! The branding materials are sleek and elegant, perfectly reflecting our brand's luxury image."
        },
        {
            name: "Md. Rifat Mia",
            image: "/images/ClientsFeedback/Md. Rifat Mia - Bangladesh.jpg",
            designation: "Bangladesh",
            description: "Brilliant designer! The logo and packaging have been a hit with our customers. Thank you!"
        },
        {
            name: "Miriam",
            image: "/images/ClientsFeedback/Miriam - US.jpg",
            designation: "USA",
            description: "Superb design skills. Our new logo and brand materials are exactly what we needed to revamp our brand"
        },
        {
            name: "Mueej",
            image: "/images/ClientsFeedback/Mueej - Canada.png.jpg",
            designation: "Canada",
            description: "Absolutely delighted with the logo, packaging and social media kits. Your designs have given our brand a unique and vibrant identity"
        },
        {
            name: "Pedrighno",
            image: "/images/ClientsFeedback/Pedrighno - Switzerland.jpg",
            designation: "Switzerland",
            description: "Professional and creative. The branding package you provided is excellent and has really helped our marketing efforts."
        },
        {
            name: "Victoria",
            image: "/images/ClientsFeedback/Victoria - US.jpg",
            designation: "USA",
            description: "Top-quality work! The new brand design is fantastic, and we've received great feedback from our customers."
        },
        // Add more reviews as needed
    ];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        centerMode: true,


        responsive: [
            {
                breakpoint: 1924,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerPadding: '0',
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div
            className='py-8 lg:pt-10 bg-black w-full'
            style={{
                backgroundImage: 'url(/images/reviewBg.png)',
                backgroundSize: '600px auto',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <h1 className='text-white text-center space-y-3'>
                <span className='font-bold smallHeadingFont'>What They Say </span>
                <span className='fontFranklin text-gray-400 '>About Us</span>
            </h1>

            <div className='lg:h-[600px] flex justify-center items-center'>
                <div className='lg:w-3/4 w-full'>
                    <Slider {...settings}>
                        {data.map((datum, index) => (
                            <div
                                key={index}
                                className={`lg:py-24 py-24`}
                            >
                                <div className='lg:space-y-0 relative'>
                                    <div className='h-16 w-[220px] bg-white flex px-3 items-center rounded-full border-fuchsia-500 border absolute top-[-40px] left-[20px]'>
                                        <div className='flex gap-3'>
                                            <div className='flex justify-center items-center'>
                                                <img
                                                    src={datum?.image}
                                                    className='h-12 w-12 rounded-full object-cover'
                                                    alt='img'
                                                />
                                            </div>
                                            <div>
                                                <h1>{datum.name}</h1>
                                                <h1 className='fontFranklin text-fuchsia-600'>{datum.designation}</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='h-[18rem] w-[16rem] bg-white flex justify-center pt-8 px-5 text-justify rounded-[40px] border-fuchsia-500 border'>
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
