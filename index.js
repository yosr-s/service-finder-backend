const express = require('express')
const RouteUser=require("./routes/User.Route") //**import de route (user) dans index
const RouteAdmin=require("./routes/Admin.Route")
const RouteCustomer=require("./routes/Customer.Route") //TODO import de route (customer) dans index
const RouteService=require("./routes/Service.Route")
const RouteContact=require("./routes/Contact.Route")
const RouteProject=require("./routes/Project.Route")
const RouteMessage=require("./routes/Message.Route")
const RouteInfo=require("./routes/Infopers.Route")




//todo middleware
const auth=require("./middleware/auth")
const upload=require("./middleware/uploads")

//appel de la base
const db=require("./config/db") //appel de la base 
const bodyParser = require('body-parser')





//! frontend cors
const cors = require('cors')
const app = express()
//! frontend cors
app.use(cors("*"))   

app.use(bodyParser.urlencoded({
  extended: true
})); 
app.use(bodyParser.json());    
 
app.use(express.json()) //pour l'envoie de données sous forme de données json
const port = 3000
  


   



  app.use("/users", RouteUser)
  app.use("/admins", RouteAdmin)  
  app.use("/customers",upload.single('file'), RouteCustomer)
  app.use("/services", RouteService)
  app.use("/contacts", RouteContact)
  app.use("/projects",upload.array('files'),RouteProject) 
  app.use("/messages", RouteMessage)
  app.use("/infos", RouteInfo)

  app.get("/file/:img",function(req,res) {
    res.sendFile(__dirname+"/uploads/"+req.params.img)
  })


  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  
  // express doesn't consider not found 404 as an error so we need to handle 404 explicitly
  // handle 404 error
  app.use(function(req, res, next) {
    let err = new Error('Not Found');
       err.status = 404;
       next(err);
   });
   // handle errors
   app.use(function(err, req, res, next) {
    console.log(err);
    
     if(err.status === 404)
      res.status(404).json({message: "Not found"});
     else 
       res.status(500).json({message: "Something looks wrong  !!!"});
   });
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  
    