const express = require('express');
const { singnup, login } = require('../controller/login.controller');
const isAuth = require('../authmiddleware');
const route = express.Router()

route.get('/',login)
route.post('/signup' , singnup);
route.get('/logout',)

module.exports = route;