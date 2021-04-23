//muffin file create the model the information which will be save in db
//is used to execute functions of mongoDB
var Admin = require('./models/muffin');


//get muffin will executing the find{} query returning all the items in the mongoDB 
exports.getMuffin = function (req, res) {

    Admin.find({}, function (err, user) {

        if (err) {
            res.status(400).json(err)
        }
        res.json(user);
    });
};

//post will insert data in mongodb by information entered by the user in the front end
//after inserting data it returns to admin-list.html
exports.postMuffin = function (req, res) {
    var newAdmin = new Admin(req.body);

    newAdmin.save(function (err, user) {
        if (err) {

            return res.redirect('/admin-list.html');
        }
        return res.redirect('/admin-list.html');

    });
};

//delete muffin takes the id from the user selected and is execute findByIdAndremove query, taking id as parameter 
exports.deleteMuffin = function (req, res) {

    Admin.findByIdAndRemove({ _id: req.params.id }, function (err, muffin) {

        if (err) {
            res.status(400).json(err);
        }

        res.json(muffin);
    });
};

//update muffin takes the body with new information and update information through the id of the muffin
exports.updateMuffin = function (req, res) {

    Admin.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, muffin) {

        if (err) {
            res.status(400).json(err);
        }

        res.json(muffin);

    });
};
