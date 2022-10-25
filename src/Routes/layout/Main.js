import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Home from '../../components/Home/Home';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default Main;