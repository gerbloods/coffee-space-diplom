import React, { useState } from 'react';
import './Modal.css';
import { reserveFunction } from '../../queries/mainQuery';


const Modal = ({active, setActive}) => {
    
    const [fio, setFio] = useState('')
    const [number, setNumber] = useState('')
    const [places, setPlaces] = useState('')
    
    const entering = async () => {
            try {
                const object = await reserveFunction(fio, number, places)
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
                <span class="reserve__text">Забронировать</span>
                <div class="div__form">
                    <span class="span__name">Имя и фамилия: </span>
                    <div class="indiv__form">
                        <input class="input__form" type="text" onChange={(e) => setFio(e.target.value)} />
                    </div>
                </div>
                <div class="div__form">
                    <span class="span__name">Номер телефона: </span>
                    <div class="indiv__form">
                        <input class="input__form" type="text" onChange={(e) => setNumber(e.target.value)} />
                    </div>
                </div>
                <div class="div__form">
                    <span class="span__name">Количество гостей: </span>
                    <div class="indiv__form">
                        <input class="input__form" type="text" onChange={(e) => setPlaces(e.target.value)} />
                    </div>
                </div>
                <div class="div__form">
                    <button type='button' class="div__button" onClick={entering}>Забронировать</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;