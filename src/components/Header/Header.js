import React from 'react';
import './Header.css';

import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div>
            <a href="#">
                <img className="logo" src={logo} alt=""/>
            </a>
           <nav>
               <a className="active" href="/shop">Shop</a>
               <a href="/order">Order Review</a>
               <a href="/manage">Manage</a>
           </nav>
        </div>
    );
};

export default Header;