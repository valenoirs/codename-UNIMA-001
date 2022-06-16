const router = require('express').Router()
const AgendaController = require('../controllers/agenda')

router.route('/')
.post(AgendaController.addAgenda)
.put(AgendaController.updateStatusAgenda)
.patch(AgendaController.editAgenda)
.delete(AgendaController.deleteAgenda)

module.exports = router