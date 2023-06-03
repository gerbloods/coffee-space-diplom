const {Router}= require('express')
const router = new Router()
const adminController = require('../controllers/adminController')

router.post("/addAdmin", adminController.createAdmin)
router.get('/checkAdmin', adminController.auth)


module.exports = router