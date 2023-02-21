const MessageModel = require("../models/message.Model")

const MessageController={
    create: function (req,res){
        MessageModel.create(req.body,async function(err,item){
            if (err){
                res.status(406).json({status:406,message:"message not created",data:null})
            }
            const customer = await CustomerModel.findOneAndUpdate(
                {_id: req.body.customer},
                {$push: {messages: item._id}},
                {new: true}
            );
            if (!customer) {
                return res.status(406).json({status:406,message:"customer not found",data:null})
            }
            res.status(200).json({status:200,message:"created message",data:item})
        }).select("-__v").populate("customer","-v")

    },
    read: function (req,res){
        MessageModel.find({},function(err,items){
            if(err){
                res.json(err);
            }
            res.json(items)
        }).select("-__v")

    },
    update: function (req,res){
        MessageModel.findByIdAndUpdate(req.params.id,req.body,{new:true}, function (err, item) {
            if (err) {
                res.status(406).json({ status: 406, message: "message not created"+err, data: null })
            } else
            res.status(200).json({ status: 200, message: "created message", data: item })
        })

    },
    delete: function (req,res){
        MessageModel.findByIdAndDelete(req.params.id, function (err, item) {
            if (err) {
                res.status(406).json({ status: 406, message: "message not created", data: null })
            }
            CustomerModel.findOneAndUpdate(
                {_id: req.body.customer},
                {$pull: {messages: item._id}},
                {new: true}
            );
            res.status(200).json({ status: 200, message: "created message", data: item })
        })
    },
    findById: function (req,res){
       MessageModel.findOne({_id:req.params.id},function(err,item){
        if(err){
            res.json(err);
        }
        res.json(item)
       })
    }
    




}
module.exports = MessageController