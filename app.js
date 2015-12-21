
/**
 * Module dependencies
 */

var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('express-error-handler'),
  morgan = require('morgan'),
  mongoose = require('mongoose'),
  session = require('express-session'),
  routes = require('./routes'),
  api = require('./routes/api'),
  http = require('http'),
  path = require('path'),
  fs = require('fs');
//register all models
fs.readdir('./models', function(err,files) {
  files.forEach(function(file){
    require('./models/' + file);
  });
});

var app = module.exports = express();

//Connect to db
mongoose.connect("mongodb://localhost/angularApp");


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(session({secret: 'keyboard cat', resave: false,saveUninitialized: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
  app.use(errorHandler());
}

// production only
if (env === 'production') {
  // TODO
}


/**
 * Routes
 */

//middleware to get type of data
app.use('/api/:type', function(req,res,next){
  var model = mongoose.model(req.params.type);
  req.model = model;
  next();
});

app.get('/', routes.index);
app.get('/partials/:type/:name', routes.partials);

// JSON API
app.get('/api/:type', api.getAll);
app.post('/api/:type/create', api.add);
app.get('/api/:type/:id', api.getOne);
app.put('/api/:type/:id', api.update);
app.delete('/api/:type/:id', api.remove);

// redirect all others to the index (HTML5 history)
//app.get('*', routes.index);


/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
