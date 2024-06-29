import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import DetailCount from '../DetailCount/DetailCount';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='mt-[550px]'>
                <Brands></Brands>
                <DetailCount></DetailCount>
            </div>
        </div>
    );
};

export default Home;