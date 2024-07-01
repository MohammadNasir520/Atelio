import React from 'react';

const SingleServiceCard = ({ datum, index }) => {
    const { title1, title2, description, services, image } = datum
    return (
        <div className={`lg:flex lg:h-[400px] ${index % 2 == 0 ? "bg-black text-white" : "bg-white text-black flex-row-reverse"}  items-center justify-center lg:px-20 py-6`}
            style={{
                backgroundImage: `url("${datum?.bgImg}")`,
                backgroundSize: "300px auto",
                backgroundPosition: `${index == 0 || index == 4 ? "right -90px center" : index == 2 && "left -90px center"}`,
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className='flex justify-center items-center lg:w-1/2'>
                <img
                    src={image}
                    className='lg:h-60 lg:w-60'
                    alt="" />
            </div>
            <div className='lg:w-1/2 space-y-5'>
                <div>
                    <h1 className='bricolage-grotesque-baseTextFont'>{title1}</h1>
                    <p className='text-sm'>{description}</p>
                </div>
                <div>
                    <h1 className='bricolage-grotesque-baseTextFont'>{title2}</h1>
                    <ol className='list-decimal list-inside'>
                        {services?.map(service => {
                            return <li className='text-sm'>{service?.service}</li>
                        })}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceCard;
