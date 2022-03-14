const router = require('express').Router()

const hfController = require('../controllers/hf.controller')

router.get("/", hfController.hfImplement)

router.get("/province", hfController.hfImplementProvince)
router.get("/palika", hfController.hfImplementPalika)

router.get("/month", hfController.hfImplementMonth)
router.get("/all", hfController.hfImplementAll)

module.exports = { hfRouter: router }