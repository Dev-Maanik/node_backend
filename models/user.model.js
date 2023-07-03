const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: string,
        required: true
    },

    userId: {
        type: string,
        required: true,
        unique: true
    },

    password: {
        type: string,
        required: true
    },

    email: {
        type: string,
        required: true,
        unique: true,
        minLength: 10,
        lowercase: true
    },

    userType: {
        type: string,
        required: true,
        default: "CUSTOMER",
        enum: ["CUSTOMER", "ADMIN"]
    }

}, { timestamps: true });


module.exports = mongoose.model("User", userSchema);