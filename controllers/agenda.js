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
    try{
        const {name, date, location, message, id} = req.body

        const agenda = await Agenda.findById(id)

        if(!agenda){
            console.error('agenda not found!')
            req.flash('error', 'Agenda yang akan diubah tidak ditemukan.')
            return res.redirect('/')
        }

        await Agenda.findByIdAndUpdate(id, {
            $set: {
                name,
                date,
                location,
                message
            }
        })

        console.log('Agenda edited!')
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
    try{
        const {id} = req.body
        const agenda = await Agenda.findById(id)

        if(!agenda){
            console.error('agenda not found!')
            req.flash('error', 'Agenda yang akan diubah tidak ditemukan.')
            return res.redirect('/')
        }
        
        await Agenda.findByIdAndDelete(id)
        
        console.log('Agenda deleted!')
        req.flash('error', 'Satu agenda berhasil dihapus.')
        return res.redirect('/')
    }
    catch (e) {
        console.error('deleting agenda error!')
        req.flash('error', 'Gagal menghapus agenda, silahkan coba lagi.')
        return res.redirect('/')
    }
}