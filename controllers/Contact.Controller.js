const ContactModel = require("../models/Contact.Model")

const ContactController={
    create: function (req,res){
        ContactModel.create(req.body,function(err,item){
            if (err){
                res.status(406).json({status:406,message:"contact not created",data:null})
            }
            res.status(200).json({status:200,message:"created contact",data:item})
        })

    },
    read: function (req,res){
        ContactModel.find({},function(err,items){
            if(err){
                res.json(err);
            }
            res.json(items)
        }).select("-__v")

    },
    update: function (req,res){
        ContactModel.findByIdAndUpdate(req.params.id,req.body,{new:true}, function (err, item) {
            if (err) {
                res.status(406).json({ status: 406, message: "contact not created"+err, data: null })
            } else
            res.status(200).json({ status: 200, message: "created contact", data: item })
        })

    },
    delete: function (req,res){
        ContactModel.findByIdAndDelete(req.params.id, function (err, item) {
            if (err) {
                res.status(406).json({ status: 406, message: "contact not created", data: null })
            }
            res.status(200).json({ status: 200, message: "created contact", data: item })
        })
    },
    findById: function (req,res){
       ContactModel.findOne({_id:req.params.id},function(err,item){
        if(err){
            res.json(err);
        }
        res.json(item)
       })
    }
    




}
module.exports = ContactController