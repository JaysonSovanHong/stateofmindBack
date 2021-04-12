const userController = require('../controllers/userControllers')



const express = require('express')
const userRoutes = express.Router()

userRoutes.post('/signup', userController.create)
userRoutes.post('/login', userController.login)






module.exports = userRoutes