const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var serviceSchema = new mongoose.Schema({
   
    nom:{
        type:String,
        required:true  
    },
    description:{
        type:String,
        required:true
    },
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Project"
    }],
    customers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Customer"
    }],
    
});  
     
//Export the model
module.exports = mongoose.model('Service', serviceSchema);    