const router = require('express').Router()
const User = require('../controllers/userController')
const userAuthorization = require('../middlewares/userAuthorization')
const authentication = require('../middlewares/authentication')

router.get('/', User.getUsers)
router.post('/register', User.register)
router.post('/login', User.login)
router.post('/google-sign', User.googleSign)
router.get('/:id', User.getOneUser)

router.use(authentication)
router.use('/:id', userAuthorization)
router.put('/:id', User.updateUser)
router.patch('/:id', User.changePassword)
router.delete('/:id', User.deleteUser)

module.exports = router