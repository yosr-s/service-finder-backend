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
    },
    fb_link:{
         type:String,
    },
    insta_link:{
        type:String,
    },
    linkedin_link:{
        type:String,
    },
    description:{
        type:String,
    }

    
});  
     
//Export the model
module.exports = mongoose.model('Info', infoSchema);    