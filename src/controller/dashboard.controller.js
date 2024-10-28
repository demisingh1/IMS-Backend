const dashboard = (req, res)=>{
    console.log(req.user);
    
    res.json({message:"dashboard"})
}
module.exports = {dashboard}