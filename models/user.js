const mongoose = require('mongoose')

const User = mongoose.model('User', new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    pic: {type:String, required:true, default: '/image/user-profile/default.webp'},
    password: {type:String, required:true},
}, {timestamps:true}))

module.exports = User