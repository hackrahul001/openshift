
const { ObjectID } = require('mongodb');
var mongoose = require('mongoose');                                            

var Schema = mongoose.Schema;
var interview = new Schema({
        id: Number,
        title: String,
        price: Number,
        description: String,
        category: String,
        image: String,
        sold: String,
        dateOfSale: Date
});



const interviews = mongoose.model('interviews', interview)
// //console.log.log("userProfile21",userProfile)
module.exports = interviews;






