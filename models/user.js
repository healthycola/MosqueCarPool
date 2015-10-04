var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    name: String,
    username: String,
    password: String,
    currentLocation: { lat: Number, long: Number }
});

module.exports = mongoose.model('User', User);