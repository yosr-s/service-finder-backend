const ProjectModel = require("../models/Project.Model")
const ServiceModel = require("../models/Service.Model")
const CustomerModel = require("../models/Customer.Model")



const ProjectController={
    create: function (req, res) {
        const projectData = {
            title: req.body.title,
            description: req.body.description,
            service: req.body.service,
            customer: req.body.customer,
            galleries: req.files.map(file => file.filename) // Map the filenames from the req.files array
        };
        const project = new ProjectModel(projectData);
    
        project.save(async function (err, item) {
            if (err) {
                console.log(err)
                res.json(err)
            }
            const service = await ServiceModel.findOneAndUpdate(
                {_id: req.body.service},
                {$push: {projects: item._id}},
                {new: true}
            );
            if (!service) {
                return res.status(406).json({status:406,message:"service not found",data:null})
            }
            const customer = await CustomerModel.findOneAndUpdate(
                {_id: req.body.customer},
                {$push: {projects: item._id}},
                {new: true}
            );
            if (!customer) {
                return res.status(406).json({status:406,message:"customer not found",data:null})
            }
            res.json(item)        
        })    
    },
    
            
    read: function (req,res){
        ProjectModel.find({},function(err,items){
            if(err){
                res.json(err);
            }
            res.json(items)
        }).select("-__v").populate("service","-__v").populate("customer","-__v")

    },
    update: function (req,res){
        ProjectModel.findByIdAndUpdate(req.params.id,req.body,{new:true}, function (err, item) {
            if (err) {
                res.status(406).json({ status: 406, message: "project not created"+err, data: null })
            } else
            res.status(200).json({ status: 200, message: "created project", data: item })
        })

    },
    delete: function (req,res){
        ProjectModel.findByIdAndDelete(req.params.id, function (err, item) {
            if (err) {
                res.status(406).json({ status: 406, message: "project not deleted", data: null })
            }
            ServiceModel.findOneAndUpdate(
                {_id: req.body.service},
                {$pull: {projects: item._id}},
                {new: true}
            );
            CustomerModel.findOneAndUpdate(
                {_id: req.body.customer},
                {$pull: {projects: item._id}},
                {new: true}
            );
            res.status(200).json({ status: 200, message: "deleted project", data: item })
        })
    },
    findById: function (req,res){
       ProjectModel.findOne({_id:req.params.id},function(err,item){
        if(err){
            res.json(err);
        }
        res.json(item)
       }).select("-__v").populate("service","-__v").populate("customer","-__v")
    }
    




}
module.exports = ProjectController