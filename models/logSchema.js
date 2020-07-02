const mongoose = require('mongoose')

const logSchema = mongoose.Schema({
	message: {
		type: String,
	},
	attention: {
		type: Boolean,
	},
	tech: {
		type: String,
		unique: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
})

const Log = mongoose.model('log', logSchema)

module.exports = Log
