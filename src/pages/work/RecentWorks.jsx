import React from 'react';

const RecentWorks = ({ data }) => {
    console.log(data);
    return (
        <div id="recent-work" className='min-h-screen my-7'>
            <div className='text-center '>
                <h1>take a look at</h1>
                <h1 className='font-bold'>Our Recent Works</h1>
            </div>

            <div className='grid lg:grid-cols-3 '>
                {
                    data?.map((product, i) => {
                        return <div key={i}
                            className='h-[200px] w-[250px] mx-auto my-5'
                        >

                            <img
                                src={product.image}
                                className=''
                                alt="" />
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default RecentWorks;