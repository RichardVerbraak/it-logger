const express = require('express')
const router = express.Router()
const Tech = require('../models/techSchema.js')

// Do not accidentally swap res and req around as parameters!!
router.get('/', async (req, res) => {
	try {
		const techs = await Tech.find()

		res.json(techs)
	} catch (error) {
		console.log(error.message)
		res.status(500).send({ msg: 'Server Error' })
	}
})

router.post('/', async (req, res) => {
	try {
		const newTech = new Tech(req.body)

		newTech.save()

		res.json(req.body)
	} catch (error) {
		console.log(error.message)
		res.status(500).send({ msg: 'Server Error' })
	}
})

router.delete('/', async (req, res) => {
	try {
		await Tech.findByIdAndRemove(req.body.id)
		res.json('User got deleted')
	} catch (error) {
		console.log(error.message)
		res.status(500).send({ msg: 'Server Error' })
	}
})

module.exports = router
