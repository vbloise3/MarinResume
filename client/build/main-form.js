var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by vincebloise on 1/19/17.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import 'rxjs/add/operator/map';
var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
    }
    AppComponent.prototype.getProductByID = function (formValue) {
        var _this = this;
        this.http.get("/products/" + formValue.productID)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.productTitle = data.title;
            _this.productPrice = "$" + data.price;
        }, function (err) { return console.log("Can't get product details. Error code: %s, URL: %s ", err.status, err.url); }, function () { return console.log('Done'); });
    };
    AppComponent = __decorate([
        Component({
            selector: 'http-client',
            template: "<h1>Find Product By ID</h1>\n     <form #f=\"ngForm\" (ngSubmit) = \"getProductByID(f.value)\" >\n       <label for=\"productID\">Enter Product ID</label>\n       <input id=\"productID\" type=\"number\" name = \"productID\" ngModel>\n       <button type=\"submit\">Find Product</button>\n     </form>\n     <h4>{{productTitle}} {{productPrice}}</h4>\n  "
        }),
        __metadata("design:paramtypes", [Http])
    ], AppComponent);
    return AppComponent;
}());
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [BrowserModule, FormsModule, HttpModule],
            declarations: [AppComponent],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main-form.js.map