const router = require('express').Router()

const ceoncController = require('../controllers/ceonc.controller')

router.get("/qualitydomain", ceoncController.CeoncQualityDomain)
router.get("/signalfunction", ceoncController.CeoncSignalFunction)
router.get("/qualitydomain/year", ceoncController.CeoncQualityDomainYear)
router.get("/signalfunction/year", ceoncController.CeoncSignalFunctionYear)
router.get("/qualitydomain/province", ceoncController.CeoncQualityDomainProvince)
router.get("/signalfunction/province", ceoncController.CeoncSignalFunctionProvince)
router.get("/qualitydomain/palika", ceoncController.CeoncQualityDomainPalika)
router.get("/signalfunction/palika", ceoncController.CeoncSignalFunctionPalika)

module.exports = { ceoncRouter: router }