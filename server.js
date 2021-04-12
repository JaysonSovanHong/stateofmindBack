const express = require('express')
const app = express()

const rowdy = require('rowdy-logger')
const routesReport = rowdy.begin(app)

const userRoutes = require('./routes/usersRoutes')
const cityRoutes = require('./routes/citiesRoutes')

app.use(express.json())
app.use(require('cors')())

const PORT = process.env.port || 3001
app.listen(PORT, () => {
    console.log(`running on ${PORT}`)
    routesReport.print()
})

app.use('/user', userRoutes)
app.use('/cities', cityRoutes)