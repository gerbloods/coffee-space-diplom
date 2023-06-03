import axios from "axios"
import { serverPort } from "../const"

const $host = axios.create({
	baseURL: serverPort
})

export const reserveFunction = async (fio, number, places) => {
    const {data} = await $host.post('/api/booking/postBooking', {fio, number, places})
    return data
}