import React from 'react';
import Marquee from 'react-fast-marquee';
import Title from '../ui/Title';
import './brands.css'

const Brands = () => {

    const images = [

        {
            "image": "/images/Bespoke design/valo-01.jpg"
        },
        {

            "image": "/images/PRODUCT PACKAGING DESIGN/Product packaging design-06.jpg"
        },
        {

            "image": "/images/PRODUCT PACKAGING DESIGN/Product packaging design-07.jpg"
        },
        {

            "image": "/images/PRODUCT PACKAGING DESIGN/Product packaging design-08.jpg"
        },
        {

            "image": "/images/PRODUCT PACKAGING DESIGN/Product packaging design-09.jpg"
        },
        {

            "image": "/images/PRODUCT PACKAGING DESIGN/Product packaging design-10.jpg"
        },
        {

            "image": "/images/PRODUCT PACKAGING DESIGN/Product packaging design-11.jpg"
        },
        {

            "image": "/images/PRODUCT PACKAGING DESIGN/Product packaging design-12.jpg"
        },

        {

            "image": "/images/PRODUCT PACKAGING DESIGN/Product packaging design-13.jpg"
        },
        {

            "image": "/images/PRODUCT PACKAGING DESIGN/Product packaging design-14.jpg"
        },


        {

            "image": "/images/LOGO DESIGN/Logo design-06.jpg"
        },
        {

            "image": "/images/LOGO DESIGN/Logo design-07.jpg"
        },
        {

            "image": "/images/LOGO DESIGN/Logo design-08.jpg"
        },
        {

            "image": "/images/LOGO DESIGN/Logo design-09.jpg"
        },

        {

            "image": "/images/LOGO DESIGN/Logo design-13.jpg"
        },
        {

            "image": "/images/LOGO DESIGN/Logo design-14.jpg"
        },
        {

            "image": "/images/LOGO DESIGN/Logo design-15.jpg"
        },
        {

            "image": "/images/LOGO DESIGN/Logo design-16.jpg"
        },

        {

            "image": "/images/LOGO DESIGN/Logo design-20.jpg"
        },
        {

            "image": "/images/LOGO DESIGN/Logo design-21.jpg"
        },
        {

            "image": "/images/LOGO DESIGN/Logo design-22.jpg"
        },
        {

            "image": "/images/LOGO DESIGN/Logo design-23.jpg"
        },
        {

            "image": "/images/LOGO DESIGN/Logo design-24.jpg"
        },

        {

            "image": "/images/LOGO DESIGN/Logo design-29.jpg"
        },
        {

            "image": "/images/LOGO DESIGN/Logo design-30.jpg"
        },
        {

            "image": "/images/Social Media Posts/coffee.jpg"
        },
        {

            "image": "/images/Social Media Posts/demo 02.jpg"
        },

        {

            "image": "/images/Social Media Posts/Hoodie Combo.jpg"
        },
        {

            "image": "/images/Social Media Posts/monster.jpg"
        },
        {

            "image": "/images/Social Media Posts/polo 01.jpg"
        },
        {

            "image": "/images/Social Media Posts/polo 02.jpg"
        },
        {

            "image": "/images/Social Media Posts/Post 01.jpg"
        },
        {

            "image": "/images/Social Media Posts/Post 02.jpg"
        },
        {

            "image": "/images/Social Media Posts/Post 03.jpg"
        },
        {

            "image": "/images/Social Media Posts/Post 04.jpg"
        },
        {

            "image": "/images/Social Media Posts/real estate eng.jpg"
        },
        {

            "image": "/images/Social Media Posts/real estate.jpg"
        },
        {

            "image": "/images/Banners/agency.jpg"
        },
        {

            "image": "/images/Banners/clothing.jpg"
        },
        {

            "image": "/images/Banners/cover 03.jpg"
        },
        {

            "image": "/images/Banners/currier 01.jpg"
        },
        {

            "image": "/images/Banners/currier 02.jpg"
        },
        {

            "image": "/images/Banners/e commerce.jpg"
        },
        {

            "image": "/images/Banners/fb cover 02.jpg"
        },
        {

            "image": "/images/Banners/fb cover.jpg"
        },
        {

            "image": "/images/Banners/food.jpg"
        },
        {

            "image": "/images/Bespoke design/ch-01.jpg"
        },
        {

            "image": "/images/Bespoke design/coffee.jpg"
        },
        {

            "image": "/images/Bespoke design/demo 02.jpg"
        },
        {

            "image": "/images/Bespoke design/food 01.jpg"
        },
        {

            "image": "/images/Bespoke design/Logo design-01.jpg"
        },
        {

            "image": "/images/Bespoke design/Logo design-05.jpg"
        },
        {

            "image": "/images/Bespoke design/Logo design-10.jpg"
        },
        {

            "image": "/images/Bespoke design/Logo design-11.jpg"
        },
        {

            "image": "/images/Bespoke design/Logo design-13.jpg"
        },
        {

            "image": "/images/Bespoke design/Logo design-20.jpg"
        },
        {

            "image": "/images/Bespoke design/Logo design-24.jpg"
        },
        {

            "image": "/images/Bespoke design/Logo design-32.jpg"
        },
        {

            "image": "/images/Bespoke design/Logo design-33.jpg"
        },
        {

            "image": "/images/Bespoke design/mati-01.jpg"
        },
        {

            "image": "/images/Bespoke design/polo 02.jpg"
        },
        {

            "image": "/images/Bespoke design/Product packaging design-01.jpg"
        },
        {

            "image": "/images/Bespoke design/Product packaging design-04.jpg"
        }

    ]
    return (
        <div className=' brands-container mb-12 '>
            <div data-aos="fade-up" className='mb-12'>
                <Title boldText={"Trusted by 100+ Brands"} smallText={"All Over the World"}></Title>
                <Marquee pauseOnHover direction='left'>

                    {images?.map((image, i) => {
                        return <div key={i} className='card-1 h-44 w-64 mx-6' >
                            <img src={image.image} className='h-full w-full'></img>
                        </div>
                    })}
                </Marquee>
            </div>
            <div data-aos="fade-up" >
                <Marquee pauseOnHover direction='right'>

                    {images?.map((image, i) => {
                        return <div key={i} className='card-1 h-44 w-64 mx-6' >
                            <img src={image.image} className='h-full w-full'></img>
                        </div>
                    })}
                </Marquee>
            </div>
        </div>
    );
};

export default Brands;