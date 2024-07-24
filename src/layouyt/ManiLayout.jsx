import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Scroll from '../components/Scroll/Scroll';

const ManiLayout = () => {
    return (
        <section className='max-w-[2006px] mx-auto'>
            <Navbar></Navbar>
            <Scroll></Scroll>
            <Outlet></Outlet>
            <Footer></Footer>

        </section>
    );
};

export default ManiLayout;