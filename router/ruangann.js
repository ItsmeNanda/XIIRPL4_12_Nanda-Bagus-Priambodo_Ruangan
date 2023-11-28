const express = require('express')
const router = express.Router()

const usercontroller = require('../controller/ruangan')

router.get('/ruangann', usercontroller.index)

router.get('/ruangan/:id', usercontroller.show)

router.post('/ruangann', usercontroller.store)

router.put('/ruangan/:id', usercontroller.ubah)

router.delete('/ruangan/:id', usercontroller.hapus)

module.exports = router