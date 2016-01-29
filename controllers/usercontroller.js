var User = require('../models/user');
var bCrypt = require('bcryptjs');

module.exports.changePassword = function(req, res, next) {
    User.findOne({ 'username' :  req.user.username }, 
        function(err, user) {
            // In case of any error, return using the done method
            if (err)
                return done(null, false, req.flash(err.message));
            if (!isValidPassword(user, req.body.current)) {
                req.flash('message', "Invalid Password.");
            } else if (req.body.newPassword != req.body.newPasswordAgain) {
                req.flash('message',"Passwords don't match");
            } else if (req.body.newPassword.length < 6) {
                req.flash('message',"Password must be at least 6 characters long");
            } else {
                user.password = createHash(req.body.newPassword);

                // save the user
                user.save(function(err) {
                    if (err){
                        console.log('Error in Saving user: ' + err);  
                        throw err;  
                    }
                    console.log('User password changed');   
                    req.flash('success', 'Password changed'); 
                });
            }
            res.redirect('mypins');
        }
    );

    // Generates hash using bCrypt
    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }

    var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
    }
}