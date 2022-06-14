const mongoose = require('mongoose')

const Agenda = mongoose.model('Agenda', new mongoose.Schema({
    name: {type:String, required:true},
    date: {type:Date, required:true},
    status: {type:String, required:true, default:'Belum Dimulai'},
    location: {type:String, required:true},
    author: {type:String, required:true},
    message: {type:String, default:''},
}, {timestamps:true}))

module.exports = Agenda