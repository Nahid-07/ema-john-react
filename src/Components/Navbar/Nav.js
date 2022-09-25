import React from 'react';
import logo from '../../images/Logo.svg'

const Nav = () => {
    return (
        <nav className='h-20 bg-slate-800 flex justify-between items-center px-36'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='text-slate-50 text-lg'>
                <a className='ml-9 hover:text-orange-500' href="#">Home</a>
                <a className='ml-9 hover:text-orange-500' href="#">Orders</a>
                <a className='ml-9 hover:text-orange-500' href="#">Contact us</a>
                <a className='ml-9 hover:text-orange-500' href="#">About us</a>
            </div>
        </nav>
    );
};

export default Nav;