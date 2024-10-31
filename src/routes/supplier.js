const express = require('express');
const { createSupplier } = require('../controller/supplierController');
const supplierRoute = express.Router();

supplierRoute.get('/supplier', createSupplier)


module.exports = supplierRoute