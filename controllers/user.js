const comparePassword = require('../utils/comparePassword')
const User = require('../models/user')

module.exports.login = async (req, res) => {
    try{
        const {email, password} = req.body

        const user = await User.findOne({email})

        if(!user) {
            console.log('User not found!')
            req.flash('error', 'Email tidak ditemukan!')
            return res.redirect('/')
        }

        const isValid = comparePassword(password, user.password)

        if(!isValid) {
            console.log('Password invalid!')
            req.flash('error', 'Password salah!')
            return res.redirect('/')
        }

        req.session.userId = user.id
        req.session.userName = user.name
        req.session.userEmail = user.email
        req.session.userPic = user.pic

        console.log('User logged in')
        return res.redirect('/')
    }
    catch (e) {
        console.error('login-error', e)
        req.flash('errer', 'Login Error!')
        return res.redirect('/')
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
        console.error('logout-error', e)
        req.flash('error', 'Logout Error!')
        return res.redirect('/')
    }
}

exports.upload = async (req, res) => {
    try {
        const {filename, destination} = req.file
        const {userId} = req.session

        await User.updateOne({id:userId}, {
            $set: {
                pic: `${destination.slice(8)}/${filename}`
            }
        })

        req.session.userPic = `${destination.slice(8)}/${filename}`

        console.log('user profile updated')
        req.flash('error', 'Profil user berhasil diubah.')
        return res.redirect('/')

    }
    catch (e) {
        console.error('upload-error', e)
        req.flash('error', 'File tidak sesuai')
        return res.redirect('/')
    }
}