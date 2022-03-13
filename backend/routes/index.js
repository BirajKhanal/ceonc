const router = require('express').Router()

const { bebeoncRouter } = require("./bebeonc.routes")
const { ceoncRouter } = require("./ceonc.routes")
const { hfRouter } = require("./hf.routes")

router.use('/bebeonc', bebeoncRouter)
router.use('/ceonc', ceoncRouter)
router.use('/hf', hfRouter)


module.exports = router