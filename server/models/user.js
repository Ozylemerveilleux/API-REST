const mongoose = require("mongoose");

const userSchema = new mongoose.schema({
    Lastname:{
        type:String,
        require :true
    },
    Firstname:{
        type:String,
        require :true
    },
    Email:{
        type:String,
        require :true
    }
})

module.exports = mongoose("user" , userSchema);