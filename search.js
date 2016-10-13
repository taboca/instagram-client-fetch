var http = require('http');
var config = require('./config.js');
var api = require('instagram-node').instagram();
 
api.use({ access_token: config.instagram.token } );

api.tag_search('latinoware', function(err, result, remaining, limit) {
  console.log(JSON.stringify(result));
});

