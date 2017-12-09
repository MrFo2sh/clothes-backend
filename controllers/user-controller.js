var Item = require('../models/item');
exports.getItems = (req,res)=>{
    let category = req.body.category;
    Item.find({category:category},(err,items)=>{
        if(err){
            console.log(err);
            return res.status(500).json({msg:"server error"});            
        }
        return res.json({items:items});
    })
}

exports.reserve = (req,res)=>{
    let amount = req.body.amount;
    let _id = req.body._id;
    Item.findByIdAndUpdate(_id,{amount:amount},(err,success)=>{
        if(err){
            console.log(err);
            return res.status(500).json({msg:"server error"});            
        }
        return res.json({msg:"succesfully reserved"});
    })
}