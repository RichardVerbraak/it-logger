const express = require('express')
const connectDB = require('./config/db')
const app = express()
const techs = require('./routes/techs')
const logs = require('./routes/logs')

const PORT = process.env.PORT || 5000

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/techs', techs)
app.use('/logs', logs)

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})
