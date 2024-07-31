import React from 'react';



import asifZaman from "/images/Asif Zaman-01.png"
import tasnimSultana from "/images/Tasnim-01.png"
import souravHalder from "/images/pic-removebg-preview.png"

const TeamMemberCard = () => {

    const data = [
        {
            image: asifZaman,
            name: "MD ASIF ZAMAN",
            designation: "Creative Director",
            description: "Hi, I’m Asif! I lead our team’s strategic planning and creative direction. I’m passionate about developing concepts, crafting moodboards, and designing logos that perfectly capture your brand’s essence."
        },
        {
            image: tasnimSultana,
            name: "TASNIM SULTANA",
            designation: "Brand Architect",
            description: "Hello, I’m Tasnim. I specialize in shaping your brand’s identity. My job is to develop comprehensive brand guidelines and visual identities that ensure your brand looks cohesive and professional across all platforms."
        },
        {
            image: souravHalder,
            name: "SAURAV HALDER",
            designation: "Visual Storyteer",
            description: "Hey there, I’m Saurav. I bring your brand to life through engaging digital content. Whether it's creating eye-catching social media posts or designing website banners, I make sure your online presence is impactful and memorable."
        },
    ]
    return (
        <div className=' px-8 bg-black text-white'>
            <div>


                <div className='lg:flex lg:flex-col w-10/12 mx-auto items-center'>
                    {
                        data?.map((datum, i) => {
                            return <div key={i} className='relative lg:flex items-center  my-10  '>
                                <div
                                    data-aos={i == 1 ? "zoom-in-down" : i == 2 ? "zoom-in-left" : "zoom-in-right"}
                                    key={i}
                                    style={{ backgroundImage: 'url(/images/bgshape.svg)', backgroundSize: '650px auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', }}
                                    className='lg:w-2/5 flex justify-center'
                                >
                                    <img src={datum?.image} className='lg:h-80 lg:w-80 mb-16 ml-4 ' alt="" />
                                </div>
                                <div data-aos={i == 1 ? "zoom-in-down" : i == 2 ? "zoom-in-left" : "zoom-in-right"} className='lg:w-3/5 bottom-3  text-justify'>
                                    <h1 className='smallHeadingFont text-3xl   lg:text-4xl text-center md:text-left'>{datum?.name}</h1>
                                    <h1 className='fontFranklin text-violet-500 text-xl mb-2 text-center md:text-left'>{datum?.designation}</h1>
                                    <p className='text-sm'>{datum?.description}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>

        </div>
    );
};

export default TeamMemberCard;