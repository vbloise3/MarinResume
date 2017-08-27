var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by vincebloise on 1/18/17.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import 'rxjs/add/operator/map';
import { YoMoFoComponent } from './yo-mo-fo/yo-mo-fo';
import AppComponent from './appComponent/appComponent';
import HomeComponent from './home/home';
import { routing } from './app.routing';
import { MaterialModule } from '@angular/material';
import { MdSidenavModule, MdToolbarModule } from '@angular/material';
import 'node_modules/hammerjs/hammer.js';
import { Material2AppAppComponent, DialogContent } from './app.component/app.component';
import { PersonalInterestsComponent, DialogContent2 } from './personalInterests.component/personalInterests.component';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [BrowserModule, ReactiveFormsModule, RouterModule,
                HttpModule, routing, MaterialModule, MdSidenavModule, MdToolbarModule, BrowserAnimationsModule],
            declarations: [AppComponent, HomeComponent, YoMoFoComponent, Material2AppAppComponent, DialogContent, PersonalInterestsComponent, DialogContent2],
            entryComponents: [DialogContent, DialogContent2],
            providers: [
                { provide: LocationStrategy, useClass: HashLocationStrategy }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map