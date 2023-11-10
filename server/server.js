const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const SocketServer = require('./socketServer')
const { ExpressPeerServer } = require('peer')
const path = require('path')
require('dotenv').config()


const app = express()
app.use(express.json())

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))
app.use(cookieParser())


// Socket
const http = require('http').createServer(app)
const io = require('socket.io')(http)

io.on('connection', socket => {
    SocketServer(socket)
})


app.use('/api' , require('./routes/authRouter'))
app.use('/api' , require('./routes/userRouter'))
// app.use('/api' , require('./routes/postRouter'))


const URL = process.env.MONGODB_URL
mongoose.connect(URL )
    .then(() => {
        console.log('подл к mongodb')
    })
    .catch(error => {
        console.log(error)
    })


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT
http.listen(port , () => {
    console.log('Server is running on port' , port)
})