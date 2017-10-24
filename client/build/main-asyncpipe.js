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
import { HttpModule, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import { Observable } from "rxjs/Observable";
import { YoMoFoComponent } from './yo-mo-fo/yo-mo-fo';
var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        var _this = this;
        this.http = http;
        this.products = this.http.get('/products')
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            _this.errorMessage = "Can't get product details from " + err.url + ", error " + err.status + " ";
            return Observable.empty();
        });
    }
    AppComponent = __decorate([
        Component({
            selector: 'http-client',
            template: "<h1>All Products</h1>\n  <ul>\n    <li *ngFor=\"let product of products | async\">\n       {{product.title}}\n    </li>\n  </ul>\n  <h2>{{errorMessage}}</h2>\n  <yo-mo-fo></yo-mo-fo>\n  "
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
            imports: [BrowserModule,
                HttpModule],
            declarations: [AppComponent, YoMoFoComponent],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main-asyncpipe.js.map