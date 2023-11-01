const mongoose = require("mongoose");
const Path = require("../models/Path");
const { shortestPath } = require("../service/getShortestPath");

const getAllPaths = (req, res) => {
    Path.find()
        .then((todo) => res.status(200).json(todo))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Todo not found", error: err.message })
        );
}

const getShortestPath = (req, res) => {
    Path.find()
        .then((todo) => {
            let path = shortestPath(todo,req.body.v1,req.body.v2);
            res.status(200).json(path)
        })
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Todo not found", error: err.message })
        );
}


const putUpdatePath = (req, res) => {
    Path.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to update path data", error: err.message })
        );
};



module.exports = { getAllPaths : getAllPaths , getShortestPath : getShortestPath, putUpdatePath : putUpdatePath } ;