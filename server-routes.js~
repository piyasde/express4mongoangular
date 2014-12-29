// server.js

// BASE SETUP
// ==============================================

var express = require('express');
var userwork = require('./dataaccess/userdao');
var config = require('./utilpackages/config');
var util = require('./utilpackages/util');


// ROUTES
// ==============================================

// sample route with a route the way we're used to seeing it
module.exports = function(app) {

	app.get('/sample', function(req, res) {
		res.send('this is a sample!');	
	});

	// we'll create our routes here

	// get an instance of router
	var router = express.Router();

	// route middleware that will happen on every request
	router.use(function(req, res, next) {

		// log each request to the console
		console.log(req.method, req.url);

		// continue doing what we were doing and go to the route
		next();	
	});


	// about page route (http://localhost:8080/about)
	router.get('/about', function(req, res) {
		res.send('im the about page!');	
	});

	// apply the routes to our application
	app.use('/', router);

	// get Users Route
	app.route('/getusers')
		// show the form (GET http://localhost:8080/getangularusers)
		.get(function(req, res) {
			res.header("Access-Control-Allow-Origin", "http://localhost");
			res.header("Access-Control-Allow-Methods", "GET, POST");
			//*********************//
			userwork.getUser(function (err, userString) {
				console.log(userString);
				var userJson = JSON.parse(userString);
				
				if (err) {
				  res.send(HTTPStatus.INTERNAL_SERVER_ERROR,'Internal Server Error');
				}

				if(userJson.length>0)
				{
					res.writeHead(200, {'Content-Type': 'application/json'});
					res.end(userJson);
				}
				else
				{
					res.end('No user found');
				}
			  });
			});

	app.route('/insertuser')
		.post(function(req, res) {
		        res.header("Access-Control-Allow-Origin", "http://localhost");
			res.header("Access-Control-Allow-Methods", "GET, POST");
  			console.log(req.body);
			console.log(req.body.mydata);
			var jsonBody = req.body;
			userwork.insertUser(req.body.mydata, function (err, contents) {
			        if (err) {
					res.end( "User not saved");
				}
				else {
					res.end( "User saved");
				}
			});
		});
	
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
	// if user is authenticated in the session, carry on 
	if (req.isAuthenticated())
		return next();
	// if they aren't redirect them to the home page
	res.redirect('/');
}

