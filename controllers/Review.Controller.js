const ReviewModel = require("../models/Review.Model")

const MessageController={
    create: function (req,res){
        ReviewModel.create(req.body,async function(err,item){
            if (err){
                res.status(406).json({status:406,message:"review not created",data:null})
            }
            
            res.status(200).json({status:200,message:"created rview",data:item})
        }).select("-__v")

    },
    read: function (req,res){
        ReviewModel.find({},function(err,items){
            if(err){
                res.json(err);
            }
            res.json(items)
        }).select("-__v")

    },
    update: function (req,res){
        ReviewModel.findByIdAndUpdate(req.params.id,req.body,{new:true}, function (err, item) {
            if (err) {
                res.status(406).json({ status: 406, message: "review not updated"+err, data: null })
            } else
            res.status(200).json({ status: 200, message: "updated review", data: item })
        })

    },
    delete: function (req,res){
        ReviewModel.findByIdAndDelete(req.params.id, function (err, item) {
            if (err) {
                res.status(406).json({ status: 406, message: "review not created", data: null })
            }
           
            res.status(200).json({ status: 200, message: "created review", data: item })
        })
    },
    findById: function (req,res){
       ReviewModel.findOne({_id:req.params.id},function(err,item){
        if(err){
            res.json(err);
        }
        res.json(item)
       })
    }
    




}
module.exports = MessageController