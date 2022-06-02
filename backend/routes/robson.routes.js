const router = require('express').Router()

const robsonContorller = require('../controllers/robson.controller')

router.get("/csrate", robsonContorller.OverallCSRate)
router.get("/grpsize", robsonContorller.GrpSize)
router.get("/grpcsrate", robsonContorller.GrpCSRate)
router.get("/absolutecsrate", robsonContorller.AbsltCS)
router.get("/delivery", robsonContorller.Delivery)

router.post("/csrate/filter", robsonContorller.OverallCSRateFilter)
router.post("/grpsize/filter", robsonContorller.GrpSizeFilter)
router.post("/grpcsrate/filter", robsonContorller.GrpSizeFilter)
router.post("/absolutecsrate/filter", robsonContorller.AbsltCSFilter)
router.post("/delivery/filter", robsonContorller.DeliveryFilter)

module.exports = { robsonRouter: router }