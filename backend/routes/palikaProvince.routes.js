const router = require('express').Router()

const palikaProvinceController = require('../controllers/palikaProvince.controller')

router.get("/", palikaProvinceController.PalikaProvince)

module.exports = { palikaProvinceRouter: router }