const mongoose = require('mongoose');

require('mongoose-currency').loadType(mongoose);

const Schema = mongoose.Schema;
const Currency = mongoose.Types.Currency;

var promtionSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    label:{
        type:String,
        required:true
    },
    price:{
        type:Currency,
        required:true,
        min:0
    },
    featured:{
        type:Boolean,
        default:false
    },
    description:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

var Promotions = mongoose.model('Promotion',promtionSchema);

module.exports = Promotions;