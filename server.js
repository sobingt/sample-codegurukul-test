var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname+'/public'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(favicon(__dirname+"/favicon.ico"))
//Create servers in specfic ports
//Create routes for the servers

app.set('views',__dirname+"/views");
app.set('view engine','jade');

var i = 0;
var greetSobin = function(req, res, next){
	if(i==1)
	{
		res.send('Hello World Sobin');
	}
	else
	{
		i =2
		next();
	}
};
var greetKarthik = function(req, res, next){
	res.send('Hello World Karthik ' + i);
};
app.get('/', greetSobin, greetKarthik);
app.get('/home',function(req,res){
	var data = {'name':'Sobin', 'age': 27, 'gender': 'Male'};
	res.render('index',data);
});
//middleware
//app.get('/admin', isLogin, isAdmin, showDashboard);


app.post('/', function(req, res){
	res.send('Hello World via POST');
});

app.put('/', function(req, res){
	res.send('Hello World via PUT');
});

// HTTP Protocolsvia
// GET
// POST
// PUT
// DELETE

// MVC
// Model View Controller
// A controller can send commands to the model to update the model's state (e.g., editing a document). It can also send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document).
// A model stores data that is retrieved according to commands from the controller and displayed in the view.
// A view generates an output presentation to the user based on changes in model.

app.listen(3000);