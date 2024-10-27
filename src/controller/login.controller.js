const User = require('../model/userModel')
const bcrypt = require('bcrypt')

async function singnup(req, res){
    const{username, password, email} = req.body;
console.log(req.body);

    let hashPswd = await bcrypt.hash(password , 8);
  let NewUser = await User.create({username, password:hashPswd, email})
    res.json({message:NewUser});
}
async function login(req,res){
    console.log(req.body);
    
    const getUser = await User.find(req.body);
    res.send('lgoin method');
}

module.exports = {singnup, login}