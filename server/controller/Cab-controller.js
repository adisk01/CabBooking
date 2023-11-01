const mongoose = require("mongoose");
const Cab = require("../models/Cab");
const { availableCabs } = require("../service/getAvailableCabs");

const getAllCabs = (req, res) => {
    Cab.find()
        .then((todo) => {
            let data = availableCabs(todo,req.body.time);
            res.status(200).json(todo);
        })
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Cabs not found", error: err.message })
        );
}


const putUpdateCabs = (req, res) => {
    Cab.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to update Cab details", error: err.message })
        );
};


module.exports = { getAllCabs : getAllCabs, putUpdateCabs : putUpdateCabs } ;