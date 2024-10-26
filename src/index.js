require('dotenv').config();
const express = require('express')
const http = require('http')
const {Server} = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin: 'http://localhost:3000',
        methods: ['GET', 'PATCH', 'POST', 'PUT','DELETE'],
    }
});

// initial socket connection
io.on("connection", (socket)=>{
    console.log("Socket connected with id  ", socket.id);
    
})




// server listen
const port = process.env.PORT || 8001
server.listen(port, ()=>{
    console.log(`server Started on port ${port}`);
    
})