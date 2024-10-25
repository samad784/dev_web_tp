const carsRouter = require("./routes/carsRoutes")
const express = require("express")
const app = express()
const port = 3000
app.use(express.json())
const db = require("./database")

app.get("/", (req, res) => {
	res.json({
		msg: "hello to my cars API !!",
	})
})

app.use("/api/cars", carsRouter)

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
