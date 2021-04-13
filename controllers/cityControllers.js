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

cityControllers.findOne = async(req, res) => {
    const oneCity = await models.city.findOne({
        name: req.body.name
    })

    // console.log(oneCity.dataValues);
    res.send(oneCity.dataValues)
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
    console.log(req.body.id);
    const newLocation = await models.city.findOrCreate({
        where: {
            id: req.body.id
        }
    })
    console.log(newLocation);
    console.log(req.body.userId);
    const user = await models.user.findOne({
        where: {
            id: req.body.userId
        }
    })
    console.log(user);
    let association = await user.addCity(newLocation[0])
    console.log(association);
    res.json({ userLocation: await user.getCities() })



}


// save the city search to the user id and have it append on the user profile page then add a button so they can delete the city if they do not like it... ugh and stupid comments



module.exports = cityControllers