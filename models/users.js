var mongoose = require('mongoose');
var crudMethods = require('../helpers/modelMethods.js');


var usersSchema = new mongoose.Schema({
	name: String,
	address: String,
	points: Number
});

crudMethods(usersSchema);
mongoose.model('users', usersSchema);
