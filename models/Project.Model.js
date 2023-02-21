const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var projectSchema = new mongoose.Schema({
   
    galleries:[{
        type:String,
        required:true
    }],
    description:{
        type:String,
        required:true
    },
    title:{
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
module.exports = mongoose.model('Project', projectSchema);