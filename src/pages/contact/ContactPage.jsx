import React from 'react';
import Contact from '../../components/Contact/Contact';
import ContactBanner from './ContactPageBanner';
import ContactForm from '../../components/Contact/ContactForm';

const ContactPage = () => {
    return (
        <div className='bg-black'>
            <div>
                <ContactBanner></ContactBanner>
            </div>
            <div id='contactForm' className=''>
                <div className='my-10'>
                    <h1 className=' fontFranklin text-white text-center text-xl'>Submit Your Query</h1>
                    <h1 className='bricolage-grotesque-baseTextFont  text-white text-center text-xl mt-5'>LET US ASSIST YOU WITH YOUR NEEDS</h1>
                </div>
                <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default ContactPage;