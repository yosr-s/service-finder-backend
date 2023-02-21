const ContactController=require("../controllers/Contact.Controller");
const express=require("express")
const Router=express.Router();
Router.post("/",ContactController.create)
Router.delete("/:id",ContactController.delete) //ajouter le params
Router.put("/:id",ContactController.update)
Router.get("/",ContactController.read)
Router.get("/:id",ContactController.findById)
module.exports=Router;