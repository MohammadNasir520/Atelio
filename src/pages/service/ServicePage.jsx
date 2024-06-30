import React from 'react';
import ServiceBanner from './ServicePageBanner';
import BrainsBehind from '../../components/BrainsBehind/BrainsBehind';
import Brands from '../../components/Brands/Brands';
import SingleServiceCand from './SingleServiceCand';
import ContactForm from '../../components/Contact/ContactForm';

const ServicePage = () => {

    const data = [
        {
            id: 1,
            title1: "WEBSITE BANNER DESIGN",
            bgImg: "/images/reviewBg2.png",
            description: "Our logo design package is your gateway to a captivating brand identity. We start with a discovery call and detailed brief to immerse ourselves in understanding your brand essence. Then, through deep brand analysis and collaborative refinement, we create the perfect logo that resonates with your audience.",
            title2: "THIS PACKAGE INCLUDES:",
            services: [
                { service: "Custom- Designed Banners Optimized for Desktop and Mobile Platforms" },
                { service: "Up to 10 Banner Designs Covering Various Sections of Your Website" },
                { service: "Enhanced Customization Options to Match Your Brand's Aesthetic" },
                { service: "Revisions and Refinements" },
                { service: "Final High-Resolution Files and Implementation Guidance" }
            ]
        },
        {
            id: 2,
            title1: "PRODUCT PACKAGING DESIGN",
            bgImg: "",
            description: "Our team works relentlessly to distinguish your product from competitors. We create packaging solutions that showcase your goods and communicate your brand's narrative. This package includes extensive design research, mockups, and final production-ready files to ensure your packaging makes a lasting impact on customers.",
            title2: "THIS PACKAGE INCLUDES:",
            services: [
                { service: "Initial Consultation and Strategy Development" },
                { service: "Custom Designed Posts" },
                { service: "Extensive Content Creation (for a month)" },
                { service: "Bespoke Branding with Custom Illustrations" },
                { service: "Advanced Content Strategy and Ad Design Support" },

            ]
        },
        {
            id: 3,
            title1: "VISUAL IDENTITY DESIGN",
            bgImg: "/images/serviceCardBgImg.png",
            description: "We believe that a strong visual identity is the cornerstone of every successful brand. Our visual identity design services are meticulously crafted to reflect the essence of your brand, leaving a lasting impression on your audience. From logo creation to brand guidelines, we work closely with you to develop a cohesive and memorable identity.",
            title2: "THIS PACKAGE INCLUDES:",
            services: [
                { service: "Custom Logo Design" },
                { service: "Brand Color Palette Selection" },
                { service: "Typography Selection" },
                { service: "Brand Style Guide (Logo Usage, Color Codes, Typography)" },
                { service: "Brand Collateral Design (Brochure, Flyer, Poster, etc)" },

            ]
        },
        {
            id: 4,
            title1: "SOCIAL MEDIA POST DESIGN",
            bgImg: "",
            description: "We craft engaging social media posts that captivate your audience and elevate your brand presence. Our expert designers specialize in creating visually stunning content that drives engagement and builds brand loyalty. We ensure your social media chan- nels not only stand out but also resonate with your target audience.",
            title2: "THIS PACKAGE INCLUDES:",
            services: [
                { service: "Initial Consultation and Strategy Development" },
                { service: "Custom Designed Posts" },
                { service: "Extensive Content Creation (for a month)" },
                { service: "Bespoke Branding with Custom Illustrations" },
                { service: "Advanced Content Strategy and Ad Design Support" },

            ]
        },
        {
            id: 5,
            title1: "WEBSITE BANNER DESIGN",
            bgImg: "/images/serviceBgImg.png",
            description: "We understand the importance of captivating visuals in grabbing the attention of your website visitors. Our website banner design service enhances your online presence with visually stunning banners that convey your message effectively. With a keen eye for detail, we ensure every banner reflects your brand's unique essence.",
            title2: "THIS PACKAGE INCLUDES:",
            services: [
                { service: "Custom-Designed Banners Optimized for Desktop and Mobile Platforms" },
                { service: "Up to 10 Banner Designs Covering Various Sections of Your Website" },
                { service: "Enhanced Customization Options to Match Your Brand's Aesthetic" },
                { service: "Revisions and Refinements" },
                { service: "Final High-Resolution Files and Implementation Guidance" },

            ]
        },
        {
            id: 6,
            title1: "BESPOKE DESIGN",
            bgImg: "",
            description: "We excel in crafting engaging social media posts that captivate your audience. Our team of expert designers specializes in creating visually stunning content that not only drives engagement but also fosters lasting brand loyalty. Experience the added value of our bespoke design services, ensuring each piece resonates uniquely with your brand's identity and values.",
            title2: "THIS PACKAGE INCLUDES:",
            services: [
                { service: "Visual Identity Design" },
                { service: "Packaging Design" },
                { service: "Website Design" },
                { service: "Social Media Post Dsign" },
                { service: "Website Banner Design" },

            ]
        },

    ]

    return (
        <div>
            <ServiceBanner></ServiceBanner>
            <div className='lg:mt-[620px]'>
                <Brands></Brands>

                {
                    data?.map((datum, i) => {
                        return <div>  <SingleServiceCand datum={datum} index={i}></SingleServiceCand></div>
                    })
                }

            </div>

            <div className='bg-black'>
                <div className='my-10'>
                    <h1 className=' text-white text-center text-xl'>Submit Your Query</h1>
                    <h1 className='bricolage-grotesque-baseTextFont  text-white text-center text-xl mt-5'>LET US ASSIST YOU WITH YOUR NEEDS</h1>
                </div>
                <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default ServicePage;