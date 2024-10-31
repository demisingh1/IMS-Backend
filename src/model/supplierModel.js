const mongoose = require('mongoose')

const supplierSchema = new mongoose.Schema({
    supplierName:{type:String, required:true},
    phoneNumber:{type:Number, require:true},
    email:{type:String},
    // product:[{type:mongoose.Schema.Types.ObjectId, ref:'Product'}]
},({timestamps:true}))

const Supplier = mongoose.model('Supplier', supplierSchema)
module.exports = Supplier