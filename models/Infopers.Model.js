const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var infoSchema = new mongoose.Schema({
   
    image:{
        type:String,
        required:true  
    },
    service: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Service"
    },    
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Customer"
    } 
    
});  
     
//Export the model
module.exports = mongoose.model('Info', infoSchema);    