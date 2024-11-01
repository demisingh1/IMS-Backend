const getBilling = require("../model/supplierBilling");
const Inverntory = require("../model/inventoryModel");

const addBill = async (req,res)=>{
    const{productList,supplier,billPrice} = req.body;
   const billAdded = await getBilling.create({productList,supplier,billPrice})

   if(billAdded){
   billAdded.productList?.map(async(product)=>{ 
    const ProdInDB = await Inverntory.findOne({product:product.product})
    console.log(ProdInDB, "Find product in db",product.product);
    
        if(ProdInDB){
            console.log(ProdInDB.quantity,"If statment", product.quantity)
            let quantity =  ProdInDB.quantity + product.quantity
            await Inverntory.findByIdAndUpdate(ProdInDB._id, {quantity: quantity})
        }else{
            await Inverntory.create({product:product.product, quantity:product.quantity})
            console.log(product, "else Statement");      
        }
    })
}
    res.status(200).json({message:billAdded});
}
const showBills = (req,res)=>{
    res.status(200).json({message:"add biil"});
}

// Show singlee billing

// Edit billing

// Delete billing
module.exports = {addBill, showBills}