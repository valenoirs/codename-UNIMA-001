const Agenda = require('../models/agenda')

module.exports.addAgenda = (req, res) => {
    try{
        req.body.author = req.session.userName

        const newAgenda = new Agenda(req.body)

        console.log(newAgenda)
        newAgenda.save()

        console.log('New Agenda added')
        return res.redirect('/')
    }
    catch (e) {
        console.error('adding agenda error!')
        req.flash('error', 'Gagal menambahkan agenda, silahkan coba lagi.')
        return res.redirect('back')
    }
}

exports.editAgenda = async (req, res) => {
    console.log(req.body)
    try{

        req.flash('error', 'Agenda berhasil diubah.')
        return res.redirect('back')
    }
    catch (e) {
        console.error('editing agenda error!')
        req.flash('error', 'Gagal mengubah agenda, silahkan coba lagi.')
        return res.redirect('back')
    }
}

exports.deleteAgenda = async (req, res) => {
    console.log(req.body)
    try{
        
        req.flash('error', 'Satu agenda berhasil diubah.')
        return res.redirect('/')
    }
    catch (e) {
        console.error('deleting agenda error!')
        req.flash('error', 'Gagal menghapus agenda, silahkan coba lagi.')
        return res.redirect('/')
    }
}