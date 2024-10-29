const mongoose = require('mongoose')

const InvertorySchema = new mongoose.Schema({
    product:{type: mongoose.Schema.Types.ObjectId, ref:'Product',  required:true},
    quantity:{type: Number, required:true},
    lowStockThreshold: { type: Number, default: 10 }, // Alert if quantity falls below this level

},({timestamps:true}))

const Inverntory = mongoose.model('Inverntory', InvertorySchema);
module.exports = Inverntory;