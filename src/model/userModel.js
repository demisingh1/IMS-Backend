const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:[true,"Email id already registered"],
        require:true
    },
},{ timeStamp:true})
const User = mongoose.model('User' , userSchema);
module.exports = User;