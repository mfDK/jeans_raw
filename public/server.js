(function() {
    'use strict';

     var express = require('express');
     var path = require('path');
     var app = express();

     app.use(express.static('public'));

     app.get('/', function(req, res) {
         res.sendFile(express.static(path.join(__dirname, 'index.html')));
     });

     app.listen(3000, function(req, res) {
         console.log("You are on http://localhost:3000");
     })
})();
