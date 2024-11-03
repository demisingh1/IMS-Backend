const express = require('express');
const { addBill, showBills } = require('../controller/supplierBillingController');
const { createBill } = require('../controller/customerBillingController');
const billingRoute = express.Router()

billingRoute.get('/addbill', showBills)
billingRoute.post('/addbill', addBill)
billingRoute.post('/createbills', createBill)

module.exports = billingRoute;