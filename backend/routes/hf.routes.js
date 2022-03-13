const router = require('express').Router()

const hfController = require('../controllers/hf.controller')

router.get("/", hfController.hfImplement)

module.exports = { hfRouter: router }