const B2bbilling = require("../model/b2bBillingmodel");
const cihBilling = require("../model/customerBillingModel");
const Inverntory = require("../model/inventoryModel");
const { asyncHandlertry } = require("../utils/asyncHandler");

const createBill = asyncHandlertry(async(req,res)=>{
    // check for the cihBilling
    const {customerName, phoneNo, address, productList, amount, pincode,status, gstno} = (req.body);
    console.log(status); 
    // I can also triggre one more DB request to make sure product is available But if its available then its showing on the 
    //front end
    if(status === 'cih'){
    await cihBilling.create({customerName, phoneNo, address, productList, amount, pincode, status})
    console.log("hello frpm CIH"); 
    }
    else {
    await B2bbilling.create({customerName, phoneNo, address, productList, amount, status, gstno, pincode})
    console.log("hello frpm B2B");
    }

    // after create bill update inventory
    //1. find the products into the inventory and then hold them in a variable
    // 1.1 get the product id from the frontEnd
    let products = productList.map((item)=> item.product)
    // Now, I holded the array of the ids.
    //1.2. Time to trigger the DB querry.
    // let existingProducts = await Inverntory.find({ product:{$in : products} })

        let bulkUpdate = productList.map((item)=>{
           return {
                updateOne:{
                    filter:{ product:item.product},
                    update:{$inc :{ quantity: - item.quantity}}
            }}
        })
    console.log(bulkUpdate)
    let invt = await Inverntory.bulkWrite(bulkUpdate);
    res.status(200).json({message:products, update:bulkUpdate})
    
})

module.exports = {createBill}