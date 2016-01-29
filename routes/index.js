var express = require('express');
var router = express.Router();
var pincontroller = require('../controllers/pincontroller');
var usercontroller = require('../controllers/usercontroller');

module.exports = function(passport) {
	/* GET home page. */
	router.get('/', pincontroller.allPins);

	router.post('/signup', passport.authenticate('signup', {
		successRedirect: '/',
		failureRedirect: '/',
		failureFlash : true  
	}));

	router.post('/login', passport.authenticate('login', {
		successRedirect: '/',
		failureRedirect: '/',
		failureFlash : true  
	}));

	router.post('/logingithub', passport.authenticate('github', {
		successRedirect: '/',
		failureRedirect: '/',
		failureFlash : true  
	}));

	router.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/' }),
  		function(req, res) {
    	// Successful authentication, redirect home.
    	res.redirect('/');
	});

	router.get('/logout', function(req, res, next) {
	    req.logout();
	  	res.redirect('/');
	});

	router.get('/mypins', isAuthenticated, pincontroller.myPins);

	router.get('/add', isAuthenticated, function(req, res, next) {
	 	res.render('add', { user: req.user, message: req.flash('message'), success: req.flash('success') });
	});

	router.post('/add', isAuthenticated, pincontroller.addPin);

	router.get('/delete/:id', isAuthenticated, pincontroller.deletePin);

	router.post('/password', isAuthenticated, usercontroller.changePassword);

	return router;
}

var isAuthenticated = function (req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler 
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects
    if (req.isAuthenticated())
        return next();
    // if the user is not authenticated then redirect him to the login page
    res.redirect('/');
}