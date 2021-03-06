import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MdToolbarModule, MdIconModule, MdMenuModule, MdButtonModule,
    MdInputModule, MdSelectModule, MdOptionModule,
    MdCardModule, MdTableModule, MdSidenavModule
} from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule ({
    imports: [
        CommonModule
    ],
    exports: [
        MdToolbarModule, MdIconModule, MdMenuModule, MdButtonModule,
        MdInputModule, MdSelectModule, MdOptionModule, MdCardModule,
        MdTableModule, BrowserAnimationsModule, MdSidenavModule
    ]
})
export class MyMaterialModule {}
