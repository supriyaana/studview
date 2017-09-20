    import { NgModule } from '@angular/core';
    import { RouterModule } from '@angular/router';

    import { AppComponent } from './app.component';
    import { AdmissiondetailComponent } from './admissiondetail/admissiondetail.component';
    import { ExistingbatchComponent } from './existingbatch/existingbatch.component';
    import { FeesdetailsComponent } from './feesdetails/feesdetails.component';
    import { CoursedetailComponent } from './coursedetail/coursedetail.component';
    import { LeturesdetailComponent } from './leturesdetail/leturesdetail.component';
    import { NewbatchComponent } from './newbatch/newbatch.component';


    @NgModule({
        imports:[
            RouterModule.forRoot([
             {  path:'',redirectTo:'/Admissiondetail',pathMatch:"full" },
             {  path:'Admissiondetail',component:AdmissiondetailComponent },
             { path:'Existingbatch',component:ExistingbatchComponent },
             { path:'Feesdetail',component:FeesdetailsComponent },
             { path:'Coursedetail',component:CoursedetailComponent },
             { path:'lecturesdetail',component:LeturesdetailComponent },
             { path:'newbatch',component:NewbatchComponent }


            ]),
        ],
        exports:[
            RouterModule
        ]

    })

        export class RoutingModule{} 