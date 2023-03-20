import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Page/Home/Home/Navbar/Navbar';
import Footer from '../Page/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;