const {Router} = require('express')
const router = new Router()
const adminRouter = require('./adminRouter')
const bookingRouter = require('./bookingRouter')
const postsRouter = require('./postsRouter')
const orderRouter = require('./orderRouter')

router.use('/admin', adminRouter)
router.use('/booking', bookingRouter)
router.use('/post', postsRouter)
router.use('/order', orderRouter)

module.exports = router