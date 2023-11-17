const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: "String",
        required: true,
    },
    service: {
        type: "Number",
        required: true,
    }
});

const User= mongoose.model("user", UserSchema);

module.exports = User;