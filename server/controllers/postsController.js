const sequelize = require('../db')
const uuid = require("uuid")
const path = require("path")
const ApiError = require('../error/apiError')
const { Posts } = require('../models/models')


const createFile = async (file) => {
	const fileName = uuid.v4() + '.jpg'
	file.mv(path.resolve(__dirname, 'static', fileName))
	return(fileName)
}

class PostController {
    async getPosts (req, res, next) {
        try {
            const getData = await Posts.findAll({ order: sequelize.literal('id_post DESC')})
            return res.send(getData)
        } catch (error) {
            return next(ApiError.badRequest('Что-то пошло не так :('))
        }
    }

    // async addPhotoes (req, res, next) {
    //     try {
    //         const file = await createFile(req.files.photo)
    //         console.log(file)
    //         const pushfile = await Photoes.create({file})
    //         return res.json({ message: "Фото успешно добавлено" })
    //     } catch (error) {
    //         return next(ApiError.badRequest('Что-то пошло не так :('))
    //     }
    // }

    async addPost (req, res, next) {
        try {
            const { name, description } = req.body
            const  file  = req.files.file
            if(!name || !description || !file) {
                return next(ApiError.badRequest('Некоторые данные были введены неккоректно'))
            } else {
                const photo = await createFile(file)
                await Posts.create({name, description, photo})
                return res.json({ message: "Пост успешно опубликован" })
            }
        } catch (error) {
            return next(ApiError.badRequest('Что-то пошло не так :('))
        }
    }
}

module.exports = new PostController()