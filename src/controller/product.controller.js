const Product = require("../model/ProductModel");
const { asyncHandlertry } = require("../utils/asyncHandler");

const getAllProducts = async(req, res)=>{
    const showAllProducts = await Product.find({})
    res.status(200).json({message: showAllProducts});
}

const addProduct =asyncHandlertry (async (req, res)=>{
    const{productName, description, sku, price,category} = req.body
   const product = await Product.create({productName, description, sku, price,category});
    res.status(200).json({message: product});
})

module.exports = {getAllProducts, addProduct}