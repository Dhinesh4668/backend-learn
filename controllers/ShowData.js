const User = require('../models/UserModal');

const ShowData = async(req, res) => {
    try{
        const showUserData = await User.find();

        if(showUserData === 0){
            return res.status(201).json({
                success: false,
                message: "user data ",
                data: []
            })
        }
        res.status(200).json({
            success : true,
            message: "user data fetch successfuly",
            data: showUserData,
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            success: false,
            messsage: "Internal server error",
            error: err.message
        })
    }
}


module.exports = ShowData;


