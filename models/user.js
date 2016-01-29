'use strict';

var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate')

var schema = mongoose.Schema({
    username: String,
    password: String,
    pin: [{
    	title: String,
    	url: String
    }]
});

schema.plugin(findOrCreate);
var User = mongoose.model('User', schema);

module.exports = User;