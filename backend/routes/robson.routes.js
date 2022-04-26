const router = require('express').Router()

const robsonContorller = require('../controllers/robson.controller')

router.get("/csrate", robsonContorller.OverallCSRate)
router.get("/grpsize", robsonContorller.GrpSize)
router.get("/grpcsrate", robsonContorller.GrpSize)
router.get("/absolutecsrate", robsonContorller.AbsltCS)
router.get("/delivery", robsonContorller.Delivery)

module.exports = { robsonRouter: router }