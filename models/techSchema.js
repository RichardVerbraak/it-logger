const mongoose = require('mongoose')

const techSchema = mongoose.Schema({
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
})

const Tech = mongoose.model('tech', techSchema, 'techs')

module.exports = Tech
