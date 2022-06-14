const router = require('express').Router()

router.get('/', (req, res) => {
    if(!req.session.userId){
        res.redirect('/login')
    }
    else{
        res.render('user/index', {title: 'Home', layout: 'user/layout/main', error: req.flash('error')})
    }
})

router.get('/login', (req, res) => {
    if(!req.session.userId){
        res.render('user/login', {title: 'Login', layout: 'user/layout/main', error: req.flash('error')})
    }
    else{
        res.redirect('/')
    }
})

router.get('/agenda', (req, res) => {
    if(!req.session.userId){
        res.redirect('/login')
    }
    else{
        res.render('user/agenda', {title: 'Agenda', layout: 'user/layout/main', error: req.flash('error')})
    }
})

router.get('/agenda/tambah', (req, res) => {
    if(!req.session.userId){
        res.redirect('/login')
    }
    else{
        res.render('user/tambah', {title: 'Agenda', layout: 'user/layout/main', error: req.flash('error')})
    }
})

module.exports = router