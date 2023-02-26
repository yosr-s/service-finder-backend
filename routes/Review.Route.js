const ReviewController=require("../controllers/Review.Controller");
const express=require("express")
const Router=express.Router();
Router.post("/",ReviewController.create)
Router.delete("/:id",ReviewController.delete) //ajouter le params
Router.put("/:id",ReviewController.update)
Router.get("/",ReviewController.read)
Router.get("/:id",ReviewController.findById)
module.exports=Router;