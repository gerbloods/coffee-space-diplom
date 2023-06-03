require("dotenv").config()
const uuid = require("uuid")
const fileUpload = require("express-fileupload")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const sequelize = require("./db")
const path = require("path")
const express = require('express')

const PORT = process.env.PORT
const models = require('./models/models')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, "static")))
app.use(fileUpload())
app.use('/api', router)

app.use(errorHandler)

const start = async () => {
	try{
		await sequelize.authenticate()
		await sequelize.sync()
		app.listen(PORT, () => {
			console.log(`жоска воркаем на ${PORT} порту`)
		})
	}
	catch(e){

	}
}

start()


// export const createFile = async (file) => {
// 	const fileName = uuid.v4() + '.jpg'
// 	file.mv(path.resolve(__dirname, "static", fileName))
// 	return(fileName)
// }
