import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='mt-[550px]'>
                <Brands></Brands>
            </div>
        </div>
    );
};

export default Home;