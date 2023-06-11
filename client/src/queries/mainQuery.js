import axios from "axios"
import { serverPort } from "../const"

const $host = axios.create({
	baseURL: serverPort
})

export const reserveFunction = async (fio, number, places) => {
    const {data} = await $host.post('/api/booking/postBooking', {fio, number, places})
    return data
}

export const orderFunction = async (fio, number, order) => {
    const {data} = await $host.post('/api/order/addOrder', {fio, number, order})
    return data
}

export const updatePhonedFunction = async (id_booking) => {
    const {data} = await $host.post('/api/booking/updatePhoned', { id_booking })
    return data
}

export const updateBookingFunction = async (id_booking) => {
    const {data} = await $host.post('/api/booking/updateBooking', {id_booking})
    return data
}

export const updatePhonedOrderFunction = async (id_order) => {
    const {data} = await $host.post('/api/order/updatePhoned', {id_order})
    return data
}

export const updateOrderingFunction = async (id_order) => {
    const {data} = await $host.post('/api/order/updateOrdering', {id_order})
    return data
}

export const addPostFunction = async (formdata) => {
    const {data} = await $host.post('/api/post/addPost', formdata)
    return data
}

export const getAllPosts = async () => {
    const {data} = await $host.get('/api/post/getPosts')
    return data
}

export const authFunction = async (admin, password) => {
    const {data} = await $host.post('/api/admin/checkAdmin', {admin, password})
    if(data[0] === true) {
		localStorage.setItem("token", data[1].token)
		return true
	}else{
		alert("Не правильный логин или пароль")
		return false
	}
}