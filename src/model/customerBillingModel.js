const mongoose = require('mongoose');

const cihSchema = new mongoose.Schema({
    customerName:{type:String, required:true, default:'cash'},
    phoneNo:{type:Number},
    address:{type:String},
    productList:[
        {
            product:{type:mongoose.Schema.Types.ObjectId, ref:'Product',required:true},
            quantity:{type:Number, required:true}
        }
    ],
    amount:{type:Number, required:true},
    pincode:{type:Number, required:true},
    status:{
        type: String, 
        validate:{
            validator: async(value)=> await value === 'cih',
            message:"status should be cash in hand" 
        }
    }
    // text field pending
},{timestamps:true})

const cihBilling = mongoose.model('cihBilling', cihSchema);

module.exports = cihBilling;

// const b2bSchema = new mongoose.Schema({
//     customerName:{type:String, required:true, default:'cash'},
//     phoneNo:{type:Number},
//     address:{type:String},
//     productList:[
//         {
//             product:{type:mongoose.Schema.Types.ObjectId, ref:'Product',required:true},
//             quantity:{type:Number, required:true}
//         }
//     ],
//     amount:{type:Number, required:true}
// })