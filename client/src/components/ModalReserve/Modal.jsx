import React, { useState } from 'react';
import './Modal.css';
import { reserveFunction } from '../../queries/mainQuery';
import InputMask from 'react-input-mask';


const Modal = ({active, setActive}) => {
    
    const [fio, setFio] = useState('')
    const [number, setNumber] = useState('')
    const [places, setPlaces] = useState('')

    const phoneRegex = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;

    const handleOrder = (fio, number, places) => {
        if (!fio || !number.match(phoneRegex) || !places) {
            alert("Пожалуйста, заполните корректно все обязательные поля");
            return false;
        } else {
            return true;
        }
    }

    const entering = async () => {
            try {
                if(handleOrder(fio, number, places) === true) {
                    const object = await reserveFunction(fio, number, places)
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
                <span className="reserve__text">Забронировать</span>
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
                    <span className="span__name">Количество гостей: </span>
                    <div className="indiv__form">
                        <input className="input__form" type="text" onChange={(e) => setPlaces(e.target.value)} />
                    </div>
                </div>
                <div className="div__form">
                    <button type='button' className="div__button" onClick={entering}>Забронировать</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;