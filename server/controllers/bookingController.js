const sequelize = require('../db')
const ApiError = require('../error/apiError')
const { Booking } = require('../models/models')


class BookingController {
    async getBooking (req, res, next) {
        try {
            const getData = await Booking.findAll({ order: sequelize.literal('id_booking DESC')})
            return res.send(getData)
        } catch (error) {
            return next(ApiError.badRequest('Что-то пошло не так :('))
        }
    }

    async postBooking (req, res, next) {
        try {
            const { fio, number, places } = req.body
            if(!fio || !number || !places) {
                return next(ApiError.badRequest('Некоторые данные были введены неккоректно'))
            } else {
                await Booking.create({fio, number, places})
                return res.json({ message: 'Обращение успешно создано'})
            }
        } catch (error) {
            return next(ApiError.badRequest('Что-то пошло не так :('))
        }
    }

    async updateBooking (req, res, next) {
        try {
            const { id_booking } = req.body
            if(!id_booking) {
                return next(ApiError.badRequest('Некоторые данные были введены неккоректно'))
            } else {
                const checkBooking = await Booking.findOne({ where: {id_booking}})
                if(checkBooking.booking) {
                    return next(ApiError.badRequest('Клиент уже забронировал столик'))
                } else {
                    await Booking.update({booking: true}, {where: {id_booking}})
                    return res.json({ message: 'Успешно забронировано'})
                }
            }
        } catch (error) {
            return next(ApiError.badRequest('Что-то пошло не так :('))
        }
    }

    async updatePhoned (req, res, next) {
        try {
            const { id_booking } = req.body
            if(!id_booking) {
                return next(ApiError.badRequest('Некоторые данные были введены неккоректно'))
            } else {
                const checkBooking = await Booking.findOne({ where: {id_booking}})
                if(checkBooking.phoned) {
                    return next(ApiError.badRequest('Клиента уже обзвонили'))
                } else {
                    await Booking.update({phoned: true}, {where: {id_booking}})
                    return res.json({ message: 'Успешно'})
                }
            }
        } catch (error) {
            return next(ApiError.badRequest('Что-то пошло не так :('))
        }
    }
}

module.exports = new BookingController()