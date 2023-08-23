import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pure/Navbar';
import Footer from '../pure/Footer';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
}

export default Layout;
