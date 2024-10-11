const User = require('../models/UserModal');
const UserRegister = async (req, res) => {
    const {
        name, dateOfBirth, age, gender, oppositeGender, intrest, location, verified, about, LoveRequests, Love, sendLoveRequst
    } = req.body;
        const images = req.files.map(file => file.filename)
    try {
        const newUser = new User({
            name,
            dateOfBirth,
            age,
            gender,
            oppositeGender,
            intrest,
            image:images,
            location,
            verified,
            about,
            LoveRequests,
            Love,
            sendLoveRequst
        });
        await newUser.save();
        res.status(201).json({success: true, message: 'User registration successful', data: newUser});
    } catch (e) {
        res.status(500).json({success: false, message: "Internal Server Error", error: e.message});
    }
};

module.exports = UserRegister;
