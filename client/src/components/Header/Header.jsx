import React from 'react';
import { NavLink } from 'react-router-dom';
import { CONTACTS_ROUTE, MAIN_ROUTE, MENU_ROUTE, NEWS_ROUTE } from '../../const';
import logo from '../../img/logotip.webp';
import './Header.css';

const Header = () => {
    return (
        <div>
            <header>
                <NavLink to={MAIN_ROUTE}>
                <img className="header-item" src={logo} alt="" />
                </NavLink>
                <div className="header">
                <nav className="secondarynav">
                    <NavLink to={MAIN_ROUTE}>Главная</NavLink>
                    <NavLink to={MAIN_ROUTE}>О нас</NavLink>
                    <NavLink to={NEWS_ROUTE}>Новости</NavLink>
                    <NavLink to={MENU_ROUTE}>Меню</NavLink>
                    <NavLink to={CONTACTS_ROUTE}>Контакты</NavLink>
                </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;