const express = require('express')
const IntrestRouter = express.Router()
const ShowInrest = require('../../controllers/ShowIntrest')

IntrestRouter.get('/intrest', ShowInrest)


module.exports = IntrestRouter
