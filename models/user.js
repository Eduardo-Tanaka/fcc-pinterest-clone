'use strict';

var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate')

var schema = mongoose.Schema({
    username: String,
    password: String
});

schema.plugin(findOrCreate);
var User = mongoose.model('User', schema);

module.exports = User;