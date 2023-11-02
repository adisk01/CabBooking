const express = require("express")
const bookRouter = express.Router();
const { getAllBookings , postCreateBookinkgs } = require("../controller/Book-controller");
bookRouter.get("/",getAllBookings);
bookRouter.post("/create",postCreateBookinkgs);
// cabRouter.put("/:id",putUpdateCabs);
module.exports = bookRouter ;