require('dotenv').config();
const express = require('express')
const http = require('http')
const {Server} = require('socket.io');
var morgan = require('morgan')
const cookieParser = require('cookie-parser');
const cors = require('cors')
const login  = require('./routes/loginrout');
const dbrun = require('./utils/databaseConnection');
const dash = require('./routes/Dashboard');
const prodRoutes = require('./routes/Product');
const billingRoute = require('./routes/Billing');
const supplierRoute = require('./routes/supplier');


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
// middle wares
// app.use(cors())

app.use(morgan('combined'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
app.use(cors(
    {
        origin: 'http://localhost:3000', // React's frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  credentials: true
    }
))
app.use((err,req,res,next)=>{
    console.log(err);
    res.json({message:'Something went wrong'});
})

// routes
// app.use('/' , (req, res)=>{
//     console.log("hello");
//     res.json({message:"hello"});
// });
app.use('/', login);
app.use('/', dash);
app.use('/',prodRoutes);
app.use('/',billingRoute)
app.use('/', supplierRoute)

// server listen
const port = process.env.PORT || 8001
server.listen(port, ()=>{
    dbrun();
    console.log(`server Started on port ${port}`);
})