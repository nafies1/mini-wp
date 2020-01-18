const router = require('express').Router()
const Article = require('../controllers/articleController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

// router.post('/upload',
//   files.multer.single('file'),
//   files.sendUploadToGCS,
//   (req, res) => {
//     res.send({
//       status: 200,
//       message: 'Your file is successfully uploaded',
//       link: req.file.cloudStoragePublicUrl
//     })
//   })

router.get('/', Article.readAll)
router.use(authentication)

router.post('/', Article.create)
router.use('/:id', authorization)

router.get('/:id', Article.read)
router.put('/:id', Article.update)
router.patch('/:id', Article.publish)
router.delete('/:id', Article.delete)

module.exports = router