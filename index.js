var express = require('express');
var parser = require('body-parser')
var _ = require('underscore');
var ejs = require('ejs');
var fs = require('fs');

var app = express();
app.use(parser.urlencoded({extended: false}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	fs.readFile('./data.json', 'utf8', function(err, data){
		if(err){
			console.log(err);
		}
		res.render('landing', {articles: JSON.parse(data)});
	});
});

app.listen(3030, function() {
	console.log('Server is listenin on port 3030!');
});