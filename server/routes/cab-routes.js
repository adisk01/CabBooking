const express = require("express")
const cabRouter = express.Router();
const { getAllCabs } = require("../controller/Cab-controller");
cabRouter.get("/",getAllCabs);
module.exports = cabRouter ;