var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var util = require("util");
var mongoose = require( 'mongoose' );
var creds = require('../config/rotten.js');
var rottenAPI = require("../lib/rotten/rotten.js")(creds.apiKey);
var db = require('../config/db');

var Bookmark = require('../models/bookmark');



mongoose.connect(db.url, function (err) {
    if (err) { console.log ('ERROR connecting to: ' + db.url + '. ' + err);}
    else { console.log ('Succeeded connected to: ' + db.url);}
});





router.get('/bookmarks', function(req, res){
	console.log('getting bookmarks')
	
	Bookmark.find(function( err, docs ) {
        if( !err ) {
        	console.log('----------we good');
        	console.log(docs);
            res.json(docs);
        } else {
            console.log( err );
            res.send('Err gettign bookmarks!');
        }
    });
});


router.post('/bookmarks/', function(req, res){
	console.log('POSTING');
	newRottenId = req.body.rottenId
	var bookmark = new Bookmark({
	  rottenId: newRottenId
	}).save(function(err, bookmark) {
	  if (err) return console.error(err);
	  console.dir(bookmark);
	});

});


router.put('/bookmarks/:id', function(req, res){
	console.log('PUTTING a bookmark!');
	console.log(req.body);	
});


router.delete('/bookmarks/:id', function(req, res){
	console.log('DELTE THIS BOOKMARK bookmark!');
	id = req.params.id
	Bookmark.findById(req.params.id, function (err, bookmark){
		bookmark.remove(function(err){
		if (!err) {
	        console.log("removed");
	        return res.send('');
	      } else {
	        console.log(err);
	      }
		})
	})
});





router.get('/', function(req, res) {
  res.send('we got movies');
});

router.get('/movieGet/:id', function(req, res){
	rottenAPI.movieGet({id: req.params.id}, function(err,data){
		if (err) console.log(err);
		console.log('GET: MOVIE ' + req.params.id)
		console.log(data);
		res.send(data);
	});

});

router.get('/inTheaters', function(req, res){
	rottenAPI.listMoviesInTheaters({page_limit:40}, function(err,data){
		if (err) console.log(err);
		console.log(data);
		res.send(data);
	});

});


router.get('/topRentals', function(req, res){
	rottenAPI.listDvdsTopRentals({page_limit:20}, function(err,data){
		if (err) console.log(err);
		console.log(data);
		res.send(data);
	});

});


router.get('/newReleases', function(req, res){
	rottenAPI.listDvdsNewReleases({page_limit:20}, function(err,data){
		if (err) console.log(err);
		console.log(data);
		res.send(data);
	});

});


router.get('/search', function(req, res){
	rottenAPI.movieSearch({q: req.query.q, page_limit:20}, function(err,data){
		if (err) console.log(err);
		console.log(data);
		res.send(data);
	});
});





module.exports = router;