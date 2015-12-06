// initialize our faux database
/*var data = {
  "posts": [
    {
      "title": "Lorem ipsum",
      "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      "title": "Sed egestas",
      "text": "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus."
    }
  ]
};*/
//var posts = require('../models/post'); //post model

//GET
exports.getAll = function(req,res){
	req.model.getAll(function(data){
		res.json({
			posts: data
		});
	});

};

exports.getOne = function(req,res){
	var id = req.params.id;
	req.model.getOne(id, function(err, data){
		if (err)
			res.json(false);
		else
			res.json({
				post: data
			});
	});
	
};

//POST 
exports.add = function(req,res){
	req.model.addNew(req.body, function(){
		res.json(req.body);
	});
};

//PUT
exports.update = function(req,res) {
	var id = req.params.id;
	var data = req.body;
	req.model.update(id, data, function(err){
		if (err) console.error(err);
		else res.json(true);
	});
};

//DELETE
exports.remove= function(req,res){
	var id = req.params.id;
	req.model.remove(id, function(err){
		if (err)
			res.json(err);
		else
			res.json(true);
	});
};



















