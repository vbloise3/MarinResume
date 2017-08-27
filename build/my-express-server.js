"use strict";
/**
 * Created by vincebloise on 1/17/17.
 */
var express = require("express");
var app = express();
app.get('/', function (req, res) { return res.send('Hello from Express'); });
app.get('/products', function (req, res) { return res.send('Got a request for products'); });
app.get('/reviews', function (req, res) { return res.send('Got a request for reviews'); });
app.get('/ass-hole', function (req, res) { return res.send('Fuck you, my fucking ass hole!'); });
var server = app.listen(8000, "localhost", function () {
    var _a = server.address(), address = _a.address, port = _a.port;
    console.log('Listening on %s %s', address, port);
});
