import { NgModule } from '@angular/core';
import {Routes,RouterModule,Router} from '@angular/router';
import {DashboardComponent} from "../dashboard/dashboard.component"
import {EnquiriesListComponent} from "../enquiries-list/enquiries-list.component"

const MyRoutes:Routes=[
    { path:"", redirectTo:"Dashboard",pathMatch:"full"},
    { path:"Dashboard",component:DashboardComponent},
    { path:"Enquiries",component:EnquiriesListComponent},
    { path:"Class",component:DashboardComponent},
    { path:"Section",component:DashboardComponent},
]


@NgModule({
    imports:[
        RouterModule.forRoot(MyRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutes{
}

export const ComponentList:any=[DashboardComponent,EnquiriesListComponent]
