const express = require('express');
const { addBill, showBills } = require('../controller/supplierBillingController');
const billingRoute = express.Router()

billingRoute.get('/addbill', showBills)
billingRoute.post('/addbill', addBill)

module.exports = billingRoute;