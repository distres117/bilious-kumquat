
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  var type = req.params.type;
  res.render('partials/' + type + '/' + name);
};