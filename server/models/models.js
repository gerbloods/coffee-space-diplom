const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Admin = sequelize.define('admins', {
    admin: {type: DataTypes.STRING, primaryKey: true},
    password: {type: DataTypes.STRING}
})

const Booking = sequelize.define('booking', {
    id_booking: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fio:  {type: DataTypes.STRING},
    number:  {type: DataTypes.STRING},
    places:  {type: DataTypes.INTEGER, defaultValue: "1"},
    booking: {type: DataTypes.BOOLEAN, defaultValue: false},
    phoned: {type: DataTypes.BOOLEAN, defaultValue: false}
})

const OrderGo = sequelize.define('ordergoe', {
    id_order: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fio:  {type: DataTypes.STRING},
    number:  {type: DataTypes.STRING},
    order:  {type: DataTypes.STRING, defaultValue: "Информация уточняется по телефону"},
    ordering: {type: DataTypes.BOOLEAN, defaultValue: false},
    phoned: {type: DataTypes.BOOLEAN, defaultValue: false}
})


const Posts = sequelize.define('posts', {
    id_post: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:  {type: DataTypes.STRING},
    description:  {type: DataTypes.STRING},
    photo: {type: DataTypes.STRING}
})
// const Posts = sequelize.define('posts', {
//     id_post: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     name:  {type: DataTypes.STRING},
//     description:  {type: DataTypes.STRING}
// })

// const Photoes = sequelize.define('photoes', {
//     id_photo: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     photo:  {type: DataTypes.STRING}
// }) 



// Photoes.hasMany(Posts)
// Posts.belongsTo(Photoes)

module.exports = {
    Admin, Booking, OrderGo, Posts
}