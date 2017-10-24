"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by vincebloise on 1/18/17.
 */
var express = require("express");
var path = require("path");
var app = express();
app.use('/', express.static(path.join(__dirname, '..', 'client')));
app.use('/node_modules', express.static(path.join(__dirname, '..', 'node_modules')));
var Product = /** @class */ (function () {
    function Product(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
    return Product;
}());
var products = [
    new Product(0, "Regulator", 64.99),
    new Product(1, "Solar Panel", 184.99),
    new Product(2, "Battery", 254.99),
    new Product(3, "ARB Fridge", 1099.99),
    new Product(4, "Generator", 299.99)
];
function getProducts() {
    return products;
}
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/main.html'));
});
app.get('/vbloise', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/app/vbloise.html'));
});
app.get('/products', function (req, res) {
    res.json(getProducts());
});
function getProductById(productId) {
    return products.find(function (p) { return p.id === productId; });
}
app.get('/products/:id', function (req, res) {
    res.json(getProductById(parseInt(req.params.id)));
});
app.get('/ass-hole', function (req, res) { return res.send('Fuck you, my fucking ass hole!'); });
var server = app.listen(8081, "localhost", function () {
    var _a = server.address(), address = _a.address, port = _a.port;
    console.log('Listening on %s %s', address, port);
});
