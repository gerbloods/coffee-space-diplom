const Router = require('express')
const bookingController = require('../controllers/bookingController')
const router = new Router()

router.post('/postBooking', bookingController.postBooking)
router.post('/updateBooking', bookingController.updateBooking)
router.post('/updatePhoned', bookingController.updatePhoned)
router.get('/getBooking', bookingController.getBooking)


module.exports = router