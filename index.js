var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get("/api/:date?", function (req, res) {
  console.log(req.params.date)
  var d = new Date(Number(req.params.date))
  res.json({unix: "", utc: d});
});



// process.env.PORT
var listener = app.listen(8080, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
