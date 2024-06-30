import React from 'react';

import { Link } from 'react-router-dom';

const TeamMemberCard = () => {

    const data = [
        {
            image: "/images/Asif Zaman-01.png",
            name: "MD ASIF ZAMAN",
            designation: "Creative Director",
            description: "Hi, I’m Asif! I lead our team’s strategic planning and creative direction. I’m passionate about developing concepts, crafting moodboards, and designing logos that perfectly capture your brand’s essence."
        },
        {
            image: "/images/Tasnim-01.png",
            name: "TASNIM SULTANA",
            designation: "Brand Architect",
            description: "Hello, I’m Tasnim. I specialize in shaping your brand’s identity. My job is to develop comprehensive brand guidelines and visual identities that ensure your brand looks cohesive and professional across all platforms."
        },
        {
            image: "/images/pic-removebg-preview.png",
            name: "SAURAV HALDER",
            designation: "Visual Storyteer",
            description: "Hey there, I’m Saurav. I bring your brand to life through engaging digital content. Whether it's creating eye-catching social media posts or designing website banners, I make sure your online presence is impactful and memorable."
        },
    ]
    return (
        <div className=' p-8 bg-black text-white'>
            <div>


                <div className='flex flex-col w-10/12 mx-auto items-center'>
                    {
                        data?.map((datum, i) => {
                            return <div key={i} className='relative flex items-center  my-10 w-3/4 '>
                                <div
                                    key={i}
                                    style={{ backgroundImage: 'url(/images/bgshape.svg)', backgroundSize: '550px auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', }}
                                    className='w-2/5 flex justify-center'
                                >
                                    <img src={datum?.image} className='h-60 w-60 mb-16 ml-4 ' alt="" />
                                </div>
                                <div className='w-3/5 bottom-3'>
                                    <h1 className='bricolage-grotesque-baseTextFont '>{datum?.name}</h1>
                                    <h1 className='text-violet-500 text-xl mb-2'>{datum?.designation}</h1>
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