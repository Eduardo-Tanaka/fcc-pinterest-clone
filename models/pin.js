'use strict';

var mongoose = require('mongoose');

var schema = mongoose.Schema({
    username: String,
    title: String,
    url: String
});

var Pin = mongoose.model('Pin', schema);

module.exports = Pin;