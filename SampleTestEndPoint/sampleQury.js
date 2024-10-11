const express = require('express');
const router = express.Router();
const User = require('../models/UserModal');

router.get('/samplpe', async(req,res)=>{
    try{
        console.log(req.query)
        const Userdata = await User.find(req.query);
        res.status(200).json({
            success: true,
            message: "data get success",
            data: Userdata
        })
    }catch (error){
        console.log(error)
    }
})

module.exports =  router
