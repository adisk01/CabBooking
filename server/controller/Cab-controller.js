const mongoose = require("mongoose");
const Cab = require("../models/Cab");
const { availableCabs } = require("../service/getAvailableCabs");

const getAllCabs = (req, res) => {
    // console.log(req.body);
    Cab.find()
        .then((todo) => {
            let data = availableCabs(todo,req.body.time);
            console.log(data);
            res.status(200).json(data);
        })
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Cabs not found", error: err.message })
        );
}

const postCreateCabs = (req, res) => {
    Cab.create(req.body)
        .then((data) => res.json({ message: "Cab added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add Cab details", error: err.message })
        );
};


const putUpdateCabs = (req, res) => {
    // console.log(req.body);
    // console.log(req.headers);
    Cab.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.status(201).json({ message: "updated successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to update Cab details", error: err.message })
        );
};


module.exports = { getAllCabs : getAllCabs, postCreateCabs : postCreateCabs , putUpdateCabs : putUpdateCabs } ;