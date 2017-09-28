import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { AdmissiondetailComponent } from './admissiondetail/admissiondetail.component';
import { ExistingbatchComponent } from './existingbatch/existingbatch.component';
import { FeesdetailsComponent } from './feesdetails/feesdetails.component';
import { CoursedetailComponent } from './coursedetail/coursedetail.component';
import { LeturesdetailComponent } from './leturesdetail/leturesdetail.component';
import { NewbatchComponent } from './newbatch/newbatch.component';
import { AngularComponent } from './angular/angular.component';


@NgModule({
  declarations: [
    AppComponent,
    AdmissiondetailComponent,
    ExistingbatchComponent,
    FeesdetailsComponent,
    CoursedetailComponent,
    LeturesdetailComponent,
    NewbatchComponent,
    AngularComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
