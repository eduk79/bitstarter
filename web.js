var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var buff = fs.readFileSync('index.html');
var txt = buff.toString();

app.get('/', function(request, response) {
    response.send(txt);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});