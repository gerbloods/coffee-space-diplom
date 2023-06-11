const sequelize = require('../db')
const ApiError = require('../error/apiError')
const { Admin } = require('../models/models') 
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

class AdminController {

    async createAdmin (req, res, next) {
        try {
            const { admin, password } = req.body
            const hashPassword = await bcrypt.hash(password, 5)
            const add = await Admin.create({admin, password: hashPassword})
            return res.json(add)
        } catch (error) {
            return next(ApiError.badRequest('Что-то пошло не так :('))
        }
    }

    async auth (req, res, next) {
        console.log('124')
        try {
            console.log(req.body)
            const {admin, password} = req.body
        if(!admin || !password) {
            return next(ApiError.badRequest('Данные введены неккоректно'))
        }
        const getDataUser = await Admin.findOne({ where: {admin} })
            if(getDataUser.password == password) {
                const jwtadmin = getDataUser.admin
                const token = jwt.sign(
                    {
                        jwtadmin
                    },
                    process.env.SECRET_WORD,
                    {
                        expiresIn: "24h"
                    }
                )
                return res.send([true, {token}])
            } else {
                return next(ApiError.badRequest('Пароль введен неправильно'))
            }
        } catch (error) {
            return next(ApiError.badRequest('Что-то пошло не так :('))
        }
    }
}

module.exports = new AdminController()