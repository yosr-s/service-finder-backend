const ServiceModel = require("../models/Service.Model")

const ServiceController={
    create: function (req,res){
        ServiceModel.create(req.body,function(err,item){
            if (err){
                res.status(406).json({status:406,message:"Service not created",data:null})
            }
            res.status(200).json({status:200,message:"created Service",data:item})
        })

    },
    read: function (req,res){
        ServiceModel.find({},function(err,items){
            if(err){
                res.json(err);
            }
            res.json(items)
        }).select("-__v")

    },
    update: function (req,res){
        ServiceModel.findByIdAndUpdate(req.params.id,req.body,{new:true}, function (err, item) {
            if (err) {
                res.status(406).json({ status: 406, message: "Service not created"+err, data: null })
            } else
            res.status(200).json({ status: 200, message: "created service", data: item })
        }).select("-__v").populate("projects","-__v").populate("customers","-__v")

    },
    delete: function (req,res){
        ServiceModel.findByIdAndDelete(req.params.id, function (err, item) {
            if (err) {
                res.status(406).json({ status: 406, message: "Service not created", data: null })
            }
            res.status(200).json({ status: 200, message: "created service", data: item })
        })
    },
    findById: function (req,res){
       ServiceModel.findOne({_id:req.params.id},function(err,item){
        if(err){
            res.json(err);
        }
        res.json(item)
       })
    }
    




}
module.exports = ServiceController