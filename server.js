var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var mongoURI = "mongodb://localhost:27017/clothes";
var cors = require('cors');
var itemModel = require('./models/item');
var adminRouter = require('./routers/admin-router');
var userRouter = require('./routers/user-router')

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json())

mongoose.connection.on("open", function() {
    console.log("Connected to mongo server.\n\n");
});

mongoose.connection.on("error", function(err) {
    console.log("Could not connect to mongo server!");
    console.log(err);
});

app.use(cors());

app.use("/admin",adminRouter);
app.use("/user",userRouter);
mongoose.connect(mongoURI);

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('I am listening on port ',port,'...');
});

