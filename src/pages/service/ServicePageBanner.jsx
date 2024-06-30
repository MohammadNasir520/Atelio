import React from 'react';
import Button from '../../components/ui/Button';





const ServiceBanner = () => {
    return (
        <div
            className='Team-banner  lg:absolute top-0 right-0 left-0 bg-black lg:px-14 '
            style={{
                backgroundImage: 'url(/images/serviceBgImg2.png),url(/images/serviceBgImg.png)',
                backgroundPosition: '-90px center, right -90px center',
                backgroundRepeat: 'no-repeat',
                objectFit: "cover",

            }}
        >


            <div className='lg:h-[650px] lg:flex justify-center text-center  items-center' >

                <div className='  text-white h-[300px]'>
                    <h1 className='bricolage-grotesque-baseTextFont  font-thin'>We Craft Solutions <br></br>

                        That Create Long-lasting <br></br>

                        Growth For Brands</h1>


                    <Button>View Solutions</Button>
                </div>

            </div>
        </div>
    );
};

export default ServiceBanner;
