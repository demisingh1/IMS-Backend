const jwt = require('jsonwebtoken')
const isAuth = async(req, res, next)=>{
    const header = req.headers.Authorization || req.headers.authorization;
    console.log(header);
    
    if(header && header.startsWith("Bearer")){
        let token = header.split(" ")[1]
        if(!token){
           return res.status(401).json({message:"No logged in"})  
        }try {
            const verifyToken = await jwt.verify(token, process.env.JWTSECRECT)
        req.user = verifyToken;
        next()      
        } catch (error) {
            res.status(401).json({message:"Acces denined token not valied", error})
        }
        
    }else{
        res.status(400).json({message:"no accesable token"})
    }
}
module.exports = isAuth