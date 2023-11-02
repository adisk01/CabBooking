const express = require("express")
const pathRouter = express.Router();
const { getAllPaths , getShortestPath, postCreatePath, putUpdatePath } = require("../controller/Path-controller");
pathRouter.get("/",getAllPaths);
pathRouter.get("/shortest_path/",getShortestPath);
pathRouter.post("/create",postCreatePath);
pathRouter.put("/:id", putUpdatePath);

module.exports = pathRouter ;