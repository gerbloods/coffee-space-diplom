const Router = require('express')
const postsController = require('../controllers/postsController')
const router = new Router()

router.get('/getPosts', postsController.getPosts)
// router.post('/addPhoto', postsController.addPhotoes)
router.post('/addPost', postsController.addPost)

module.exports = router