var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get("/api/:date?", function (req, res) {
  try {
    if (req.params.date) {
      var d = new Date(isNaN(Number(req.params.date)) ? Date.parse(req.params.date) : Number(req.params.date))
      if (isNaN(d)) throw "Invalid Date";
      return res.json({unix: d.getTime(), utc: d.toUTCString()});
    }
    var d = new Date()
    return res.json({unix: d.getTime(), utc: d.toUTCString()});
  } catch {
    return res.json({error: "Invalid Date"});
  }
});



// process.env.PORT
var listener = app.listen(8080, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
