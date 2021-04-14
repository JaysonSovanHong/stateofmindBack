const userController = require('../controllers/userControllers')



const express = require('express')


const userRoutes = express.Router()

userRoutes.post('/signup', userController.create)
userRoutes.post('/login', userController.login)
userRoutes.post('/info', userController.getUserInfo)
userRoutes.put('/edit', userController.updateUser)




module.exports = userRoutes