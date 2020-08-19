import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
import { MatIconModule } from '@angular/material/icon';
import { IconOverviewExampleComponent } from './components/icon-overview-example/icon-overview-example.component';
import {  MatTableModule } from "@angular/material/table";
import {  MatSortModule } from "@angular/material/sort";
import {  MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {  MatPaginatorModule } from "@angular/material/paginator";
import {  MatInputModule } from "@angular/material/input";
import {  MatToolbarModule } from "@angular/material/toolbar";
import {  MatDialogModule } from "@angular/material/dialog";
import {  MatFormFieldModule } from "@angular/material/form-field";
import {  MatButtonModule } from "@angular/material/button";

import {CommonModule} from '@angular/common';

import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
 //import { rowAnimation } from '@angular/animations';


export class MaterialModule {}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    ListComponent,
    IconOverviewExampleComponent,
    DialogBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule
    // rowAnimation
  ],
  entryComponents: [
    DialogBoxComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
