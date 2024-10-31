const getBilling = require("../model/getBilling");

const addBill = async (req,res)=>{
    const{productList,supplier,billPrice} = req.body;
   const billAdded = await getBilling.create({productList,supplier,billPrice})
    res.status(200).json({message:billAdded});
}
const showBills = (req,res)=>{
    res.status(200).json({message:"add biil"});
}


module.exports = {addBill, showBills}