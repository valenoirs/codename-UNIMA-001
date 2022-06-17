const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/image/user-profile')
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + path.extname(file.originalname))
    }
})

const multerOption = {
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.webp' && ext !== '.jpeg') {
            return callback(null, false)
        }
        callback(null, true)
    },
    storage
}

const upload = multer(multerOption)

module.exports = upload