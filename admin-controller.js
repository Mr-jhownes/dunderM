var Admin = require('./models/muffin');

exports.getMuffin = function(req, res){

    Admin.find({}, function (err, user){
         
        if(err){
            res.status(400).json(err)
        }
        res.json(user);
        });
};

exports.postMuffin = function(req, res){
    var newAdmin = new Admin(req.body);

    newAdmin.save(function (err, user) { 
    if(err){
        res.status(400).json(err);
    }
    //res.json(user);
    return res.redirect('/admin-list.html');

});
};
exports.deleteMuffin = function(req, res){

    Admin.deleteOne({_id: req.params.name}, function (err, muffin){
        if(err){
            res.status(400).json(err);
        }
            res.json(muffin);
    });
};

