const mongoose = require('mongoose')

const ChatSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    receptId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    messageType: {
        type: String,
        enum: ["text", "image"]
    },
    message: String,
    image: String,
}, {timestamps: true})

const Chat = new mongoose.model('chatData',ChatSchema);
module.exports = Chat;
