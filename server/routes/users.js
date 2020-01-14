const router = require('express').Router()
const User = require('../controllers/userController')

router.get('/', User.getUsers)
router.post('/register', User.register)
router.post('/login', User.login)
router.post('/google-sign', User.googleSign)

module.exports = router