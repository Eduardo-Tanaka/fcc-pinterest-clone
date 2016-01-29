var Pin = require('../models/pin');

module.exports.addPin = function(req, res, next) {
	var newPin = {
		title: req.body.title,
		url: req.body.url,
		username: req.user.username
	}
	Pin.create(newPin, function(err, pin) {
		if (err)
			req.flash('message', err);
		req.flash('success', 'Pin created');
		res.redirect('/mypins');
	});
}

module.exports.myPins = function(req, res, next) {
	Pin.find({ 'username': req.user.username }, function(err, pins) {
		if (err)
			req.flash('message', err);
		res.render('mypins', { user: req.user, message: req.flash('message'), success: req.flash('success'), pins: pins });
	});
}

module.exports.allPins = function(req, res, next) {

}

module.exports.deletePin = function(req, res, next) {
	Pin.remove({ '_id': req.params.id }, function(err) {
		if (err)
			req.flash('message', err);
		req.flash('success', 'Pin deleted');
		res.redirect('/mypins');
	});	
}