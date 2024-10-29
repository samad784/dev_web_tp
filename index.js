const express = require("express")
const app = express();
const port = 3000;
const usersRouter = require("./routes/users.js")
const sqlite3 = require("sqlite3").verbose()

// Open the database connection
const db = new sqlite3.Database("./users.db", (err) => {
	if (err) {
		console.error("Error opening database:", err.message)
	} else {
		console.log("Connected to the SQLite database.")

		// Create the items table if it doesn't exist
		db.run(
			`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL
      )`,
			(err) => {
				if (err) {
					console.error("Error creating table:", err.message)
				}
			}
		)
	}
})

module.exports = db

//MIDDLEWARE
app.use(express.json());
//USER Endpoint
app.use("/api/", usersRouter)

// GET : HOME GET METHOD
app.get("/", (req, res) => {
    res.json({
        msg: "Welcome to my users API",
    })
})

app.listen(port, () => {
	console.log(`Serveur en cours d'exécution sur http://localhost:${port}`)
})