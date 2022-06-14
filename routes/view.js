const router = require('express').Router()

const Agenda = require('../models/agenda')

router.get('/', async (req, res) => {
        const agenda = await Agenda.find();

        res.render('user/index', {title: 'Home', layout: 'user/layout/main', error: req.flash('error'), agenda})
})

module.exports = router