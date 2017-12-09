var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var adminSchema = new Schema({
    email:{
        type:String
    },
    password:{
        type:String
    }
});

var admin = mongoose.model('admin', adminSchema);
module.exports = admin;