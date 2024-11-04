const express = require('express');
const { singnup, login, logOut } = require('../controller/login.controller');
const isAuth = require('../authmiddleware');
const route = express.Router()

route.get('/',login)
route.post('/signup' , singnup);
route.get('/logout', logOut)

module.exports = route;