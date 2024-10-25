const express = require("express")
const carsRouter = express.Router()
const db = require("../database")

carsRouter.get("/test", (req, res) => {
	res.json({
		msg: "cars route test ok !!",
	})
})

// GET return a list of all cars
carsRouter.get("/", (req, res) => {
	db.all("SELECT * FROM cars", [], (err, rows) => {
		if (err) {
			res.status(500).json({ error: err.message })
		} else {
			res.json(rows)
		}
	})
})

// POST add a new car
carsRouter.post("/", (req, res) => {
	const { carName, carYear, carImage } = req.body

	// Lancez la requête pour ajouter des voitures à la base de données.
})

// PUT update a car based on the param id
carsRouter.put("/:id", (req, res) => {
	const { id } = req.params
	console.log(id)

	// Lancez la requête pour la mise à jour.
})

// DELETE delete a car based on the param id
carsRouter.delete("/:id", (req, res) => {
	const { id } = req.body
	res.json({
		msg: "delete a car based on its id ... ",
	})
})

// GET one car based on its id
carsRouter.get("/:id", (req, res) => {
	const { id } = req.body
	// Essayez de trouver l'utilisateur, si vous le trouvez, renvoyez-le au client.
})

module.exports = carsRouter
