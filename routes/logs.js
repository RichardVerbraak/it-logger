const express = require('express')
const router = express.Router()
const Log = require('../models/logSchema')

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
	try {
		res.json(req.body)
	} catch (error) {
		console.log(error.message)
		res.status(500).send({ msg: 'Server Error' })
	}
})

module.exports = router
