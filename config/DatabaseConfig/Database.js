require('dotenv').config()
const monogoose = require('mongoose')

const Database = () =>{
    monogoose.connect(process.env.DATABASE_URL);
    const databse = monogoose.connection;

    databse.on('error', err => console.error(err));
    databse.on('open', ()=> console.log("database connected...."))
}

module.exports = Database;
