const mongoose = require('mongoose')


const dbrun = async()=>{
   await mongoose.connect(process.env.DBCONNECTION)
    .then(()=>{console.log("database connected")})
    .catch((error)=>{console.log(error)});
}
module.exports = dbrun;
