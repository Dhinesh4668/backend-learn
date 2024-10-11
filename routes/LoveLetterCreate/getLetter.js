const express = require('express')
const router = express.Router()
const LoveLetterModal = require('../../models/LetterModal')
router.get('/showLetter',async (req, res)=>{
    try{
        const showLetter = await LoveLetterModal.find();
        res.json(showLetter)
    }catch (e) {
        console.error(e.message)
    }
})

module.exports = router
