const express = require("express")
const bookRouter = express.Router();
const { getAllBookings , postCreateBookings } = require("../controller/Book-controller");
bookRouter.get("/",getAllBookings);
bookRouter.post("/create",postCreateBookings);
// cabRouter.put("/:id",putUpdateCabs);
module.exports = bookRouter ;