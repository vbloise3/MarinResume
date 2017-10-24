var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Created by vincebloise on 1/25/17.
 */
import { Component, Optional, ViewEncapsulation } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
var Material2AppAppComponent = /** @class */ (function () {
    function Material2AppAppComponent(_dialog, /*private _mdsidenav: MdSidenav,*/ _snackbar, http, route, _router) {
        var _this = this;
        this._dialog = _dialog;
        this._snackbar = _snackbar;
        this.http = http;
        this._router = _router;
        this.isDarkTheme = false;
        this.myEmail = 'mbloise3@gmail.com';
        this.selected = '';
        this.currentPath = '';
        this.foods = [
            { name: 'Pizza', rating: 'Excellent' },
            { name: 'Burritos', rating: 'Great' },
            { name: 'French fries', rating: 'Pretty good' },
        ];
        this.progress = 0;
        this.products = this.http.get('/products')
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            _this.errorMessage = "Can't get product details from " + err.url + ", error " + err.status + " ";
            return Observable.empty();
        });
        this.productId = route.snapshot.params['id'];
        this.randomness = this.getRandomNumber();
        this.currentPath = this._router.url;
        // Update the value for the progress-bar on an interval.
        setInterval(function () {
            _this.progress = (_this.progress + Math.floor(Math.random() * 4) + 1) % 100;
        }, 200);
    }
    Material2AppAppComponent.prototype.getRandomNumber = function () {
        return Math.random();
    };
    Material2AppAppComponent.prototype.select = function (text) {
        this.selected = text;
        this.lastDialogResult = text;
    };
    Material2AppAppComponent.prototype.getCurrentPath = function () {
        if (this.currentPath === '/')
            return true;
        else
            return false;
    };
    Material2AppAppComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this._dialog.open(DialogContent);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.lastDialogResult = result;
        });
    };
    Material2AppAppComponent.prototype.showSnackbar = function () {
        this._snackbar.open('YUM SNACKS', 'CHEW');
    };
    Material2AppAppComponent.prototype.sendEmail = function () {
        window.open('mailto:' + this.myEmail + '?subject=Resume&body=Contacting you about your resume.', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=100000, top=100000, width=1, height=1, visible=none');
    };
    Material2AppAppComponent.prototype.navigateToHome = function () {
        this._router.navigate(["/"]);
        //this._mdsidenav.close();
    };
    Material2AppAppComponent = __decorate([
        Component({
            selector: 'material2-app-app',
            templateUrl: 'app/app.component/app.component2.html',
            styleUrls: ['app/app.component/app.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [MdDialog, MdSnackBar, Http, ActivatedRoute, Router])
    ], Material2AppAppComponent);
    return Material2AppAppComponent;
}());
export { Material2AppAppComponent };
var DialogContent = /** @class */ (function () {
    function DialogContent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DialogContent = __decorate([
        Component({
            template: "\n    <!--div id=\"container\" class=\"centerIt\"-->\n        <md-toolbar color=\"primary\" style=\"height: 0.25em; width: 114%; margin-left: -1em; margin-top: -1em;\">            \n            <img class=\"mdCardSmallDialogImg\" src=\"app/app.component/MarinBioPic2.png\">\n            <span id=\"center\" class=\"textBottom largeFont\" style=\"width: 50%; margin-left: -1em;\">&nbsp;My Contact Info</span>            \n        </md-toolbar>\n    <!--/div-->\n    <table>\n        <tr>\n          <td><a href=\"mailto:meb339@scarletmail.rutgers.edu?Subject=Resume\" style=\"color: blue;\"><i class=\"material-icons md-18 iconBottom\">email</i>meb339@scarletmail.rutgers.edu</a></td>\n          <td><a href=\"tel:610-308-1130\" style=\"color: blue\"><i class=\"material-icons md-18 iconBottom\">phone_iphone</i>610-308-1130</a></td>\n        </tr>\n    </table>\n    <div class=\"centerIt2\">\n        <button md-raised-button md-autofocus (click)=\"dialogRef.close('done')\">Done</button>\n    </div>\n  ",
        }),
        __param(0, Optional()),
        __metadata("design:paramtypes", [MdDialogRef])
    ], DialogContent);
    return DialogContent;
}());
export { DialogContent };
//# sourceMappingURL=app.component.js.map