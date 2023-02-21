const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var contactSchema = new mongoose.Schema({
   
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
    }
    
});  
     
//Export the model
module.exports = mongoose.model('Contact', contactSchema);    