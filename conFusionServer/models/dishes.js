const mongoose = require('mongoose');

require('mongoose-currency').loadType(mongoose);

const Schema = mongoose.Schema;
const Currency = mongoose.Types.Currency;

var commentSchema = new Schema({
    rating:{
        type:Number,
        min:1,
        max:5,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    }
},{
    timestamps: true
});

var dishSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type:String,
        required:true
    },
    category:{
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
    label:{
        type:String,
        required:true
    },
    comments:[commentSchema]
},{
    timestamps: true
});

var Dishes = mongoose.model('Dish',dishSchema);

module.exports = Dishes;