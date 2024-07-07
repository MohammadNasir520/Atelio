import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Scroll from '../components/Scroll/Scroll';

const ManiLayout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Scroll></Scroll>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default ManiLayout;