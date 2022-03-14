const router = require('express').Router()

const hfController = require('../controllers/hf.controller')

router.get("/", hfController.hfImplement)
router.get("/province", hfController.hfImplementProvince)
router.get("/palika", hfController.hfImplementPalika)

module.exports = { hfRouter: router }