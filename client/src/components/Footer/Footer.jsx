import React from 'react';
import { NavLink } from 'react-router-dom';
import { CONTACTS_ROUTE, MAIN_ROUTE, NEWS_ROUTE } from '../../const';
import './Footer.css';

const Footer = () => {
    return (
        <div>
             <footer id="footerid" className="footer">
                <div className="navfooter">
                <ul className="navlinks">
                    <li>
                    <NavLink to={MAIN_ROUTE}>Главная</NavLink>
                    </li>
                    <li>
                    <NavLink to={NEWS_ROUTE}>Новости</NavLink>
                    </li>
                    <li>
                    <NavLink to={CONTACTS_ROUTE}>Контакты</NavLink>
                    </li>
                </ul>
                </div>
                <div className="contactnumber">
                <ul className="contacts">
                    <li>
                    <p>Телефоны кофейни:</p>
                    </li>
                    <li>
                    <a href="tel:+79106045487">+7 (910) 604-54-87</a>
                    </li>
                    <li>
                    <a href="tel:+79620973342">+7 (962) 097-33-42</a>
                    </li>
                </ul>
                </div>
                <div className="contactaddress">
                <ul className="address">
                    <li>
                    <p>Наш адрес:</p>
                    <p />
                    </li>
                    <li>
                    <p>ул. Ленина, 121, Калуга</p>
                    <p />
                    </li>
                </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;