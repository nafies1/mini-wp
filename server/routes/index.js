const router = require('express').Router()
const userRoute = require('./users')
const articleRoute = require('./articles')

router.get('/', (req, res)=>{
    res.status(200).json('Welcome to mini WP server. For further information, please contact Us at nafies1')
})

router.use('/user', userRoute)
router.use('/article', articleRoute)

router.use('*', (req, res)=>{
    res.status(404).json('Route not found')
})

module.exports = router