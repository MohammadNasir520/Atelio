import React from 'react';
import Button from '../../components/ui/Button';
import "./contactPageBanner.css"




const ContactBanner = () => {
    return (
        <div
            className='contact-banner lg:absolute top-0 right-0 left-0 bg-black lg:px-14 '
            style={{
                backgroundImage: 'url(/images/contactBgImg.jpg)',

                backgroundRepeat: 'no-repeat',
                objectFit: "cover",

            }}
        >


            <div className='lg:h-[650px] lg:flex items-center' >

                <div className=' lg:w-2/6 lg:ml-32 px-4 text-white h-[300px]'>
                    <h1 className='bricolage-grotesque-baseTextFont  font-thin'>Feel Free To Contact Us</h1>
                    <h1 className='bricolage-grotesque-baseTextFont  font-bold'>We're Here For <br></br>Your Solutions</h1>

                    <Button>View Solutions</Button>
                </div>

            </div>
        </div>
    );
};

export default ContactBanner;
