const mongoose = require("mongoose");

const CabSchema = new mongoose.Schema({
    name: {
        type: "String",
        required: true,
    },
    end_time: {
        type: "Date",
        required: true,
    },
    price: {
        type: "Number",
        required: true,
    }
});

const Cab = mongoose.model("cab", CabSchema);

module.exports = Cab;