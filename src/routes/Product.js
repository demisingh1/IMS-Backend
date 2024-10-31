const express = require('express');
const { getAllProducts, addProduct } = require('../controller/product.controller');
const prodRoutes = express.Router()

prodRoutes.get('/products', getAllProducts)
prodRoutes.post('/products', addProduct)

module.exports = prodRoutes