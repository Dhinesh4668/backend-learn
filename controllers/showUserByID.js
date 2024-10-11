const User = require('../models/UserModal');

const ShowUserByID = async (req, res) => {
    const id = req.params.id;
    try {
      const users =  await User.findById({_id: id});
      res.status(200).json({
          success: true,
          message: 'users get successfully by id',
          data: users
      })
    }catch (e) {
        res.status(500).json({
            success: false,
            message: 'internal server error',
            error: e.message
        })
    }
   // User.findById({_id: id}).then(users => res.status(200).json({

    //})).cache(err => res.send(500).json({success: false, message: 'internal server error', error: err.message}))
}

module.exports = ShowUserByID
