var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({ 
    email: { type: String, unique: true, lowercase: true},
    password: String,
    name: String,
    phone: Number, 
    address: address
},
{ timestamps: true }
);

module.exports = mongoose.model('User', userSchema);