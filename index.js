var http = require('http');
var express = require('express');
var config = require('../config.js'),
var api = require('instagram-node').instagram();
var app = express();
 
api.use({
  client_id: config.instagram.id,
  client_secret: config.instagram.secret
});

var redirect_uri = 'http://telasocial.com:3333/auth';
 
exports.authorize_user = function(req, res) {
  res.redirect(api.get_authorization_url(redirect_uri, { scope: ['likes'], state: 'a state' }));
};
 
exports.handleauth = function(req, res) {
  api.authorize_user(req.query.code, redirect_uri, function(err, result) {
    if (err) {
      console.log(err.body);
      res.send("Didn't work");
    } else {
      console.log('Yay! Access token is ' + result.access_token);
      res.send('You made it!!');
    }
  });
};
 
// This is where you would initially send users to authorize 
app.get('/authorize_user', exports.authorize_user);
// This is your redirect URI 
app.get('/handleauth', exports.handleauth);
 
http.createServer(app).listen(3333, function(){
  console.log("Express server listening on port " + app.get('port'));
});
