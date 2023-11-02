const express = require("express")
const cabRouter = express.Router();
const { getAllCabs, postCreateCabs, putUpdateCabs } = require("../controller/Cab-controller");
cabRouter.get("/",getAllCabs);
cabRouter.post("/create",postCreateCabs);
cabRouter.put("/:id",putUpdateCabs);
module.exports = cabRouter ;