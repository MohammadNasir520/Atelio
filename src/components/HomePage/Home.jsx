import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import DetailCount from '../DetailCount/DetailCount';
import Service from '../Service/Service';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='mt-[550px]'>
                <Brands></Brands>
                <DetailCount></DetailCount>
                <Service></Service>
                <Reviews></Reviews>
            </div>
        </div>
    );
};

export default Home;