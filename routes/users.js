const express = require("express")
const router = express.Router()
const { 
	getAllUsers,
	createNewUser, 

} = require("../controllers/usersControllers")
const db = require("../database")


router.get("/users", getAllUsers)

// GET : LIRE Un seul utilisateur
router.get("/:id", (req, res) => {
	const id = parseInt(req.params.id)

	// trouve son index, verifier si le userIndex est positive
	const userIndex = users.findIndex((user) => user.id === id)

	// utilisateur non trouvé
	if (userIndex < 0)
		return res.status(404).json({ msg: "utilisateur non trouvé" })
    // si el est trouvé

	res.json(users[userIndex])
})

// GET : LIRE tous les utilisateurs
router.get("/", (req, res) => {
	res.json(users)
})

// POST : CRÉER un nouvel utilisateur, basé sur les données passées dans le corps(body) de la requête
router.post("/users", createNewUser)
// PUT : Modifier un utilisateur en fonction de son ID
router.put("/:id", (req, res) => {
    // récupérer toutes les données qui arrivent dans le corps de la requête (body)
	const {firstName, lastName} = req.body
    // récupère l'id dans la requête et le transforme en int
    const id = parseInt(req.params.id)
    // trouve son index, verifier si le userIndex est positive
	const userIndex = users.findIndex((user) => user.id === id)
    // utilisateur non trouvé
	if (userIndex < 0)
		return res.status(404).json({ msg: "utilisateur non trouvé" })
    // si il est trouvé, nous vérifions quelles valeurs ont été envoyées
	if (firstName) users[userIndex].firstName = firstName
	if (lastName) users[userIndex].lastName = lastName
        res.json({
            msg: "utilisateur mis à jour",
            user: users[userIndex],
        })
})

router.delete("/:id", (req, res) => {
	const id = parseInt(req.params.id)// trouve son index, verifier si le userIndex est positive
	const userIndex = users.findIndex((user) => user.id === id)

	// utilisateur non trouvé
	if (userIndex < 0)
		return res.status(404).json({ msg: "utilisateur non trouvé" })
    // si el est trouvé
	users.splice(userIndex, 1)

	res.json({
		msg: "utilisateur suprimée",
	})
})

module.exports = router