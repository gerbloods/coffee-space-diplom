import React from 'react';
import './Bookings.css'

const Bookings = ({bookings}) => {
    return (
        <div className='logged'>
           
                <p>ФИО: {bookings.fio}</p>
                <p>Номер покупателя: {bookings.number}</p>
                <p>Количество мест: {bookings.places}</p>
                {bookings.phoned === false && (
                    <p>Обзвонен: Нет</p>
                )}
                {bookings.phoned && (
                    <p>Обзвонен: Да</p>
                )}
                {bookings.booking === false && (
                    <p>Забронирован: Нет</p>
                )}
                {bookings.booking && (
                    <p>Забронирован: Да</p>
                )}
        </div>
    );
};

export default Bookings;