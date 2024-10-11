const express = require('express')
const socketIO = require('socket.io')
const LoveLetter = require('../../models/LetterModal')
const http = require('http')

const LoveLetterRouter = express.Router()
const server = http.createServer(LoveLetterRouter)
const io = socketIO(server)

LoveLetterRouter.post('/letter', async (req, res)=>{
    try{
        const {name, letterData,senderId,recipientId,stickers} = req.body;
        const newLetter = new LoveLetter({
            name,
            letterData,
            senderId,
            recipientId,
            stickers
        });
        await newLetter.save();

        //emit the sockit io event
        //io.to(name).emit('newLetter', {letter: newLetter});


        res.status(201).json({
            success: true,
            message: "lettter send successfuly",
            data: newLetter
        })
    }catch (e) {
        res.status(500).json({
            success: true,
            message: "error",
            error: e.message
        })
    }
})

module.exports = LoveLetterRouter
