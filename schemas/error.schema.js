
const { ObjectID } = require('mongodb');
var mongoose = require('mongoose');                                            

var Schema = mongoose.Schema;
var error = new Schema({
   userId : {
           type:Schema.ObjectId 
        },
        url:String,
        urlparameter : String,
        projectName : String,
        aboutProject: String,
        errormessage: String, //error title like Cannot read property 'replace' of undefined
        sectionname:String, // like unhandle rejection
        error:String,
        source:{
           default: "Website",
           type:String
        },
    
        whenentered: {
        type: Date,
        default : Date.now()
      },
      resolved : {
         default : 0,
         type:Number,
         enum:[0,1]
      }
});



const errors = mongoose.model('errors', error)
// //console.log.log("userProfile21",userProfile)
module.exports = errors;






