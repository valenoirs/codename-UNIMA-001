const router = require('express').Router()
const AgendaController = require('../controllers/agenda')

router.route('/').post(AgendaController.addAgenda)

module.exports = router