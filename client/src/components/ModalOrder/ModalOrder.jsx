import React, { useState } from 'react';
import './ModalOrder.css';
import { orderFunction } from '../../queries/mainQuery';
import InputMask from 'react-input-mask';

const ModalOrder = ({active, setActive}) => {


    const [fio, setFio] = useState('')
    const [number, setNumber] = useState('')
    const [order, setOrder] = useState('')


    const phoneRegex = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;

    const handleOrder = (fio, number, order) => {
        if (!fio || !number.match(phoneRegex) || !order) {
            alert("Пожалуйста, заполните корректно все обязательные поля");
            return false;
        } else {
            return true;
        }
    }

    const entering = async () => {
        try {
            if(handleOrder(fio, number, order) === true) {
                const object = await orderFunction(fio, number, order)
                setActive(false)
                alert(object.message)
                return (
                    <div className='messageDiv'>
                        <span className='textMessage'>{object.message}</span>
                    </div>
                )
            } 
        } catch (error) {
            alert('Неправильное заполнение данных')
        }
    }

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className='modal__content' onClick={e => e.stopPropagation()}>
                <span className="reserve__text">Заказать онлайн</span>
                <div className="div__form">
                    <span className="span__name">Имя и фамилия: </span>
                    <div className="indiv__form">
                        <input className="input__form" type="text" onChange={(e) => setFio(e.target.value)} />
                    </div>
                </div>
                <div className="div__form">
                    <span className="span__name">Номер телефона: </span>
                    <div className="indiv__form">
                        <InputMask className="input__form" mask="+7 (999) 999-99-99"  onChange={(e) => setNumber(e.target.value)} />
                    </div>
                </div>
                <div className="div__form">
                    <span className="span__name">Введите то, что вы хотели бы заказать: </span>
                    <div className="indiv__form">
                        <input className="input__form" type="text" onChange={(e) => setOrder(e.target.value)} />
                    </div>
                </div>
                <div className="div__form">
                    <button className="div__button" onClick={entering}>Заказать</button>
                </div>
            </div>
        </div>
    );
};

export default ModalOrder;