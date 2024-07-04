import React from 'react';
import Button from '../../components/ui/Button';
import "../../components/Style.Css/Style.css"
import "./ServicePageBanner.css"




const ServiceBanner = () => {
    return (
        <div
            className='service-banner mt-[-65px] lg:py-5 bg-black  '
            style={{
                backgroundImage: 'url(/images/serviceBgImg2.png),url(/images/serviceBgImg.png)',
                backgroundPosition: '-90px center, right -90px center',
                backgroundRepeat: 'no-repeat',
                objectFit: "cover",

            }}
        >


            <div className='lg:h-[650px] lg:flex justify-center text-center  items-center' >

                <div className='  text-white h-[300px] flex justify-center items-center flex-col'>
                    <h1 className='bricolage-grotesque-baseTextFont   !font-thin !leading-normal'>We Craf<span className='font-bold' >t Solutions </span><br></br>

                        Tha <span className='font-bold'>t Create Long-lasting <br></br>

                            Growth </span> For Brands</h1>


                    <Button>View Solutions</Button>
                </div>

            </div>
        </div>
    );
};

export default ServiceBanner;
