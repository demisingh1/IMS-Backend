require('dotenv').config();
const express = require('express')
const app = express()





// server listen
const port = process.env.PORT || 8001
app.listen(port, ()=>{
    console.log(`server Started on port ${port}`);
    
})