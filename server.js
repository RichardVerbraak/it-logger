const express = require('express')
const connectDB = require('./config/db')
const app = express()
const Tech = require('./models/techSchema')
const Log = require('./models/logSchema')

const PORT = process.env.PORT || 5000

connectDB()

app.get('/', (req, res) => {
	res.send('Hello World')
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})
