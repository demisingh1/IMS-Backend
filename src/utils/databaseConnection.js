const mongoose = require('mongoose')


const dbrun = async()=>{
   await mongoose.connect("mongodb+srv://jaswindercyrus1:1234@todoapp.eamedcp.mongodb.net/ims?retryWrites=true&w=majority&appName=todoapp")
    .then(()=>{console.log("database connected")})
    .catch((error)=>{console.log(error)});
}
module.exports = dbrun;
