const jwt = require('jsonwebtoken')
const isAuth = async(req, res, next)=>{
    // const header = req.headers.Authorization || req.headers.authorization;
    const {token} = req.cookies
    console.log(token, "value from cookies");
    if(!token){
       return res.status(400).json({message:"Access Denied"})
    }
    try {
        const verifyToken = jwt.verify(token, process.env.JWTSECRECT)
        req.user = verifyToken
        next();
    } catch (error) {
        if(error instanceof jwt.TokenExpiredError){
        return res.status(400).json({message:"Access Denied token nor verified", error})

        }
        return res.status(400).json({message:"Access Denied token nor verified", error})
    }
    
    
    // if(header && header.startsWith("Bearer")){
    //     let token = header.split(" ")[1]
    //     if(!token){
    //        return res.status(401).json({message:"No logged in"})  
    //     }try {
    //         const verifyToken = await jwt.verify(token, process.env.JWTSECRECT)
    //     req.user = verifyToken;
    //     next()      
    //     } catch (error) {
    //         res.status(401).json({message:"Acces denined token not valied", error})
    //     }
        
    // }else{
    //     res.status(400).json({message:"no accesable token"})
    // }
}
module.exports = isAuth