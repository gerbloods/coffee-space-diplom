import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import numbersimg from '../../img/contacts-1@2x.png';
import addressimg from '../../img/contacts-2@2x.png';
import timeimg from '../../img/contacts-3@2x.png';
import './Contacts.css';
// import { YMaps, Map } from '@pbe/react-yandex-maps';

const Contacts = () => {
    return (
        <div>
            <Header />
            <main className="main-container">
            <div className="contactext">
                <h1>Контакты</h1>
            </div>
            <section className="class-section">
                <div className="numberdiv">
                <img src={numbersimg} alt="" />
                <ul className="contacts">
                    <li>
                    <a href="tel:+79106045487">+7 (910) 604-54-87</a>
                    </li>
                    <li>
                    <a href="tel:+79620973342">+7 (962) 097-33-42</a>
                    </li>
                </ul>
                </div>
                <div className="addressdiv">
                <img src={addressimg} alt="" />
                <ul className="address">
                    <li>
                    <p>ул. Ленина, 121, Калуга</p>
                    <p />
                    </li>
                </ul>
                </div>
                <div className="timeworkdiv">
                <img src={timeimg} alt="" />
                <ul className="time">
                    <li>
                    <p>Ежедневно 8:30-22:00</p>
                    </li>
                </ul>
                </div>
            </section>
            {/* <YMaps>
                <div className='mapYandex'>
                    <Map defaultState={{ center: [54.50698270, 36.25487183], zoom: 18 }} />
                </div>
            </YMaps> */}
            </main>
            <Footer />
        </div>
    );
};

export default Contacts;