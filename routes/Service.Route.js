const ServiceController=require("../controllers/Service.Controller");
const express=require("express")
const Router=express.Router();
Router.post("/",ServiceController.create)
Router.delete("/:id",ServiceController.delete) //ajouter le params
Router.put("/:id",ServiceController.update)
Router.get("/",ServiceController.read)
Router.get("/:id",ServiceController.findById)
module.exports=Router;