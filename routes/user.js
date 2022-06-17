const router = require('express').Router()
const UserController = require('../controllers/user')

const upload = require('../utils/multer')

router.post('/login', UserController.login)
router.get('/logout', UserController.logout)
router.put('/', upload.single('file'), UserController.upload)

module.exports = router