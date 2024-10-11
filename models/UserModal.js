const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String,},
    dateOfBirth: {type: String},
    age: Number,
    image: [
        {type: String}
    ],
    gender: String,
    oppositeGender: String,
    intrest: [{type: String}],
    location: {type: String, default: null},
    verified: {type: Boolean},
    about: {type: String, default: null},
    LoveRequests:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    Love: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    sendLoveRequst:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    email: {
        type: String,
    },
    password: {
        type: String
    }
},{timestamps: true})

const User = new mongoose.model('user', userSchema);
module.exports = User;
