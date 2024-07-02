import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import DetailCount from '../DetailCount/DetailCount';
import Service from '../Service/Service';
import Reviews from '../Reviews/Reviews';
import BrainsBehind from '../BrainsBehind/BrainsBehind';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='mt-[550px]'>
                <Brands></Brands>
                <DetailCount></DetailCount>
                <Service hashLink={"/work#recent-work"}></Service>
                <Reviews></Reviews>
                <BrainsBehind></BrainsBehind>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;