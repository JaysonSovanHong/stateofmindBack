const cityControllers = require('../controllers/cityControllers')

const express = require('express')

const cityRoutes = express.Router()




cityRoutes.get('/', cityControllers.findAll)

cityRoutes.post('/search', cityControllers.findOne)

cityRoutes.get('/:type', cityControllers.getAll)

cityRoutes.post('/', cityControllers.createCity)

cityRoutes.post('/save', cityControllers.saveCity)





module.exports = cityRoutes