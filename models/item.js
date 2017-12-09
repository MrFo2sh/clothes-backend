var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var itemSchema = new Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    url:{
        type:String
    },
    price:{
        type:String
    },
    amount:{
        type:Number,
        default:0
    },
    category:{
        type:String
    }
});

var item = mongoose.model('item', itemSchema);
module.exports = item;