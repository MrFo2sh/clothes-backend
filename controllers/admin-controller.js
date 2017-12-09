var Admin = require('../models/admin');
var Item = require('../models/item');


exports.login= (req,res)=>{
    let email = req.body.email;
    let password = req.body.password;
    Admin.findOne({email:email,password:password},(err,admin)=>{
        if(err){
            console.log(err);
            return res.status(500).json({msg:"server error"});            
        }
        if(!admin)
            return res.status(401).json({msg:"Unauthorized"});
        return res.json({msg:"succesfully loged in"});
    })
}

exports.getItems = (req,res)=>{
    Item.find({},(err,items)=>{
        if(err){
            console.log(err);
            return res.status(500).json({msg:"server error"});            
        }
        console.log("items loaded");            
        return res.json({items:items});
    })
}

exports.updateItem = (req,res)=>{
    console.log(req.body);
    let _id = req.body.item._id;
    let name = req.body.item.name;
    let description = req.body.item.description;
    let url = req.body.item.url;
    let price = req.body.item.price;
    let amount = req.body.item.amount;
    let category = req.body.item.category;
    let del = req.body.del;

    if(del == "yes"){
        Item.remove({_id:_id},(err)=>{
            if(err){
                console.log(err);
                return res.status(500).json({msg:"server error"});            
            }
            return res.json({msg:"deleted succesfully"});            
        })
    }else{
        Item.findByIdAndUpdate(_id,{name:name,description:description,url:url,price:price,amount:amount,category:category},(err)=>{
            if(err){
                console.log(err);
                return res.status(500).json({msg:"server error"});            
            }
            console.log("item updated");
            return res.json({msg:"updated succesfully"}); 
        })
    }
}

exports.addItem = (req,res)=>{
    let name = req.body.name;
    let description = req.body.description;
    let url = req.body.url;
    let price = req.body.price;
    let amount = req.body.amount;
    let category = req.body.category;
    
    let item = new Item();
    item.name = name;
    item.description = description;
    item.url = url;
    item.price = price;
    item.amount = amount;
    item.category = category;
    item.save((err,item)=>{
        if(err){
            console.log(err);
            return res.status(500).json({msg:"server error"});            
        }
        console.log('items added')
        return res.json({msg:"addeds succesfully"}); 
    })

}