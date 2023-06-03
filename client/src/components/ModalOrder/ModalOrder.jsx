import React from 'react';
import './ModalOrder.css';

const ModalOrder = ({active, setActive}) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className='modal__content' onClick={e => e.stopPropagation()}>
                <span class="reserve__text">Заказать онлайн</span>
                <div class="div__form">
                    <span class="span__name">Имя и фамилия: </span>
                    <div class="indiv__form">
                        <input class="input__form" type="text" />
                    </div>
                </div>
                <div class="div__form">
                    <span class="span__name">Номер телефона: </span>
                    <div class="indiv__form">
                        <input class="input__form" type="text" />
                    </div>
                </div>
                <div class="div__form">
                    <span class="span__name">Введите то, что вы хотели бы заказать: </span>
                    <div class="indiv__form">
                        <input class="input__form" type="text" />
                    </div>
                </div>
                <div class="div__form">
                    <button class="div__button">Забронировать</button>
                </div>
            </div>
        </div>
    );
};

export default ModalOrder;