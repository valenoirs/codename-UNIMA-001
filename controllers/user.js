const User = require('../models/user')

const comparePassword = require('../utils/comparePassword')

module.exports.login = async (req, res) => {
    try{
        const {email, password} = req.body

        const user = await User.findOne({email})

        if(!user) {
            console.log('User not found!')
            req.flash('error', 'Email tidak ditemukan!')
            return res.redirect('back')
        }

        const isValid = comparePassword(password, user.password)

        if(!isValid) {
            console.log('Password invalid!')
            req.flash('error', 'Password salah!')
            return res.redirect('back')
        }

        req.session.userId = user.id
        req.session.userName = user.name
        req.session.userEmail = user.email

        console.log('User logged in')
        return res.redirect('/')
    }
    catch (e) {
        console.error('login-error', error)
        req.flash('error', 'Login Error!')
        return res.redirect('back')
    }
}

exports.logout = (req, res) => {
    try{
        delete req.session.userId
        delete req.session.userName
        delete req.session.userEmail

        console.log('User logged out!')
        return res.redirect('/')
    }
    catch(e){
        console.error('logout-error', error)
        req.flash('error', 'Logout Error!')
        return res.redirect('/logout')
    }
}