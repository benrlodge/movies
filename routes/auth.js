var express = require('express');
var router = express.Router();


var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
 
var FACEBOOK_APP_ID = 'your app id';
var FACEBOOK_APP_SECRET = 'your app secret';



/* GET users listing. */
router.get('/', function(req, res) {
  
});



module.exports = router;
