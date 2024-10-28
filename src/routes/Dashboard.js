const express = require('express');
const isAuth = require('../authmiddleware');
const { dashboard } = require('../controller/dashboard.controller');
const dash = express.Router()

dash.get('/dashboard',isAuth,dashboard)

module.exports = dash;