// server.js
require("dotenv").config(); //added
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db"); //added

const pathRouter = require("./routes/path-routes");
const cabRouter = require("./routes/cab-routes");
const bookRouter = require("./routes/book-routes");

const app = express();
app.use(cors());

// connect database
connectDB();//added

// initialize middleware
app.use(express.json({ extended: false }));


app.use("/api/paths",pathRouter);
app.use("/api/cabs",cabRouter);
app.use("/api/bookings",bookRouter);
app.get("/", (req, res) => res.send("Server up and running"));

// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});