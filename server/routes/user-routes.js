const express = require("express")
const UserRouter = express.Router();
const { getUser , postCreateUser } = require("../controller/User-controller");
UserRouter.get("/:id",getUser);
UserRouter.post("/create",postCreateUser);
// cabRouter.put("/:id",putUpdateCabs);
module.exports = UserRouter ;