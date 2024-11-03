const mongoose = require('mongoose');

const b2bSchema = new mongoose.Schema({
    customerName:{type:String, required:true},
    phoneNo:{type:Number, required:true},
    productList:[
        {
            product:{type:mongoose.Schema.Types.ObjectId, ref:'Product',required:true},
            quantity:{type:Number, required:true}
        }
    ],
    amount:{type:Number, required:true},
    pincode:{type:Number, required:true},
    gstno:{type:String, required:true},
    address:{type:String, required:true},
    status:{ type:String,
        validate:{
        validator: async (value) => await value === 'b2b',
        message:"status should be b2b"
    }}
})

const B2bbilling = mongoose.model('B2bbilling',b2bSchema )

module.exports = B2bbilling