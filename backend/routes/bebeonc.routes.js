const router = require('express').Router()

const bebeoncController = require('../controllers/bebeonc.controller')

router.get("/qualitydomain", bebeoncController.BcBeoncQualityDomain)
router.get("/signalfunction", bebeoncController.BcBeoncSignalFunction)
router.get("/qualitydomain/year", bebeoncController.BcBeoncQualityDomainYear)
router.get("/signalfunction/year", bebeoncController.BcBeoncSignalFunctionYear)
router.get("/qualitydomain/province", bebeoncController.BcBeoncQualityDomainProvince)
router.get("/signalfunction/province", bebeoncController.BcBeoncSignalFunctionProvince)
router.get("/qualitydomain/palika", bebeoncController.BcBeoncQualityDomainPalika)
router.get("/signalfunction/palika", bebeoncController.BcBeoncSignalFunctionPalika)

module.exports = { bebeoncRouter: router }