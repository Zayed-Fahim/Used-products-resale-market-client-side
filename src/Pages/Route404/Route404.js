import React from 'react';
import error from '../../assets/404Route/404Error.jpg'
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
const Route404 = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <div className='mt-10 lg:mt-0'>
                <img src={error} alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Route404;