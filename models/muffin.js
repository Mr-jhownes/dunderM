var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({ 
    name:  { type: String, unique: true},
    flavour: String,
    price: String,
    
},
{ timestamps: true }
);

module.exports = mongoose.model('Muffin', userSchema);