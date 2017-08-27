"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by vincebloise on 1/18/17.
 */
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.products = [];
        this.theDataSource = this.http.get('/products')
            .map(function (res) { return res.json(); });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the data from the server
        this.theDataSource.subscribe(function (data) {
            if (Array.isArray(data)) {
                _this.products = data;
            }
            else {
                _this.products.push(data);
            }
        }, function (err) {
            return console.log("Can't get products. Error code: %s, URL: %s ", err.status, err.url);
        }, function () { return console.log('Product(s) are retrieved'); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'http-client',
        template: "<h1>All Products</h1>\n  <ul>\n    <li *ngFor=\"let product of products\">\n       {{product.title}}\n    </li>\n  </ul>\n  "
    })
], AppComponent);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            http_1.HttpModule],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
], AppModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
