const mongoose = require("mongoose");

const CabSchema = new mongoose.Schema({
    id: {
        type: "Number",
        required: true,
    },
    name: {
        type: "String",
        required: true,
    },
    end_time: {
        type: "Number",
        required: true,
    },
    price: {
        type: "Number",
        required: true,
    }
});

const Cab = mongoose.model("cab", CabSchema);

module.exports = Cab;