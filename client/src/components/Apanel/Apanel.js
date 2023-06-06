import React from 'react';
import Header from '../Header/Header';
import './Apanel.css';

const Apanel = () => {
    return (
        <div>
            <Header />
            <div className="checking__text">
                <h1>Панель управления</h1>
            </div>
            <div className="info__booking__text">
                <h3>Заполнение данных формы бронирования</h3>
            </div>
            <div className="form__reserve">
                <span className="reserve__text">Обзвон клиентов</span>
                <div className="div__form">
                <span className="span__name">Введите номер брони: </span>
                <div className="indiv__form">
                    <input className="input__form" type="text" />
                </div>
                </div>
                <div className="div__form">
                <button className="div__button">Пометить</button>
                </div>
            </div>
            <div className="form__reserve">
                <span className="reserve__text">Подтвердить бронирование места</span>
                <div className="div__form">
                <span className="span__name">Введите номер брони: </span>
                <div className="indiv__form">
                    <input className="input__form" type="text" />
                </div>
                </div>
                <div className="div__form">
                <button className="div__button">Подтвердить</button>
                </div>
            </div>
            <div className="info__order__text">
                <h3>Заполнение данных формы онлайн заказа</h3>
            </div>
            <div className="form__reserve">
                <span className="reserve__text">Обзвон клиентов</span>
                <div className="div__form">
                <span className="span__name">Введите номер заказа: </span>
                <div className="indiv__form">
                    <input className="input__form" type="text" />
                </div>
                </div>
                <div className="div__form">
                <button className="div__button">Пометить</button>
                </div>
            </div>
            <div className="form__reserve">
                <span className="reserve__text">Подтвердить заказ</span>
                <div className="div__form">
                <span className="span__name">Введите номер заказа: </span>
                <div className="indiv__form">
                    <input className="input__form" type="text" />
                </div>
                </div>
                <div className="div__form">
                <button className="div__button">Подтвердить</button>
                </div>
            </div>
            <div className="space" />
            <div className="info__sector">
                <div className="info__booking">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus sed,
                amet provident facere laborum omnis in aut excepturi asperiores sapiente
                voluptatibus ab sint commodi labore ipsam eveniet! Itaque, necessitatibus
                totam.
                </div>
                <div className="info__order">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam et
                incidunt suscipit! Ea, natus. Veniam vero minus quis quo praesentium
                pariatur facilis? Illum omnis magni ab molestias exercitationem cum quod.
                </div>
            </div>

        </div>
    );
};

export default Apanel;