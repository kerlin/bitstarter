// run with node:
// node web.js
var express = require('express');

var fs = require('fs');

// Warning: express.createServer() is deprecated, express
// applications no longer inherit from http.Server,
// please use:
//
//  var express = require("express");
//  var app = express();
//
//var app = express.createServer(express.logger());

var app = express(express.logger());

app.get('/', function(request, response) {
  var buffer = fs.readFileSync('index.html');
  response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
