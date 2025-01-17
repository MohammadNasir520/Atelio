import React from 'react';
import './SingleServiceCard.css'

const SingleServiceCard = ({ datum, index }) => {
    const { title1, title2, description, services, image } = datum
    return (
        <div className={`overflow-x-hidden lg:flex lg:h-[500px] ${index % 2 == 0 ? "bg-black text-white" : "bg-white text-black flex-row-reverse"}  items-center justify-center lg:px-16 p-5`}
            style={{
                backgroundImage: `url("${datum?.bgImg}")`,
                backgroundSize: "420px auto",
                backgroundPosition: `${index == 0 || index == 4 ? "right -90px center" : index == 2 && "left -90px center"}`,
                backgroundRepeat: "no-repeat"
            }}
        >
            <div data-aos="flip-left" className='flex justify-center items-center lg:w-5/12 mb-3 lg:mb-0'>
                <img
                    src={image}
                    className='serviceImg lg:h-72 lg:w-[420px] '
                    alt="" />
            </div>
            <div className='lg:w-7/12 space-y-5'>
                <div data-aos="fade-left">
                    <h1 className='smallHeadingFont text-2xl lg:text-5xl font-bold'>{title1}</h1>
                    <p className='text-base leading-relaxed'>{description}</p>
                </div>
                <div data-aos="fade-right" >
                    <h1 className='smallHeadingFont text-2xl lg:text-5xl font-bold'>{title2}</h1>
                    <ol className='list-decimal list-inside'>
                        {services?.map(service => {
                            return <li style={{ lineHeight: "28px" }} className='text-base smallHeadingFont'>{service?.service}</li>
                        })}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceCard;
