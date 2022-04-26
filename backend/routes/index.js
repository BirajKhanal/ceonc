const router = require('express').Router()

const { bebeoncRouter } = require("./bebeonc.routes")
const { ceoncRouter } = require("./ceonc.routes")
const { hfRouter } = require("./hf.routes")
const { palikaProvinceRouter } = require("./palikaProvince.routes")
const { robsonRouter } = require("./robson.routes")

router.use('/bebeonc', bebeoncRouter)
router.use('/ceonc', ceoncRouter)
router.use('/hf', hfRouter)
router.use('/palikaprovince', palikaProvinceRouter)
router.use('/robson', robsonRouter)


module.exports = router