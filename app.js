var express = require('express');
var path = require('path');

// Declarations
var app = express();

// Static files
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'views')))

app.get('/', function(req, res) {
  res.render('index');
})

app.listen(3000);
