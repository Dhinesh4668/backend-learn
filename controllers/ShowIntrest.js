const SelectedOptions = require('../models/Data/UserIntrestData');


const ShowIntrest = (req, res) => {
    try {
        res.json(SelectedOptions)
    }catch (e){
        console.log(e.message)
    }
}

module.exports = ShowIntrest
