const express = require('express')
const app = express();
const port = process.env.PORT || 8080;
const Database = require('./config/DatabaseConfig/Database');
const UserRouter = require('./routes/UserRouter/UserRouter')
const UserIntrest = require('./routes/IntrestOptions/UserIntrest')
const cors = require('cors')
const responseTime = require('response-time')
const {logger} = require('./middleware/Logger.middleware')
const LoveLetter = require('./routes/LoveLetterCreate/LoveLetter')
const socketIO = require("socket.io");
const http = require('http')
const server = http.createServer(app)
const io = socketIO(server)
const shewLetter = require('./routes/LoveLetterCreate/getLetter')
const Premium = require('./routes/InAppParches/Premium')
const sampleQury = require('./SampleTestEndPoint/sampleQury')
app.use(express.json());
app.use(logger)
// app.use(cors())
app.use(responseTime())
app.use(express.static("assets/Images"))
// database
Database();

// user api endpoints
app.use('/api',UserRouter)

app.use('/api/intrest', UserIntrest)

app.use('/api', LoveLetter)

app.use('/api', shewLetter)

app.use('/sample', sampleQury)
app.use('/api/inapppurches', Premium)

// undefind entry show error message
app.use('*', (req, res, next)=>{
    const error = {
        status: 404,
        message: API_ENDPOINT_NOT_FOUND_ERR,
    }
    next(error)
})


app.listen(port, ()=>console.log(`Server is listening\nhttp://localhost:${port}/`));
