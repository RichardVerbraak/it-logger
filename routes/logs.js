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
