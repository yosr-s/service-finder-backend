const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var reviewSchema = new mongoose.Schema({
   
   
   
    review:{
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
module.exports = mongoose.model('Review', reviewSchema);    