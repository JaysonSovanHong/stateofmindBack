const models = require('../models');
const cityRoutes = require('../routes/citiesRoutes');
const userController = require('../routes/usersRoutes');



// const userController = {}

userController.create = async(req, res) => {
    try {
        const newUser = await models.user.create({

            name: req.body.name,
            email: req.body.email,
            password: req.body.password

        })
        res.send({ message: 'welcome new user', newUser })
    } catch (error) {
        res.status(400)
        res.json({ error: 'email is already taken' })
    }

}

userController.login = async(req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                email: req.body.email
            }
        })
        if (user.password === req.body.password) {
            res.json({ message: 'login successful', user: user })

        } else {
            res.status(401).json({ error: 'login failed' })
        }
    } catch (error) {
        console.log({ error });
        res.status(400).json({ error: 'login failed' })
    }
}

userController.getUserInfo = async(req, res) => {

    try {
        const user = await models.user.findOne({

            where: { id: req.body.userId }
        })
        res.json({ userCities: await user.getCities() })
    } catch (error) {

    }
}

userController.updateUser = async(req, res) => {
    try {
        let updates = req.body
        let editUser = await models.user.findOne({
            where: {
                id: req.body.userId
            }
        })
        let newUser = await editUser.update(updates)
        res.json({ newUser })

    } catch (error) {
        res.json({ error })
    }
}

module.exports = userController