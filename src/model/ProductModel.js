const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
   productName:{type:String, required:true},
   description:{type:String,},
   sku:{type:String, required:true},
   price:{type:Number, require:true},
   category:{type:String, required:true},
   // supplier:{type: mongoose.Schema.Types.ObjectId, ref:'supplier'}
},{timestamps:true})

const Product = mongoose.model('Product' , productSchema);
module.exports = Product;
// name: { type: String, required: true },
// description: { type: String },
// SKU: { type: String, unique: true, required: true }, // Stock Keeping Unit
// price: { type: Number, required: true },
// category: { type: String },
// supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },