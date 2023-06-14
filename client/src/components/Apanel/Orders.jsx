import React from 'react';

const Orders = ({orders}) => {
    return (
        <div className='logged'>
                <p>id: {orders.id_order}</p>
                <p>ФИО: {orders.fio}</p>
                <p>Номер покупателя: {orders.number}</p>
                <p>Заказ: {orders.order}</p>
                {orders.phoned === false && (
                    <p>Обзвонен: Нет</p>
                )}
                {orders.phoned && (
                    <p>Обзвонен: Да</p>
                )}
                {orders.ordering === false && (
                    <p>Забронирован: Нет</p>
                )}
                {orders.ordering && (
                    <p>Забронирован: Да</p>
                )}
        </div>
    );
};

export default Orders;