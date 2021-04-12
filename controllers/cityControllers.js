const models = require('../models')

const cityControllers = require('../routes/citiesRoutes')



cityControllers.findAll = async(req, res) => {
    try {
        const allCity = await models.city.findAll()

        res.json({ allCity })
    } catch (error) {
        res.json({ error })
    }
}

cityControllers.getAll = async(req, res) => {

    try {
        let oneCity = await models.city.findAll({
            where: {
                type: req.params.type
            }
        })
        res.json({ oneCity })
    } catch (error) {
        res.json({ error })
    }
}

cityControllers.createCity = async(req, res) => {
    try {

        let newCity = await models.city.create({
            name: req.body.name,
            type: req.body.type
        })
        res.json({ newCity })
    } catch (error) {
        res.json({ error })
    }

}

cityControllers.saveCity = async(req, res) => {
    const cityId = await models.findOrCreate({
        where: {
            id: req.body.userId
        }
    })
    const user = await models.user.findOne({
        where: { id: req.body.userId }
    })

    let assocate = await user.addCity(cityId)

    res.json({ assocate })
}






module.exports = cityControllers