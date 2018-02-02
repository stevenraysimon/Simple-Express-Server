var express = require('express')
var app = express()

var submissions = [];

app.get('/', function (req, res) {
  res.send('Hello World!')
  //var fileToSend = "index.html";
  //res.sendfile(fileToSend, {root: './public'}); // Files inside "public" folder
})


app.get('/picture', function (req, res) {
  var fileToSend = "pic.jpg";
  res.sendfile(fileToSend, {root: './'}); // Files inside "public" folder
})


app.listen(9000, function () {
  console.log('Example app listening on the 9000!')
})
