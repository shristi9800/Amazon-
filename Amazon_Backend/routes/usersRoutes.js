const express = require('express')
const usersController = require('../controllers/usersController.js')

const usersRouter = express.Router();

usersRouter.route('/')
.get(usersController.getAllUsers)

usersRouter.route('/signup')
.post(usersController.addUsers)

usersRouter.route('/login')
.post(usersController.verifyUsers)

module.exports = usersRouter