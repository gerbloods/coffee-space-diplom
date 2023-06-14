import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import './Apanel.css';
import { addPostFunction, authFunction, getBookingFunction, getOrderFunction, updateBookingFunction, updateOrderingFunction, updatePhonedFunction, updatePhonedOrderFunction } from '../../queries/mainQuery';
import { Context } from '../..';
import { useNavigate } from 'react-router-dom';
import { ADMIN_PANEL } from '../../const';
import Bookings from './Bookings';
import Orders from './Orders';


const Apanel = () => {

    const [reservePhoned, setReservePhoned] = useState('')
    const [enterReserve, setEnterReserve] = useState('')
    const [orderPhoned, setOrderPhoned] = useState('')
    const [enterOrder, setEnterOrder] = useState('')
    const [namePost, setNamePost] = useState('')
    const [descriptionPost, setDescriptionPost] = useState('')
    const [photoPost, setPhotoPost] = useState(null)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const { user } = useContext(Context)
    const navigate = useNavigate()    


    const formAuth = async () => {
        try {
            const object = await authFunction(login, password)
            if (object) {
                user.setIsAuth(true)
                navigate(ADMIN_PANEL)
            }
        } catch (e) {
            alert('Неправильное заполнение данных')
        }
    }

    const formReservePhoned = async () => {
        try {
            const object = await updatePhonedFunction(reservePhoned)
            alert(object.message)
            return (
                <div className='messageDiv'>
                    <span className='textMessage'>{object.message}</span>
                </div>
                )
        } catch (e) {
            alert('Неправильное заполнение данных')
        }
    }

    const formEnterReserve = async () => {
        try {
            const object = await updateBookingFunction(enterReserve)
            alert(object.message)
            return (
                <div className='messageDiv'>
                    <span className='textMessage'>{object.message}</span>
                </div>
                )
        } catch (e) {
            alert('Неправильное заполнение данных')
        }
    }

    const formOrderPhoned = async () => {
        try {
            const object = await updatePhonedOrderFunction(orderPhoned)
            alert(object.message)
            return (
                <div className='messageDiv'>
                    <span className='textMessage'>{object.message}</span>
                </div>
                )
        } catch (e) {
            alert('Неправильное заполнение данных')
        }
    }

    const formOrdering = async () => {
        try {
            const object = await updateOrderingFunction(enterOrder)
            alert(object.message)
            return (
                <div className='messageDiv'>
                    <span className='textMessage'>{object.message}</span>
                </div>
                )
        } catch (e) {
            alert('Неправильное заполнение данных')
        }
    }

    const setFile = (e) => {
        setPhotoPost(e.target.files[0]);
    }

    const formAddPost = async () => {
        try {
            const formdata = new FormData()
            formdata.append("name", namePost)
            formdata.append("description", descriptionPost)
            formdata.append("file", photoPost)
            const object = await addPostFunction(formdata)
            alert(object.message)
        } catch (e) {
            alert('Неправильное заполнение данных')
        }

    }

    const [booking, setBooking] = useState([])
    const {bookings} = useContext(Context)


    useEffect(() => {
        getBookingFunction().then((data) => {
          setBooking(data);
        });
      }, [bookings]);

    const [order, setOrder] = useState([])
    const {orders} = useContext(Context)


    useEffect(() => {
        getOrderFunction().then((data) => {
          setOrder(data);
        });
      }, [orders]);


    return (
        <div>
            {user._isAuth === false && (
                <div>
                     <div className='modal__content'>
                        <span className="reserve__text">Авторизация</span>
                        <div className="div__form">
                            <span className="span__name">Введите логин: </span>
                            <div className="indiv__form">
                                <input className="input__form" type="text"  onChange={(e) => setLogin(e.target.value)}/>
                            </div>
                        </div>
                        <div className="div__form">
                            <span className="span__name">Введите пароль </span>
                            <div className="indiv__form">
                                <input className="input__form" type="text" onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div className="div__form">
                            <button type='button' className="div__button" onClick={formAuth}>Авторизоваться</button>
                        </div>
                    </div>
                </div>
            )}
            {user._isAuth && (
                <div>
                    <Header />
                    <div className="checking__text">
                        <h1>Панель управления</h1>
                    </div>
                    <div className="info__booking__text">
                        <h3>Заполнение данных формы бронирования</h3>
                    </div>
                    <div className="form__reserve">
                        <span className="reserve__text span">Обзвон клиентов</span>
                        <div className="div__form">
                        <span className="span__name span">Введите номер брони: </span>
                        <div className="indiv__form">
                            <input className="input__form" type="text" onChange={(e) => setReservePhoned(e.target.value)} />
                        </div>
                        </div>
                        <div className="div__form">
                        <button className="div__button" onClick={formReservePhoned}>Пометить</button>
                        </div>
                    </div>
                    <div className="form__reserve">
                        <span className="reserve__text span">Подтвердить бронирование места</span>
                        <div className="div__form">
                        <span className="span__name span">Введите номер брони: </span>
                        <div className="indiv__form">
                            <input className="input__form" type="text" onChange={(e) => setEnterReserve(e.target.value)} />
                        </div>
                        </div>
                        <div className="div__form">
                        <button className="div__button" onClick={formEnterReserve}>Подтвердить</button>
                        </div>
                    </div>
                    <div className="info__order__text">
                        <h3>Заполнение данных формы онлайн заказа</h3>
                    </div>
                    <div className="form__reserve">
                        <span className="reserve__text span">Обзвон клиентов</span>
                        <div className="div__form">
                        <span className="span__name span">Введите номер заказа: </span>
                        <div className="indiv__form">
                            <input className="input__form" type="text" onChange={(e) => setOrderPhoned(e.target.value)}/>
                        </div>
                        </div>
                        <div className="div__form">
                        <button className="div__button" onClick={formOrderPhoned}>Пометить</button>
                        </div>
                    </div>
                    <div className="form__reserve">
                        <span className="reserve__text span">Подтвердить заказ</span>
                        <div className="div__form">
                        <span className="span__name span">Введите номер заказа: </span>
                        <div className="indiv__form">
                            <input className="input__form" type="text" onChange={(e) => setEnterOrder(e.target.value)}/>
                        </div>
                        </div>
                        <div className="div__form">
                        <button className="div__button" onClick={formOrdering}>Подтвердить</button>
                        </div>
                    </div>
                    <div className="info__order__text">
                        <h3>Добавление новостного поста</h3>
                    </div>
                    <div className="form__reserve">
                        <span className="reserve__text span">Добавить пост</span>
                        <div className="div__form">
                        <span className="span__name span">Введите название поста: </span>
                        <div className="indiv__form">
                            <input className="input__form" type="text" onChange={(e) => setNamePost(e.target.value)} />
                        </div>
                        <span className="span__name span">Введите содержимое поста: </span>
                        <div className="indiv__form">
                            <input className="input__form" type="text" onChange={(e) => setDescriptionPost(e.target.value)}/>
                        </div>
                        <span className="span__name span">Прикрепите фото: </span>
                        <div className="indiv__form">
                            <input className="input__form" type="file" onChange={setFile}/>
                        </div>
                        </div>
                        <div className="div__form">
                        <button className="div__button" onClick={formAddPost}>Подтвердить</button>
                        </div>
                    </div>
                    <div className="space" />
                    <div className="info__sector">
                            <div className="info__booking">
                                <h3>Лог бронирования</h3>
                                <div className='scroll'>
                                    {booking.map((bookings) => (
                                    <Bookings bookings={bookings}  key={bookings.id_booking}/>
                                    ))}
                                </div>
                                
                            </div>
                        <div className="info__order">
                            <h3>Лог заказов</h3>
                            <div className='scroll'>
                            {order.map((orders) => (
                                <Orders orders={orders} key={orders.id_order} />
                            ))}
                            </div>
                            
                        </div>
                    </div>
                </div>
            )}
            
        </div>
    );
};

export default Apanel;