const mongoose = require('mongoose');

const letterSchema = new mongoose.Schema({
   senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
   },
   recipientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
   },
   stickers: {type: String},
   letterData: {type: String},
},{timestamps: true})

const LoveLetter = new mongoose.model('Loveletter', letterSchema);
module.exports = LoveLetter;
