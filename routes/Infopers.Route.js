const InfoController=require("../controllers/Infopers.Controller");
const express=require("express");
const upload = require("../middleware/uploads");

const Router=express.Router();
Router.post("/",upload.single('file'),InfoController.create)
Router.delete("/:id",InfoController.delete) //ajouter le params
Router.put("/:id",upload.single('file'),InfoController.update)
Router.get("/",InfoController.read)
Router.get("/:id",InfoController.findById)
module.exports=Router;