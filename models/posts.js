var mongoose = require('mongoose');
var crudMethods = require('../helpers/modelMethods.js');


var postsSchema = new mongoose.Schema({
	title: String,
	text: String,
	username: String
});

crudMethods(postsSchema);
mongoose.model('posts', postsSchema);



