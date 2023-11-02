const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    mail: {
        type: "String",
        required: true,
    },
    start_time:{
        type: "Date",
        required: true,
    },
    end_time: {
        type: "Date",
        required: true,
    },
    
    price: {
        type: "Number",
        required: true,
    },
    source:{
        type: "String",
        required: true,
    },
    destination:{
        type: "String",
        required: true,
    },
});

const Book = mongoose.model("booking", BookingSchema);

module.exports = Book;