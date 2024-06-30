import React from 'react';

import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div


            className='lg:h-[500px]  bg-black lg:py-20'
            style={
                {
                    backgroundImage: 'url(/images/dispersionglass.png)',
                    backgroundSize: '440px auto',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    objectFit: "cover",
                }
            }>

            <h1 className='text-center text-white pb-10'><span className='font-bold'>Let’s Start with </span>a Creative Discuuion</h1>
            <ContactForm></ContactForm>

        </div >
    );
};

export default Contact;