const express = require('express')
const router = express.Router()
const authenticateUser = require('../app/middlewares/authendification')
const { upload } = require('../app/middlewares/multer')

const usersController = require('../app/controllers/userscontroller')
const profileController = require('../app/controllers/profilecontroller')
const postController = require('../app/controllers/postController')


router.post('/register', usersController.register)
router.post('/login', usersController.login)
router.get('/account', authenticateUser, usersController.show)
router.delete('/logout', authenticateUser, usersController.logout)
router.post('/add/:id', authenticateUser, usersController.add)
router.post('/accept/:id', authenticateUser, usersController.accept)
router.post('/cancel/:id', authenticateUser,usersController.cancelreq)
router.post('/remove/:id', authenticateUser, usersController.remove)



router.post('/profile', authenticateUser, profileController.create)
router.get('/profile', authenticateUser, profileController.list)
router.put('/profile/:id', authenticateUser, profileController.update)
router.delete('/profile/:id', authenticateUser, profileController.destroy)

router.post('/posts', authenticateUser, upload.single('post-img'), postController.create)
router.get('/posts', authenticateUser, postController.list)
router.delete('/posts/:id', authenticateUser, postController.destroy)

module.exports = router