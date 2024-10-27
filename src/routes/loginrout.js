const express = require('express');
const { singnup, login } = require('../controller/login.controller');
const route = express.Router()

route.get('/', login)
route.post('/' , singnup);

module.exports = route;