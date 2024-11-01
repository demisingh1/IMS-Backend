const Supplier = require("../model/supplierModel");

const createSupplier = async(req, res)=>{
    const{supplierName,phoneNumber,email} = req.body
   const supplier = await Supplier.create({supplierName,phoneNumber,email})
 res.status(200).json({message:supplier});
}

// Display all supliers

// display single supplier

// Edit supplier

// Update supplier
module.exports = {createSupplier}