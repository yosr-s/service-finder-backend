const MessageController=require("../controllers/Message.Controller");
const express=require("express")
const Router=express.Router();
Router.post("/",MessageController.create)
Router.delete("/:id",MessageController.delete) //ajouter le params
Router.put("/:id",MessageController.update)
Router.get("/",MessageController.read)
Router.get("/:id",MessageController.findById)
module.exports=Router;