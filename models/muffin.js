var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({ 
    name: String,
    flavour: String,
    price: String,
    
},
{ timestamps: true }
);

module.exports = mongoose.model('Muffin', userSchema);