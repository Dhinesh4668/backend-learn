const Premium = require('../../models/Data/PremiumData')
const express = require('express')
const router = express.Router()

router.get('/premium', async (req,res)=>{
    try{
        res.status(200).json(Premium)
    }catch (err){
        res.status(500).json( e.message)
    }
})


module.exports = router
