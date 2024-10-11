const multer = require('multer')
const fs = require("fs");
const Path = require("path")
//upload pic
const uploadPic = multer.diskStorage({
    destination: (req, file, cb) =>{
        const destinationPath = "assets/Images"
        if(!fs.existsSync(destinationPath)) {
            fs.mkdirSync(destinationPath, {recursive: true})
        }

        cb(null, destinationPath)
    },

//     file
    filename: (req, file, cb) =>{
        cb(null, Date.now() + Path.extname(file.originalname));
    }
})
//     filter files
const filterFiles = (req, file, cb) =>{
    const allowPathFileTypes = ["image/jpeg", "image/png", "image/jpg"];
    if(allowPathFileTypes.includes(file.mimetype)){
        cb(null, true);
    } else {
        cb(new Error(" Invalid file type picking, Only JPEG, PNG, and JPG files are allowed."))
    }
}

const upload = multer({ storage: uploadPic, fileFilter: filterFiles })

module.exports = upload;
