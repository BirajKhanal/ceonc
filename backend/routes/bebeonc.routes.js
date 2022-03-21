const router = require('express').Router()

const bebeoncController = require('../controllers/bebeonc.controller')

router.get("/qualitydomain", bebeoncController.BcBeoncQualityDomain)
router.get("/signalfunction", bebeoncController.BcBeoncSignalFunction)

router.get("/qualitydomain/all", bebeoncController.BcBeoncQualityDomainAll)
router.get("/signalfunction/all", bebeoncController.BcBeoncSignalFunctionAll)

router.get("/qualitydomain/year", bebeoncController.BcBeoncQualityDomainYear)
router.get("/signalfunction/year", bebeoncController.BcBeoncSignalFunctionYear)

router.get("/qualitydomain/month", bebeoncController.BcBeoncQualityDomainMonth)
router.get("/signalfunction/month", bebeoncController.BcBeoncSignalFunctionMonth)

router.get("/qualitydomain/province", bebeoncController.BcBeoncQualityDomainProvince)
router.get("/signalfunction/province", bebeoncController.BcBeoncSignalFunctionProvince)

router.get("/qualitydomain/palika", bebeoncController.BcBeoncQualityDomainPalika)
router.get("/signalfunction/palika", bebeoncController.BcBeoncSignalFunctionPalika)

router.post("/qualitydomain/filter", bebeoncController.BcBeoncQualityDomainFilter)
router.post("/signalfunction/filter", bebeoncController.BcBeoncSignalFunctionFilter)

module.exports = { bebeoncRouter: router }