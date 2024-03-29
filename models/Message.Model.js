const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var messageSchema = new mongoose.Schema({
   
    nom:{
        type:String,
        required:true  
    },
    email:{
        type:String,
        required:true
    },
    sujet:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Customer"
    },
    service_provider:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Customer"
    }
    
    
});  
     
//Export the model
module.exports = mongoose.model('Message', messageSchema);    