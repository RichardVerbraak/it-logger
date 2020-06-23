const express = require('express')
const connectDB = require('./config/db')

const app = express()

// Connect to Mongo
connectDB()

app.get('/', (req, res) => {
	res.json({ msg: 'Hello' })
})

app.use('/logs', require('./routes/logs'))
// app.use('/techs', require('./routes/techs'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`)
})
