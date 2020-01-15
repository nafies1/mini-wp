const router = require('express').Router()
const Article = require('../controllers/articleController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.get('/', Article.readAll)

router.use(authentication)

router.post('/', Article.create)

router.use('/:id', authorization)

router.get('/:id', Article.read)
// router.put('/:id', Article.update)
// router.patch('/:id', Article.publish)
// router.delete('/:id', Article.delete)

module.exports = router