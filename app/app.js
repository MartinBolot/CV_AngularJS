
var express = require('express');
var app = express();

app.use("/",express.static(__dirname));
app.get('/', function (req, res) {
  res.sendFile("index.html",{root: __dirname});
});

app.listen(8000, function () {
  console.log('CV_Angular App listening on port 8000');
});
