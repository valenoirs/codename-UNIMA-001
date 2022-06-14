const mongoose = require('mongoose')

const User = mongoose.model('User', new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
}, {timestamps:true}))

module.exports = User