var http = require('http');
var config = require('./config.js');
var api = require('instagram-node').instagram();
 
api.use({ access_token: config.instagram.token } );

api.tag_search('latinoware', function(err, result, remaining, limit) {
  console.log(JSON.stringify(result));
});


//api.tag_media_recent('latinoware', [options,] function(err, medias, pagination, remaining, limit) {});


// Note from instagram API As another example, let's consider an endpoint that returns a list of media: /tags/{tag-name}/media/recent. The response returned by this endpoint will contain only media with the given tag, as expected. But instead of returning media from any public Instagram user, it will return only media that belongs to your sandbox users, restricted to the last 20 for each user.


api.tag_media_recent('latinoware', function(err, medias, pagination, remaining, limit) {
  console.log(JSON.stringify(medias));
});


