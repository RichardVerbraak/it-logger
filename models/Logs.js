const mongoose = require('mongoose')

// Change if some things are required or not
const LogSchema = mongoose.Schema({
	id: {
		type: String,
	},
	message: {
		type: String,
	},
	attention: {
		type: String,
	},
	date: {
		type: String,
		default: Date.now,
	},
	tech: {
		type: String,
	},
})

module.exports = mongoose.model('logs', LogSchema)
