const express = require("express");
const router = express.Router()
const UserRegester = require('../../controllers/UserRegester');
const ShowData = require('../../controllers/ShowData');
const User = require('../../models/UserModal');
const ShowUserByID = require('../../controllers/showUserByID');
const showProfiles = require('../../controllers/ShowProfiles');
// fileupload
const upload = require('../../middleware/uploadPhotos')

// show the list of data
router.get('/user', ShowData)

// post the user information
router.post('/post', upload.array('image', 60),UserRegester)


// filter user
router.get('/profiles', showProfiles);

// find user show profile
router.get('/profile/:id', ShowUserByID)

module.exports = router
