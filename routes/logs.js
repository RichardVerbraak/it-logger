const express = require('express')
const router = express.Router()
const Log = require('../models/logSchema')
const { response } = require('express')

router.get('/', async (req, res) => {
	try {
		const logs = await Log.find()

		res.json(logs)
	} catch (error) {
		console.log(error.message)
		res.status(500).send({ msg: 'Server Error' })
	}
})

router.post('/', async (req, res) => {
	const { message, attention, tech, date } = req.body

	try {
		const newLog = new Log({
			message,
			attention,
			tech,
			date,
		})

		await newLog.save()

		res.send(newLog)
	} catch (error) {
		console.log(error.message)
		res.status(500).send({ msg: 'Server Error' })
	}
})

// New date already handled by the front-end
// Didnt send the updated Log back as a response with findOneAndUpdate so the front end didnt update, only after refresh (because of getting all the logs on mount)
router.put('/:id', async (req, res) => {
	const { message, attention, tech, date } = req.body

	const updatedLog = {}
	if (message) updatedLog.message = message
	if (attention) updatedLog.attention = attention
	if (tech) updatedLog.tech = tech
	if (date) updatedLog.date = date

	try {
		const log = await Log.findByIdAndUpdate(
			req.params.id,
			{ $set: updatedLog },
			{ new: true }
		)
		res.json(log)
	} catch (error) {
		console.error(error.message)
		res.status(500).send({ msg: 'Server error' })
	}
})

router.delete('/:id', async (req, res) => {
	try {
		await Log.findByIdAndRemove(req.params.id)

		res.send('User deleted')
	} catch (error) {
		console.log(error.message)
		res.status(500).send({ msg: 'Server Error' })
	}
})

module.exports = router
