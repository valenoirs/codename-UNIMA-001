const router = require('express').Router()

const Agenda = require('../models/agenda')

router.get('/', async (req, res) => {
        const agenda = await Agenda.find();

        res.render('user/index', {title: 'Home', layout: 'user/layout/main', error: req.flash('error'), agenda})
})

router.get('/:id', async (req, res) => {
        if(!req.session.userId){
            res.redirect('/')
        }
        else{
			const agenda = await Agenda.findById(req.params.id)
			
			res.render('user/detail', {title: agenda.name, layout: 'user/layout/main', error: req.flash('error'), agenda})
        }
})

module.exports = router