const express = require("express")
const pathRouter = express.Router();
const { getAllPaths , getShortestPath } = require("../controller/Path-controller");
pathRouter.get("/",getAllPaths);
pathRouter.get("/sh/",getShortestPath);
module.exports = pathRouter ;