module.exports = function(model){

	model.statics.getAll = function(cb) {
		this.find(function(err,data){
		if (err) return console.error(err);
		cb(data);
		});
	};

	model.statics.getOne = function(id,cb){
		this.findById(id, function(err,data){
			cb(err,data);
		});
	};

	model.statics.update = function(id,data, cb){
		this.findByIdAndUpdate(id, {$set: data}, function(err){
			cb(err);
		});
	};

	model.statics.addNew = function(data, cb) {
		this.create(data, function(err){
			if (err) return console.write(err);
			cb(err);
		});
	};

	model.statics.remove = function(id, cb){
		this.findByIdAndRemove(id, function(err){
			cb(err);
		});
	};
}