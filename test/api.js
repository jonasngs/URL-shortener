var http = require('http');
 
module.exports = {
  get: function(callback) {
    var req = http.request({
      hostname: 'http://localhost:5000',
      path: '/111'
    }, function(response) {
      var data = '';
      response.on('data', function(chunk) {
        data += chunk;
      });
 
      response.on('end', function() {
        callback(null, JSON.parse(data));
      });
    });
 
    req.end();
  },
 
  post: function(data, callback) {
    var req = http.request({
      hostname: 'http://localhost:5000',
      path: '/shorten-url',
      method: 'POST'
    }, function(response) {
      var data = '';
      response.on('data', function(chunk) {
        data += chunk;
      });
 
      response.on('end', function() {
        callback(null, JSON.parse(data));
      });
    });
 
    req.write(JSON.stringify(data));
 
    req.end();
  }
};