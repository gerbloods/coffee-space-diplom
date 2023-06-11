import React, { useState } from 'react';
import './ModalOrder.css';
import { orderFunction } from '../../queries/mainQuery';

const ModalOrder = ({active, setActive}) => {


    const [fio, setFio] = useState('')
    const [number, setNumber] = useState('')
    const [order, setOrder] = useState('')


    const entering = async () => {
        try {
            const object = await orderFunction(fio, number, order)
            setActive(false)
            console.log(object.message)
            return (
                <div className='messageDiv'>
                    <span className='textMessage'>{object.message}</span>
                </div>
            )
        } catch (error) {
            console.log(error)
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
                        <input className="input__form" type="text" onChange={(e) => setNumber(e.target.value)} />
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