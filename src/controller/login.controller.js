const User = require('../model/userModel')
function singnup(req, res){
    res.json({message:"sign up method"});
}
async function login(req,res){
    console.log(req.body);
    
    const getUser = await User.find(req.body);
    res.send('lgoin method');
}

module.exports = {singnup, login}