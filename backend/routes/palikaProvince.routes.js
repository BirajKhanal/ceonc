const router = require('express').Router()

const palikaProvinceController = require('../controllers/palikaProvince.controller')

router.get("/", palikaProvinceController.PalikaProvince)
router.get("/robson", palikaProvinceController.PalikaProvinceRobson)

module.exports = { palikaProvinceRouter: router }