const Router = require('express')
const orderController = require('../controllers/orderController')
const router = new Router()

router.get('/getOrder', orderController.getOrder)
router.post('/addOrder', orderController.postOrder)
router.post('/updateOrdering', orderController.updateOrdering)
router.post('/updatePhoned', orderController.updatePhoned)

module.exports = router