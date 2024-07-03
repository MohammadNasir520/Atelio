import React from 'react';
import Button from '../../components/ui/Button';
import "./contactPageBanner.css"




const ContactBanner = () => {
    return (
        <div
            className='contact-banner  mt-[-65px] lg:py-5  bg-black lg:px-14 '
            style={{
                backgroundImage: 'url(/images/contactBgImg2.jpg)',

                backgroundRepeat: 'no-repeat',
                objectFit: "cover",

            }}
        >


            <div className='h-screen lg:flex items-center justify-center lg:px-28' >

                <div className=' lg:w-5/6  pl-4 text-white '>
                    <h1 className='fontFranklin  font-thin'>Feel Free To Contact Us</h1>
                    <h1 className='bricolage-grotesque-baseTextFont  font-bold !text-6xl !leading-snug'>We're Here For <br></br>Your Solutions</h1>

                    <div className='mt-7'>
                        <Button hashLink={"/contact#contactForm"}><h1 className='text-sm'>Send us a message</h1></Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactBanner;
