var Admin = require('./models/muffin');

exports.getMuffin = function(req, res){

    Admin.find({}, function (err, users){
         
        if(err){
            res.status(400).json(err)
        }
        res.json(users)
        });
};

exports.postMuffin = function(req, res){
    var newAdmin = new Admin(req.body);

    newAdmin.save(function (err, user) { 
    if(err){
        res.status(400).json(err);
    }
    res.json(user);

});
};
