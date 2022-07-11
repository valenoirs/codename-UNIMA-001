const router = require('express').Router()

const Agenda = require('../models/agenda')

router.get('/', async (req, res) => {
    const agenda = await Agenda.find();

    res.render('user/index', {title: 'Home', layout: 'user/layout/main', error: req.flash('error'), agenda})
})

router.get('/:id', async (req, res, next) => {
    if(!req.session.userId){
        res.redirect('/')
    }
    else{
        try {
            const agenda = await Agenda.findById(req.params.id)
    
            if(!agenda){
                console.log('agenda not found!')
                req.flash('error', 'Agenda tidak ditemukan.')
                return res.redirect('/')
            }
    
            res.render('user/detail', {title: agenda.name, layout: 'user/layout/main', error: req.flash('error'), agenda})
        } catch (error) {
            console.error('agenda not found!', error)
            req.flash('error', 'Agenda tidak ditemukan.')
            return res.redirect('/')
        }
    }
})

module.exports = router