'use strict'

const express = require('express');
const app     = express();
const port    = process.env.PORT || 3000;

const taquerias = [
	
	{name: "La Tagueria"},
	{name: "El Farolito"},
	{name: "Taqueria Cancun"}

];

const cafes = [

	{name: "Leelas", rating: "5"},
	{name: "Ink", rating: "3"},
	{name: "Peaches", rating: "4"}
];




//MiddleWare

app.use(express.static('public'));

app.use(function(req,res,next) {
	console.log("middleware hit");
	console.log("%s request to %s", req.method, req.path);
	next();
});




//This is the controller 
function homeController (req, res) {
console.log("controller is hit");
res.sendFile(__dirname + "/views/index.html");
}

//This is a router
app.get('/', homeController);

app.get('/api/taquerias', function(req,res) {
	res.json(taquerias);
});

app.get('/api/cafes', function(req,res) {
	res.json(cafes);
});

app.listen(port, function() {
	console.log('Server started on', port);
});