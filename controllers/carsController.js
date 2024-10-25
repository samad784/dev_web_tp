
// carsController.js

const db = require('../database');

// Get all cars
exports.getAllCars = (req, res) => {
    db.all("SELECT * FROM cars", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
};

// Get a car by ID
exports.getCarById = (req, res) => {
    const { id } = req.params;
    db.get("SELECT * FROM cars WHERE id = ?", [id], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(row);
        }
    });
};

// Add a new car
exports.addCar = (req, res) => {
    const { carName, carYear, carImg } = req.body;
    if (!carName || typeof carName !== 'string' || /[^a-zA-Z0-9 ]/.test(carName)) {
        res.status(400).json({ error: "Invalid car name" });
        return;
    }
    db.run(
        "INSERT INTO cars (carName, carYear, carImg) VALUES (?, ?, ?)",
        [carName, carYear, carImg],
        function (err) {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ id: this.lastID });
            }
        }
    );
};

// Update a car by ID
exports.updateCar = (req, res) => {
    const { id } = req.params;
    const { carName, carYear, carImg } = req.body;
    db.run(
        "UPDATE cars SET carName = ?, carYear = ?, carImg = ? WHERE id = ?",
        [carName, carYear, carImg, id],
        function (err) {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ changes: this.changes });
            }
        }
    );
};

// Delete a car by ID
exports.deleteCar = (req, res) => {
    const { id } = req.params;
    db.run("DELETE FROM cars WHERE id = ?", [id], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ changes: this.changes });
        }
    });
};
