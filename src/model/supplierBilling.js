const mongoose = require('mongoose')

const getBillingSchema = new mongoose.Schema({
    productList:[{product:{type: mongoose.Schema.Types.ObjectId, ref:'Product',  required:true},
    quantity:{type: Number, required:true},}],   
    supplier:{type:mongoose.Schema.Types.ObjectId, ref:'Supplier'},
    billPrice:{type:Number}
    // lowStockThreshold: { type: Number, default: 10 }, // Alert if quantity falls below this level
},({timestamps:true}))

const getBilling = mongoose.model('getBilling', getBillingSchema);
module.exports = getBilling;