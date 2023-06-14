import React from 'react';

import logo from '../assets/images/Logo-2.png';
import { Link } from 'react-router-dom';

const mainNav = [
    { 
        display: "Home",
        path: "/",
    },
    { 
        display: "Catalog",
        path: "/catalog",
    },
    { 
        display: "Accessories",
        path: "/accessories",
    },
    { 
        display: "Contact",
        path: "/contact",
    },
];

const Header = () => {
  return (
    <div className="header">
        <div className="container">
            <div className="header__logo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="header__menu">
                <div className="header__menu__mobile-toggle">
                    <i className='bx bx-menu-alt-left'></i>
                </div>
                <div className="header__menu__left">
                    <div className="header__menu__left__close">
                        <i className='bx bx-chevron-left'></i>
                    </div>
                    {
                        mainNav.map((item, index) => (
                            <div key={index} className="header__menu__item header__menu__left__item">
                                <Link to={item.path}>
                                    <span>{item.display}</span>
                                </Link>
                            </div> 
                        ))
                    }
                </div>
                <div className="header__menu__right">
                    <div className="header__menu__item header__menu__right__item">
                        <i className='bx bx-search'></i>                    
                    </div>
                    <div className="header__menu__item header__menu__right__item">
                        <Link to="/cart">
                            <i className='bx bx-shopping-bag'></i>                    
                        </Link>
                    </div>
                    <div className="header__menu__item header__menu__right__item">
                        <i className='bx bx-user'></i>                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header;