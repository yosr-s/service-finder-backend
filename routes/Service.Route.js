const ServiceController=require("../controllers/Service.Controller");
const express=require("express")
const upload = require("../middleware/uploads");

const Router=express.Router();
Router.post("/", upload.single('file'), ServiceController.create)
Router.delete("/:id",ServiceController.delete) //ajouter le params
Router.put("/:id",upload.single('file'), ServiceController.update)
Router.get("/",ServiceController.read)
Router.get("/:id",ServiceController.findById)
module.exports=Router;