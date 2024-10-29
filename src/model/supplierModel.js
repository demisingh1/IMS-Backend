const mongoose = require('mongoose')

const supplierSchema = new mongoose.Schema({
    supplierName:{type:String, required:true},
    phoneNumber:{type:Number, require:true},
    email:{type:String,}
},({timestamps:true}))

const Supplier = mongoose.model('Supplier', supplierSchema)
module.exports = Supplier