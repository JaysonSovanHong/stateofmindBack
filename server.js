const express = require('express')
const app = express()


const rowdy = require('rowdy-logger')
const routesReport = rowdy.begin(app)



app.use(express.json())
app.use(require('cors')())

const userRoutes = require('./routes/usersRoutes')
const cityRoutes = require('./routes/citiesRoutes')

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`running on ${PORT}`)
    routesReport.print()
})

app.use('/user', userRoutes)
app.use('/cities', cityRoutes)