const router = require('express').Router()

const ceoncController = require('../controllers/ceonc.controller')

router.get("/qualitydomain", ceoncController.CeoncQualityDomain)
router.get("/signalfunction", ceoncController.CeoncSignalFunction)

router.get("/qualitydomain/all", ceoncController.CeoncQualityDomainAll)
router.get("/signalfunction/all", ceoncController.CeoncSignalFunctionAll)

router.get("/qualitydomain/year", ceoncController.CeoncQualityDomainYear)
router.get("/signalfunction/year", ceoncController.CeoncSignalFunctionYear)

router.get("/qualitydomain/month", ceoncController.CeoncQualityDomainMonth)
router.get("/signalfunction/month", ceoncController.CeoncSignalFunctionMonth)

router.get("/qualitydomain/province", ceoncController.CeoncQualityDomainProvince)
router.get("/signalfunction/province", ceoncController.CeoncSignalFunctionProvince)

router.get("/qualitydomain/palika", ceoncController.CeoncQualityDomainPalika)
router.get("/signalfunction/palika", ceoncController.CeoncSignalFunctionPalika)

router.post("/qualitydomain/filter", ceoncController.CeoncQualityDomainFilter)
router.post("/signalfunction/filter", ceoncController.CeoncSignalFunctionFilter)

module.exports = { ceoncRouter: router }