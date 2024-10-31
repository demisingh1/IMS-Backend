const express = require('express');
const { addBill, showBills } = require('../controller/billingController');
const billingRoute = express.Router()

billingRoute.get('/addbill', showBills)
billingRoute.post('/addbill', addBill)

module.exports = billingRoute;