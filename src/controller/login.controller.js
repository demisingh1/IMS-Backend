const User = require('../model/userModel')
const bcrypt = require('bcrypt');
const { asyncHandlertry } = require('../utils/asyncHandler');
const jwt = require('jsonwebtoken');
// const { get } = require('../routes/loginrout');


const singnup = asyncHandlertry (async(req, res)=>{
   console.log(req.body);
   
    const{username, password, email,role} = req.body;
    let hashPswd = await bcrypt.hash(password , 8)
    let NewUser = await User.create({username, password:hashPswd, email, role});  
    res.status(200).json({message:NewUser});
   
})

 const login = asyncHandlertry( async(req,res) =>{
    const {email,password} = req.body
    console.log(req.body);
    
    const getUser = await User.findOne({email});
    if(!email){
       return res.status(401).json({message:"no Email found"})
    }
    const matchPswd = await bcrypt.compare(password, getUser.password)
    if(!matchPswd){
       return res.status(401).json({message:"password or email id is worng"})
    }
   const token = jwt.sign({id:getUser._id, name:getUser.name}, process.env.JWTSECRECT, {expiresIn:'1h'})
   res.cookie('token', token,{
      maxAge: 36000,
      httpOnly:true,
      secure:false, // only when https protocole is used TRUE
      // sameSite: "none" // do not use
   })
    res.status(200).json({message:token});
})

const logOut = (req, res)=>{
   // for logout clear the cookie
   res.clearCookie('token');
   res.status(200).json({message: 'Logout sucessfully'})
}

module.exports = {singnup, login, logOut}