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
 * Created by vincebloise on 12/22/16.
 */
import { Component } from '@angular/core';
var YoMoFoComponent = /** @class */ (function () {
    function YoMoFoComponent() {
        this.name = 'mon vieux!';
    }
    YoMoFoComponent = __decorate([
        Component({
            selector: 'yo-mo-fo',
            templateUrl: 'app/yo-mo-fo/yo-mo-fo.html'
        }),
        __metadata("design:paramtypes", [])
    ], YoMoFoComponent);
    return YoMoFoComponent;
}());
export { YoMoFoComponent };
//# sourceMappingURL=yo-mo-fo.js.map