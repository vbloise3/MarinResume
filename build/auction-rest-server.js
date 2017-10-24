"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by vincebloise on 1/18/17.
 */
var express = require("express");
var app = express();
var Product = /** @class */ (function () {
    function Product(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
    return Product;
}());
var products = [
    new Product(0, "First Product", 24.99),
    new Product(1, "Second Product", 64.99),
    new Product(2, "Third Product", 74.99),
    new Product(3, "ass hole product", 99.99)
];
function getProducts() {
    return products;
}
app.get('/', function (req, res) {
    res.send('The URL for products is http://localhost:8000/products');
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
var server = app.listen(8000, "localhost", function () {
    var _a = server.address(), address = _a.address, port = _a.port;
    console.log('Listening on %s %s', address, port);
});
