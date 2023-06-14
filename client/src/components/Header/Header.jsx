import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CONTACTS_ROUTE, MAIN_ROUTE, MENU_ROUTE, NEWS_ROUTE } from '../../const';
import logo from '../../img/logotip.webp';
import './Header.css';
import Modal from '../ModalReserve/Modal';
import ModalOrder from '../ModalOrder/ModalOrder';

const Header = () => {

    const [modalActive, setModalActive] = useState(false)
    const [modalOrderActive, setModalOrderActive] = useState(false)

    return (
        <div>
            <header>
                <NavLink to={MAIN_ROUTE}>
                <img className="header-item" src={logo} alt="" />
                </NavLink>
                <div className="header">
                <nav className="secondarynav">
                    <NavLink to={MAIN_ROUTE}>Главная</NavLink>
                    {/* <NavLink to={MAIN_ROUTE}>О нас</NavLink> */}
                    <NavLink to={NEWS_ROUTE}>Новости</NavLink>
                    <NavLink to={MENU_ROUTE}>Меню</NavLink>
                    <NavLink to={CONTACTS_ROUTE}>Контакты</NavLink>
                    <NavLink onClick={() => setModalOrderActive(true)}>Заказать онлайн</NavLink>
                    <button className='btnHeader' onClick={() => setModalActive(true)}>Забронировать место</button>
                </nav>
                </div>
            </header>
            <Modal active={modalActive} setActive={setModalActive} />
            <ModalOrder active={modalOrderActive} setActive={setModalOrderActive} />
        </div>
    );
};

export default Header;