import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import './Apanel.css';
import { addPostFunction, authFunction, updateBookingFunction, updateOrderingFunction, updatePhonedFunction, updatePhonedOrderFunction } from '../../queries/mainQuery';
import { Context } from '../..';

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
    


    const formAuth = async () => {
        try {
            const object = await authFunction(login, password)
            if (object) {
                user.setIsAuth(true)
                console.log(user._isAuth)
            }
            return (
                <div className='messageDiv'>
                    <span className='textMessage'>{object.message}</span>
                </div>
                )
        } catch (e) {
            console.log(e)
        }
    }

    const formReservePhoned = async () => {
        try {
            const object = await updatePhonedFunction(reservePhoned)
            console.log(object.message)
            return (
                <div className='messageDiv'>
                    <span className='textMessage'>{object.message}</span>
                </div>
                )
        } catch (e) {
            console.log(e)
        }
    }

    const formEnterReserve = async () => {
        try {
            const object = await updateBookingFunction(enterReserve)
            console.log(object.message)
            return (
                <div className='messageDiv'>
                    <span className='textMessage'>{object.message}</span>
                </div>
                )
        } catch (e) {
            console.log(e)
        }
    }

    const formOrderPhoned = async () => {
        try {
            const object = await updatePhonedOrderFunction(orderPhoned)
            console.log(object.message)
            return (
                <div className='messageDiv'>
                    <span className='textMessage'>{object.message}</span>
                </div>
                )
        } catch (e) {
            console.log(e)
        }
    }

    const formOrdering = async () => {
        try {
            const object = await updateOrderingFunction(enterOrder)
            console.log(object.message)
            return (
                <div className='messageDiv'>
                    <span className='textMessage'>{object.message}</span>
                </div>
                )
        } catch (e) {
            console.log(e)
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
            console.log(object.message)
        } catch (e) {
            console.log(e)
        }

    }

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
            )}
            
        </div>
    );
};

export default Apanel;