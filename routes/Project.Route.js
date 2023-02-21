const ProjectController=require("../controllers/Project.Controller");
const express=require("express")
const Router=express.Router();
Router.post("/",ProjectController.create)
Router.delete("/:id",ProjectController.delete) //ajouter le params
Router.put("/:id",ProjectController.update)
Router.get("/",ProjectController.read)
Router.get("/:id",ProjectController.findById)



module.exports=Router;  