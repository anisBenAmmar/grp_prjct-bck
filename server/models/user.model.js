const mongoose = require("mongoose")

const UsersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Name is required"],
        min: [3, "minimum 3 characters"],
        max: [50, "maximum 50 characters"]
    },
    lastName: {
        type: String,
        required: [true, "Last Name position is required"],
        min: [3, "minimum 3 characters"],
        max: [50, "maximum 50 characters"]
    },
    email: {
        type: String,
        required: [true, "The Email is required"]
    },
    password: {
        type: String,
        required: [true, "The password is required"],
        min: [3, "minimum 3 characters"],
        max: [50, "maximum 50 characters"]
    },
   
   

}, { timestamps: true })


module.exports.Users = mongoose.model("Users", UsersSchema);
