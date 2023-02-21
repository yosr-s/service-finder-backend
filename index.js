const express = require('express')
const RouteUser=require("./routes/User.Route") //**import de route (user) dans index
const RouteAdmin=require("./routes/Admin.Route")
const RouteCustomer=require("./routes/Customer.Route") //TODO import de route (customer) dans index
const RouteService=require("./routes/Service.Route")
const RouteContact=require("./routes/Contact.Route")
const RouteProject=require("./routes/Project.Route")
const RouteMessage=require("./routes/Message.Route")
const RouteInfo=require("./routes/Infopers.Route")





//appel de la base
const db=require("./config/db") //appel de la base 


//todo middleware
const auth=require("./middleware/auth")
const upload=require("./middleware/uploads")
const bodyParser = require('body-parser')


   
const app = express()
app.use(express.json())
const port = 3000
app.use(bodyParser.json());    


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  app.set('secretKey', 'nodeRestApi'); //! jwt secret token 



  app.use("/users", RouteUser)
  app.use("/admins", RouteAdmin)  
  app.use("/customers",upload.single('file'), RouteCustomer)
  app.use("/services", RouteService)
  app.use("/contacts", RouteContact)
  app.use("/projects",upload.array('files'),RouteProject) 
  app.use("/messages", RouteMessage)
  app.use("/infos", RouteInfo)

 


 





app.get('/', (req, res) => {
    res.send('Hello World!')
  })
    