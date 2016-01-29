var User = require('../models/user');
var GitHubStrategy = require('passport-github').Strategy;

module.exports = function(passport) {
	passport.use('github', 
        new GitHubStrategy({
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: "https://freecodecamp-pinterest-clone.herokuapp.com/auth/github/callback"
        },
        function(accessToken, refreshToken, profile, done) {
            User.findOrCreate({ username: profile.username }, function (err, user) {
                return done(err, user);
            });
        }
    ));
}