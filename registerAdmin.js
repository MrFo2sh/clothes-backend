var mongoose = require('mongoose');
var Admin = require('./models/admin')

var mongoURI = "mongodb://localhost:27017/clothes";


mongoose.connection.on("open", function() {
    console.log("Connected to mongo server.\n\n");
    admin = new Admin();
    admin.email = "gahzy";
    admin.password = "12345678";
    admin.save((err,admin)=>{
        console.log("admin saved");
        console.log(admin);
    })
});

mongoose.connection.on("error", function(err) {
    console.log("Could not connect to mongo server!");
    console.log(err);
});

mongoose.connect(mongoURI);


