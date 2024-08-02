import React from 'react';
import Button from '../../components/ui/Button';
import "../../components/Style.Css/Style.css"
import "./ServicePageBanner.css"




const ServiceBanner = () => {
    return (
        <div
            className='service-banner h-[600px] md:h-screen mt-[-65px] lg:py-5 bg-black  '
            style={{
                backgroundImage: 'url(/images/serviceBgImg2.png),url(/images/serviceBgImg.png)',
                backgroundPosition: '-90px center, right -90px center',
                backgroundRepeat: 'no-repeat',
                objectFit: "cover",

            }}
        >


            <div className='h-[600px] md:h-screen lg:flex justify-center text-center  items-center' >

                <div data-aos="fade-up" className='  text-white h-full flex justify-center items-center flex-col'>
                    <h1 className='bricolage-grotesque-baseTextFont   !font-thin !leading-normal'>We Craft<span className='font-bold' > Solutions </span><br></br>

                        That<span className='font-bold'> Create Long-lasting <br></br>

                            Growth </span> For Brands</h1>


                    <div className='mt-7'>
                        <Button>View Solutions</Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceBanner;
