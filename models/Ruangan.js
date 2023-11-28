const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    ruangan: {
        type: String,
        required: [true, 'Silahkan isi lokasi ruangan'],
        unique: true
    },
    class: {
        type: String,
        required: [true, 'Silahkan isi jenis kelas'],
    },
    meja: {
        type: Number,
        required: [true, 'Silahkan isi jumlah meja'],
    },
    kursi: {
        type: Number,
        required: [true, 'Silahkan isi jumlah kursi'],
    },
    papantls: {
        type: Number,
        required: [true, 'Silahkan isi jumlah papan tulis'],
    }
})

module.exports = mongoose.model('Ruangan', UserSchema)